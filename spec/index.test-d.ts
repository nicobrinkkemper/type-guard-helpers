import { expectType } from 'tsd';

import type { Combine } from '../src';
import { guardPipe } from '../src';
import {
  excludeGuard,
  excludeNullable,
  excludeUndefined,
  guardAll,
  guardArrayValues,
  guardOption,
  guardRecord,
  hookGuard,
  isNonNullable,
  isNull,
  isTypeString,
  logGuard,
  match,
  matches,
  matchSchema,
  matchType,
  negateGuard
} from '../src';

import { guardAllIn } from './guardAllIn';

const foo = 'foo' as const;
const bar = 'bar' as const;
const foobar = 'foobar' as const;
const barOrString = bar as string | undefined;
const unknownFoobar = 'foobar' as unknown;
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
  status: isStatus
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
  bar: isBar
});
if (isFooObject(test)) {
  expectType<{ readonly foo: 'foo'; readonly bar: 'bar' }>(test);
}
const wrongFooObjectTest = { bar: 'foo', foo: 'bar' } as const;
const jimObject = { jim: 'jim' } as const;
if (isFooObject(wrongFooObjectTest as unknown)) {
  expectType<{
    readonly bar: 'foo';
    readonly foo: 'bar';
  }>(wrongFooObjectTest);
}
if (isFooObject(jimObject)) {
  expectType<{
    readonly foo: 'foo';
    readonly bar: 'bar';
    readonly jim: 'jim';
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

// guardAll
const startsWithFoo = guardPipe(isTypeString, (val): val is `foo${string}` =>
  val.startsWith('foo')
);

if (startsWithFoo(test)) {
  expectType<`foo${string}`>(test);
}

const isFooBarGuardPipe = guardPipe(
  matchType('string'),
  (val): val is `foo${string}` => val.startsWith('foo'),
  (val): val is `foobar` => val === foobar
);

if (isFooBarGuardPipe(test)) {
  expectType<'foobar'>(test);
}
if (isFooBarGuardPipe(foobar)) {
  expectType<'foobar'>(foobar);
} else {
  expectType<never>(foobar);
}

if (isFooBarGuardPipe(unknownFoobar)) {
  expectType<'foobar'>(unknownFoobar);
} else {
  expectType<unknown>(unknownFoobar);
}

const isFooBarInline = guardPipe(
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
// guardAll given tuple or spread
const isFooGuards = [
  (val: unknown): val is string => {
    return typeof val === 'string';
  },
  (val: string): val is `foo` => {
    return val === 'foo';
  }
] as const;

// guardAll
const guardAllGivenSpread = guardPipe(...isFooGuards);
const guardAllGivenInline = guardPipe(isFooGuards[0], isFooGuards[1]);
const guardAllGivenArray = guardAllIn([
  (val: unknown): val is string => {
    return typeof val === 'string';
  },
  (val: string): val is `foo` => {
    return val === 'foo';
  }
] as const);

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

const readmeExample = guardPipe(
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

if (isNotFoo(fooOrBar)) {
  expectType<'bar'>(fooOrBar);
}

const wrappedNegatedGuard = guardPipe(
  (val) => isNotFoo(val),
  (val) => isNotBar(val)
);

if (wrappedNegatedGuard(fooOrBarOrFoobar)) {
  expectType<'foobar'>(fooOrBarOrFoobar);
}

const guardAllot = guardPipe(
  (item): item is object => typeof item === 'object' && item !== null,
  (item): item is { type: string } => 'type' in item,
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

const guardAllNoConst = guardAll([
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
const nullableOnly = excludeGuard(
  isNonNullable as typeof isNonNullable<(typeof testArrWithNull)[number]>
);

const testArrWithNull = ['fe', undefined, 'few', 'few', null] as const;

const noUndefined = excludeUndefined(testArrWithNull);
expectType<readonly ['fe', 'few', 'few', null]>(noUndefined);

const noNullAndUndefinedR = excludeNullable(testArrWithNull);
expectType<readonly ['fe', 'few', 'few']>(noNullAndUndefinedR);

const nullOnlyR = nullableOnly(testArrWithNull);
expectType<readonly [undefined, null]>(nullOnlyR);

const isTranslation = guardRecord(
  (val): val is { readonly translation: string } =>
    typeof val.translation === 'string'
);
const testTranslation = {
  translation: 'string',
  someOtherVar: 'var'
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
