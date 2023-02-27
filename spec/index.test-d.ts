import { expectType } from 'tsd';

import type { Combine } from '../src';
import {
  excludeNullable,
  excludeUndefined,
  guardAllIn,
  guardArrayValues,
  guardEither,
  guardPipe,
  guardRecord,
  isTypeString,
  match,
  matches,
  matchSchema,
  negateGuard
} from '../src';

const foo = 'foo' as const;
const bar = 'bar' as const;
const barOrString = bar as string | undefined;
const stringOrNull = 'few' as string | null;
const fooOrBar = 'foo' as 'foo' | 'bar';
const fooOrBarOrFoobar = 'foo' as 'foo' | 'bar' | 'foobar';
const test = {} as unknown;

// readme examples
const isFoo = match(foo);
const isBar = match(bar);
const isNotFoo = negateGuard(isFoo);
const isNotBar = negateGuard(isBar);

if (isBar(test)) {
  expectType<'bar'>(test);
}

const isFooBarItem = guardEither(isFoo, isBar);
const isStatus = matches(200, 404);
const isFooBarArray = guardArrayValues(isFooBarItem);
guardArrayValues((val: unknown): val is string => typeof val === 'string');
const isResponse = matchSchema({
  items: isFooBarArray,
  status: isStatus
});
const fakeResponse = {
  items: ['foo', 'bar', 'foo', 'bar'] as readonly string[],
  status: 200
};
if (isResponse(fakeResponse)) {
  type expectFakeResponse = {
    readonly items: readonly ('foo' | 'bar')[];
    readonly status: 200 | 404;
  };
  expectType<expectFakeResponse>(fakeResponse);
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
  bar: isBar
});
const fooBarTest = {
  foo: 'foo',
  bar: 'bar'
};
if (isFooObject(fooBarTest)) {
  expectType<{ readonly foo: 'foo'; readonly bar: 'bar' }>(fooBarTest);
}
const wrongFooObjectTest = { bar: 'foo', foo: 'bar' } as const;
const jimObject = { jim: 'jim' };
if (isFooObject(wrongFooObjectTest as never)) {
  expectType<{
    readonly bar: 'foo';
    readonly foo: 'bar';
  }>(wrongFooObjectTest);
}
if (isFooObject(jimObject)) {
  expectType<{
    readonly foo: 'foo';
    readonly bar: 'bar';
    readonly jim: string;
  }>(jimObject);
}

// negateGuard
const isNotString = negateGuard(isTypeString);
if (isNotString(stringOrNull)) {
  expectType<null>(stringOrNull);
}
if (!isNotString(stringOrNull)) {
  expectType<string>(stringOrNull);
}

// Argument of type '"foo"' is not assignable to parameter of type 'null'
// if (isNull(foo)) {
// 	expectType<never>(foo);
// }

if (isNotFoo(fooOrBar)) {
  expectType<'bar'>(fooOrBar);
}

const wrappedNegatedGuard = guardPipe(
  isNotFoo as typeof isNotFoo<typeof fooOrBarOrFoobar>,
  isNotBar as typeof isNotBar<'foobar' | 'bar'>
);

if (wrappedNegatedGuard(fooOrBarOrFoobar)) {
  expectType<'foobar'>(fooOrBarOrFoobar);
}

const guardAllot = guardPipe(
  (item): item is object => typeof item === 'object' && item !== null,
  <Value extends object>(item: Value): item is Value & { type: string } =>
    'type' in item,
  (item): item is Combine<typeof item, { value: string }> => 'value' in item,
  (item): item is Combine<typeof item, { type: 'EnterpriseType' }> =>
    item.type === 'EnterpriseType',
  (item): item is Combine<typeof item, { value: 'Share' }> =>
    item.value === 'Share'
);
if (guardAllot(test)) {
  expectType<'EnterpriseType'>(test.type);
  expectType<'Share'>(test.value);
}

const guardAllNoConst = guardAllIn([
  (val1: unknown): val1 is string => typeof val1 === 'string',
  (val2: string): val2 is 'foo' => val2 === 'foo'
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

const testArrWithNull = ['fe', undefined, 'few', 'few', null] as const;

const noUndefined = excludeUndefined(testArrWithNull);
expectType<readonly ['fe', 'few', 'few', null]>(noUndefined);

const noNullAndUndefinedR = excludeNullable(testArrWithNull);
expectType<readonly ['fe', 'few', 'few']>(noNullAndUndefinedR);

const isTranslation = guardRecord(
  (val: unknown): val is { translation: 'a' } => !!val
);
const testTranslation = {
  translation: 'string',
  someOtherVar: 'var'
};

if (isTranslation(testTranslation)) {
  expectType<{
    readonly translation: 'a';
    readonly someOtherVar: string;
  }>(testTranslation);
}
