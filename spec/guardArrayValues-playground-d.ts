import { expectType } from 'tsd';
// these -d.ts files are a playground to test the type-check patterns
// try messing any of the types up to see what errors you'll get

import {
  guardArrayValues,
  guardEither,
  matchIn,
  matchSchema,
  matchString
} from '../src';

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
const isTeasers = guardArrayValues(isTeaser);
if (isTeasers(teasers)) {
  expectType<
    readonly (
      | { readonly type: 'a' }
      | { readonly type: 'b' }
      | { readonly type: 'c' }
    )[]
  >(teasers);
}
