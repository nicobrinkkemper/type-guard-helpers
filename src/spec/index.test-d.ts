import { expectType } from 'tsd';

import {
	excludeGuard,
	excludeNonNullable,
	excludeUndefined,
	fixExclude,
	fixGuard,
	guardAll,
	guardAllIn,
	guardArrayValues,
	guardOption,
	guardRecord,
	hookGuard,
	isNonNullable,
	isNull,
	isTypeString,
	isUndefined,
	logGuard,
	match,
	matches,
	matchSchema,
	matchType,
	negateGuard,
} from '../lib';

const foo = 'foo';
const bar = 'bar';
const foobar = 'foobar';
const barOrString = bar as string | undefined;
const unknownFoobar = 'foobar' as unknown;
const stringOrNull = {} as string | null;
const test = {} as unknown;

// readme examples
const isFoo = match(foo);
const isBar = match(bar);
if (isBar(test)) {
	expectType<'bar'>(test);
}

const isFooBarItem = guardOption(isFoo, isBar);
const isStatus = matches(200, 404);
const isFooBarArray = guardArrayValues(isFooBarItem);
guardArrayValues((val, i, values): val is string => {
	expectType<unknown>(val);
	expectType<number>(i);
	expectType<readonly unknown[]>(values);
	return typeof val === 'string';
});
const isResponse = matchSchema({
	items: isFooBarArray,
	status: isStatus,
});
if (isResponse(test)) {
	expectType<{
		readonly items: readonly ('foo' | 'bar')[];
		readonly status: 200 | 404;
	}>(test);
}

// match
if (isBar(bar)) {
	expectType<'bar'>(bar);
} else {
	expectType<unknown>(test);
}
if (isBar(barOrString)) {
	expectType<'bar'>(barOrString);
} else {
	expectType<unknown>(test);
}

// matchSchema
const isFooObject = matchSchema({
	foo: isFoo,
	bar: isBar,
});
if (isFooObject(test)) {
	expectType<{ readonly foo: 'foo'; readonly bar: 'bar' }>(test);
}
if (isFooObject(test)) {
	expectType<{ readonly foo: 'foo'; readonly bar: 'bar' }>(test);
}

// negateGuard
const isNotString = negateGuard(isTypeString);
if (isNotString(stringOrNull)) {
	expectType<null>(stringOrNull);
}
if (!isNotString(stringOrNull)) {
	expectType<string>(stringOrNull);
}

// guardAll
const startsWithFoo = guardAll(
	matchType('string'),
	(val): val is `foo${string}` => val.startsWith('foo')
);
if (startsWithFoo(test)) {
	expectType<`foo${string}`>(test);
}

const isFooBarGuardAll = guardAll(
	matchType('string'),
	(val): val is `foobar` => val === foobar
);

if (isFooBarGuardAll(test)) {
	expectType<'foobar'>(test);
}
if (isFooBarGuardAll(foobar)) {
	expectType<'foobar'>(foobar);
} else {
	expectType<never>(foobar);
}

if (isFooBarGuardAll(unknownFoobar)) {
	expectType<'foobar'>(unknownFoobar);
} else {
	expectType<unknown>(unknownFoobar);
}

// Advanced dummy cases
const isFooArray = guardAll(
	negateGuard(matchType('undefined')),
	negateGuard(matchType('string')),
	guardArrayValues(startsWithFoo)
);
if (isFooArray(test)) {
	expectType<readonly `foo${string}`[]>(test);
}

const isFooBarInline = guardAll(
	(val): val is string => {
		expectType<unknown>(val);
		return typeof val === 'string';
	},
	(val): val is `foo${string}` => {
		expectType<string>(val);
		return val.startsWith('foo');
	},
	(val): val is `foobar` => {
		expectType<`foo${string}`>(val);
		return val === 'foobar';
	}
);
// guardAllIn given tuple or spread
const isFooGuards = [
	(val: unknown): val is string => {
		expectType<unknown>(val);
		return typeof val === 'string';
	},
	(val: string): val is `foo` => {
		expectType<string>(val);
		return val === 'foo';
	},
] as const;

// guardAll
const guardAllGivenSpread = guardAll(...isFooGuards);
const guardAllGivenInline = guardAll(isFooGuards[0], isFooGuards[1]);
const guardAllGivenArray = guardAllIn(isFooGuards);

if (guardAllGivenInline(unknownFoobar)) {
	expectType<'foo'>(unknownFoobar);
} else {
	expectType<unknown>(unknownFoobar);
}

if (guardAllGivenSpread(test)) {
	expectType<'foo'>(test);
}

if (guardAllGivenArray(test)) {
	expectType<'foo'>(test);
}

if (isFooBarInline(foobar)) {
	expectType<'foobar'>(foobar);
} else {
	expectType<never>(foobar);
}

if (isFooBarInline(unknownFoobar)) {
	expectType<'foobar'>(unknownFoobar);
} else {
	expectType<unknown>(unknownFoobar);
}

if (hookGuard(isNull)(stringOrNull)) {
	expectType<null>(stringOrNull);
}

const isNotNull = negateGuard(isNull);

if (isNotNull(stringOrNull)) {
	expectType<string>(stringOrNull);
}

// hooking to log
const before = console.log;
const after = console.log;
const hookLog = hookGuard(isNull, before, after);
if (hookLog(stringOrNull)) {
	expectType<null>(stringOrNull);
}

const negateHook = hookGuard(isNotNull);
if (negateHook(stringOrNull)) {
	expectType<string>(stringOrNull);
}
if (hookGuard(isNull)(stringOrNull)) {
	expectType<null>(stringOrNull);
}
if (negateHook(stringOrNull)) {
	expectType<string>(stringOrNull);
}

const logHook = logGuard(
	isNull,
	({ value, guard }) => console.info(`Calling:`, { guard, value }),
	({ result }) => console.info(`Result:`, { result })
);
if (logHook(stringOrNull)) {
	expectType<null>(stringOrNull);
}

if (logGuard(isNotNull)(stringOrNull)) {
	expectType<string>(stringOrNull);
}

const readmeExample = guardAll(
	(value): value is string => typeof value === 'string',
	(value): value is `foo${string}` => value.startsWith('foo')
	//	(value): value is number => typeof value === 'number' // Type 'number' is not assignable to type '`foo${string}`'
);

if (readmeExample(test)) {
	const t = test.startsWith('foo'); //  no error
	expectType<boolean>(t);
	expectType<`foo${string}`>(test);
}

// Argument of type '"foo"' is not assignable to parameter of type 'null'
// if (isNull(foo)) {
// 	expectType<never>(foo);
// }

const isNotFoo = negateGuard(isFoo);
const fooOrBar = 'foo' as 'foo' | 'bar';

if (isNotFoo(fooOrBar)) {
	expectType<'bar'>(fooOrBar);
}

const wrappedNegatedGuard = guardAll(isNotFoo);

if (wrappedNegatedGuard(fooOrBar)) {
	expectType<'bar' | 'foo'>(fooOrBar);
}

const guardAllNoConst = guardAllIn(<const>[
	(hi: unknown): hi is string => typeof hi === 'string',
	(hi: string): hi is 'foo' => hi === 'foo',
]);

const justNull = null;
const unknownNull: unknown = null; // remove unknown and see error below
if (guardAllNoConst(unknownNull)) {
	expectType<'foo'>(unknownNull);
}

if (justNull === 'fwe') {
	expectType<never>(justNull);
}

/** Excluding */
const nullableOnly = excludeGuard(
	fixGuard<
		typeof testArrWithNull[number],
		NonNullable<typeof testArrWithNull[number]>
	>(isNonNullable)
);
const undefinedOnly = excludeGuard(
	fixExclude<typeof testArrWithNull[number], undefined>(
		negateGuard(isUndefined)
	)
);

const testArrWithNull = ['fe', undefined, 'few', 'few', null] as const;

const noUndefined = excludeUndefined(testArrWithNull);
expectType<readonly ['fe', 'few', 'few', null]>(noUndefined);

const noNullAndUndefinedR = excludeNonNullable(testArrWithNull);
expectType<readonly ['fe', 'few', 'few']>(noNullAndUndefinedR);

const nullOnlyR = nullableOnly(testArrWithNull);
expectType<readonly [undefined, null]>(nullOnlyR);

const undefinedOnlyR = undefinedOnly(testArrWithNull);
expectType<readonly [undefined]>(undefinedOnlyR);

const someGuards = [isFoo, undefined, isTypeString] as const;

const noUndefinedGuards = excludeUndefined(someGuards);
expectType<readonly [typeof isFoo, typeof isTypeString]>(noUndefinedGuards);

/**
 *
 */

const isTranslation = guardRecord(
	(val): val is { readonly translation: string } =>
		typeof val.translation === 'string'
);
const testTranslation = {
	translation: 'string',
	someOtherVar: 'var',
} as const;
if (isTranslation(testTranslation)) {
	expectType<{
		readonly translation: 'string';
		readonly someOtherVar: 'var';
	}>(testTranslation);
}

if (isTranslation(test)) {
	expectType<{
		readonly translation: string;
	}>(test);
}
