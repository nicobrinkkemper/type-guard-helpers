import { expectType } from 'tsd';
// these -d.ts files are a playground to test the type-check patterns
// try messing any of the types up to see what errors you'll get

import {
  excludeGuard,
  guardEither,
  guardEitherIn,
  isNonNullable,
  isNull,
  isTypeString,
  matchExactSchema,
  matchIn,
  matchSchema,
  matchString
} from '../src';

import { filterGuard, filterNonNullable } from './filterGuard';

const foo = matchString('foo');
const bar = matchString('bar');

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
  bar
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

const teasers = [
  { type: 'a' } as const,
  { type: 'a' } as const,
  { type: 'b' } as const,
  { type: 'c' } as const
];

const types = ['a', 'b', 'C'] as const;
const isTeaser = guardEither(
  matchSchema({ type: matchString('a') }),
  matchSchema({ type: matchString('b') }),
  matchSchema({ type: matchString('c') })
);
const isAnyTeaser = matchSchema({ type: matchIn(types) });
const isTeasers = filterGuard(isAnyTeaser)(teasers);
expectType<
  readonly {
    readonly type: 'a' | 'b' | 'C';
  }[]
>(isTeasers);

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
  (
    | { readonly type: 'a' }
    | { readonly type: 'b' }
    | { readonly type: 'c' }
    | {
        type: string;
      }
  )[]
>(isTeasersNative);

const isNotTeaser = excludeGuard(isTeaser)(teasers);
expectType<
  readonly {
    type: string;
  }[]
>(isNotTeaser);

const isNotTeaser2 = excludeGuard(isAnyTeaser)(teasers);
expectType<
  readonly {
    type: string;
  }[]
>(isNotTeaser2);

// Filter const
const teasersConst = [
  { type: 'a' },
  { type: 'a' },
  { type: 'b' },
  { type: 'c' },
  { type: 'D' }
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

// readme

const testValues = ['a', undefined, 'b' as 'b' | undefined, 'c', null] as const;

const isNullableTestValues = isNonNullable;
// convoluted example, but it works. Better to write
const filterDefined1 = filterGuard(
  isNullableTestValues as typeof isNullableTestValues<
    (typeof testValues)[number]
  >
);
const filterDefined1Result = filterDefined1(testValues);
expectType<readonly ['a', 'c'] | readonly ['a', 'b', 'c']>(
  filterDefined1Result
);

// or simply
const filterDefined2 = filterGuard(isTypeString);
const filterDefined2Result = filterDefined2(testValues);
expectType<readonly ['a', 'c'] | readonly ['a', 'b', 'c']>(
  filterDefined2Result
);

const filterNonNullableResult = filterNonNullable(testValues);
expectType<readonly ['a', 'c'] | readonly ['a', 'b', 'c']>(
  filterNonNullableResult
);
