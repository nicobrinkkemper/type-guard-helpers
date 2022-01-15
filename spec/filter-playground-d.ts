import { expectType } from 'tsd';
// these -d.ts files are a playground to test the type-check patterns
// try messing any of the types up to see what errors you'll get

import {
	excludeGuard,
	guardArrayValues,
	guardEither,
	guardEitherIn,
	isNull,
	isTypeString,
	match,
	matchExactSchema,
	matchIn,
	matchSchema,
} from '../src';

import { filterGuard } from './filterGuard';

const foo = match('foo');
const bar = match('bar');

const isStringOrNullSpread = guardEither(isNull, isTypeString);
const isStringOrNullArray = guardEitherIn([isNull, isTypeString]);

const test = {} as unknown;
if (isStringOrNullSpread(test)) {
	expectType<string | null>(test);
}
if (isStringOrNullArray(test)) {
	expectType<string | null>(test);
}
// compose with matchSchema

const matchBarSchemaExact = matchExactSchema({ bar });
const matchFooSchemaExact = matchExactSchema({ foo });
const matchFooBarSchemaExact = matchExactSchema({
	foo,
	bar,
});
const orFooBar = guardEither(
	matchBarSchemaExact,
	matchFooSchemaExact,
	matchFooBarSchemaExact
);
if (orFooBar(test)) {
	expectType<
		| {
				readonly foo: 'foo';
		  }
		| {
				readonly bar: 'bar';
		  }
		| {
				readonly foo: 'foo';
				readonly bar: 'bar';
		  }
	>(test);
}

const teasers = [{ type: 'a' }, { type: 'a' }, { type: 'b' }, { type: 'c' }];

const types = ['a', 'b', 'C'] as const;
const isTeaser = guardEither(
	matchSchema({ type: match('a') }),
	matchSchema({ type: match('b') }),
	matchSchema({ type: match('c') })
);
const isAnyTeaser = matchSchema({ type: matchIn(types) });
const isTeasers = guardArrayValues(isTeaser);
if (isTeasers(teasers)) {
	expectType<
		// eslint-disable-next-line functional/prefer-readonly-type
		{ type: string }[] &
			readonly (
				| { readonly type: 'a' }
				| { readonly type: 'b' }
				| { readonly type: 'c' }
			)[]
	>(teasers);
	const isTeasers2 = filterGuard(isAnyTeaser)(teasers);
	expectType<
		readonly {
			readonly type: 'a' | 'b' | 'C';
		}[]
	>(isTeasers2);
}

const isTeasers3 = filterGuard(isTeaser)(teasers);
expectType<
	readonly (
		| {
				readonly type: 'a';
		  }
		| {
				readonly type: 'b';
		  }
		| {
				readonly type: 'c';
		  }
	)[]
>(isTeasers3);

const isTeasersNative = teasers.filter(isTeaser);
expectType<
	// eslint-disable-next-line functional/prefer-readonly-type
	({ readonly type: 'a' } | { readonly type: 'b' } | { readonly type: 'c' })[]
>(isTeasersNative);

const isNotTeaser = excludeGuard(isTeaser)(teasers);
expectType<
	readonly {
		// eslint-disable-next-line functional/prefer-readonly-type
		type: string;
	}[]
>(isNotTeaser);

const isNotTeaser2 = excludeGuard(isAnyTeaser)(teasers);
expectType<
	readonly {
		// eslint-disable-next-line functional/prefer-readonly-type
		type: string;
	}[]
>(isNotTeaser2);

// Filter const
const teasersConst = [
	{ type: 'a' },
	{ type: 'a' },
	{ type: 'b' },
	{ type: 'c' },
	{ type: 'D' },
] as const;

const isTeasersConst = filterGuard(isTeaser)(teasersConst);
expectType<
	readonly [
		{
			readonly type: 'a';
		},
		{
			readonly type: 'a';
		},
		{
			readonly type: 'b';
		},
		{
			readonly type: 'c';
		}
	]
>(isTeasersConst);

// excluding
const isTeasersExclude = excludeGuard(isTeaser)(teasers);
expectType<
	readonly {
		// eslint-disable-next-line functional/prefer-readonly-type
		type: string;
	}[]
>(isTeasersExclude);

const isTeasersConstExclude = excludeGuard(isTeaser)(teasersConst);
expectType<
	readonly [
		{
			readonly type: 'D';
		}
	]
>(isTeasersConstExclude);
