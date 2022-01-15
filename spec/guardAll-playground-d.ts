import { expectType } from 'tsd';
// these -d.ts files are a playground to test the type-check patterns
// try messing any of the types up to see what errors you'll get

import { guardAll, guardAllIn, isRecord, match, matchSchema } from '../src';

const test = {} as unknown;
const testWrong = { foo: 'bar', bar: 'foo' };

if (isRecord(test)) {
	expectType<{
		readonly [x: string]: unknown;
	}>(test);
}
// Readme example
const foo = match('foo');
const bar = match('bar');
const matchFooSchema = matchSchema({ foo });
const matchBarSchema = matchSchema({ bar });
const isFooBar = guardAll(matchFooSchema, matchBarSchema);
if (isFooBar(test)) {
	expectType<{
		readonly foo: 'foo';
		readonly bar: 'bar';
	}>(test);
}

const isFooBarArray = guardAllIn([isRecord, matchFooSchema, matchBarSchema]);
const isFooBarInferred = guardAll(isRecord, matchFooSchema, matchBarSchema);
const isFooBarInline = guardAll(
	(obj): obj is { readonly [k in string]: unknown } =>
		obj != null && typeof obj === 'object',
	(obj): obj is typeof obj & { readonly foo: 'foo' } => obj.foo === 'foo',
	(obj): obj is typeof obj & { readonly bar: 'bar' } => obj.bar === 'bar'
);

if (isFooBarArray(test)) {
	expectType<
		{
			readonly [x: string]: unknown;
		} & {
			readonly foo: 'foo';
		} & {
			readonly bar: 'bar';
		}
	>(test);
}
if (isFooBarInferred(test)) {
	expectType<{
		readonly [x: string]: unknown;
		readonly foo: 'foo';
		readonly bar: 'bar';
	}>(test);
}
if (isFooBarInline(test)) {
	expectType<
		{
			readonly [x: string]: unknown;
		} & {
			readonly foo: 'foo';
		} & {
			readonly bar: 'bar';
		}
	>(test);
}

if (isFooBarArray(testWrong)) {
	expectType<
		{
			readonly [x: string]: unknown;
		} & {
			readonly foo: 'foo';
		} & {
			readonly bar: 'bar';
		}
	>(testWrong);
}
if (isFooBarInferred(testWrong)) {
	expectType<{
		readonly [x: string]: unknown;
		readonly foo: 'foo';
		readonly bar: 'bar';
	}>(testWrong);
}

if (isFooBarInline(testWrong)) {
	expectType<
		{
			readonly [x: string]: unknown;
		} & {
			readonly foo: 'foo';
		} & {
			readonly bar: 'bar';
		}
	>(testWrong);
}
