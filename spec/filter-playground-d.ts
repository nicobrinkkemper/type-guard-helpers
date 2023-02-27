import { expectType } from 'tsd';
// these -d.ts files are a playground to test the type-check patterns
// try messing any of the types up to see what errors you'll get

import {
  excludeGuard,
  guardEither,
  isNonNullable,
  isTypeString,
  matchIn,
  matchSchema,
  matchString
} from '../src';

import { filterGuard, filterNonNullable } from './filterGuard';

// compose with matchSchema

const teasers = [
  { type: 'a' } as const,
  { type: 'a' } as const,
  { type: 'b' } as const,
  { type: 'c' } as const
];
const types = ['a', 'b', 'c'] as const;
const isTeaser = guardEither(
  matchSchema({ type: matchString('a') }),
  matchSchema({ type: matchString('b') }),
  matchSchema({ type: matchString('c') })
);
const isAnyTeaser = matchSchema({ type: matchIn(types) });
const isTeasers = filterGuard(isAnyTeaser)(teasers);
expectType<
  readonly {
    readonly type: 'a' | 'b' | 'c';
  }[]
>(isTeasers);

const isTeasers3 = filterGuard(isTeaser)(teasers);
type expectIsTeasers3 = readonly (
  | {
      readonly type: 'a';
    }
  | {
      readonly type: 'b';
    }
  | {
      readonly type: 'c';
    }
)[];
expectType<expectIsTeasers3>(isTeasers3);

const isTeasersNative = teasers.filter(isTeaser);
type expectIsTeasersNative = (
  | { readonly type: 'a' }
  | { readonly type: 'b' }
  | { readonly type: 'c' }
)[];
expectType<expectIsTeasersNative>(isTeasersNative);

const isNotTeaser = excludeGuard(isTeaser)(teasers);
expectType<readonly never[]>(isNotTeaser);

const excludeAnyTeaser = excludeGuard(isAnyTeaser);
const isNotTeaser2 = excludeAnyTeaser(teasers);
expectType<readonly never[]>(isNotTeaser2);

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
const teasersConstExclude = [
  { type: 'a' },
  { type: 'a' },
  { type: 'b' },
  { type: 'im in exclude result and so is D' },
  { type: 'c' },
  { type: 'D' }
] as const;
const isTeasersExclude = excludeGuard(isTeaser)(teasersConstExclude);
expectType<
  readonly [
    {
      readonly type: 'im in exclude result and so is D';
    },
    {
      readonly type: 'D';
    }
  ]
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
