import { expectType } from 'tsd';
// these -d.ts files are a playground to test the type-check patterns
// try messing any of the types up to see what errors you'll get

import {
  guardArrayValues,
  guardEither,
  matchSchema,
  matchString
} from '../src';

const teasers = [{ type: 'a' }, { type: 'b' }, { type: 'c' }, { type: 'd' }];
const isTeaser = guardEither(
  matchSchema({ type: matchString('a') }),
  matchSchema({ type: matchString('b') }),
  matchSchema({ type: matchString('c') })
);
const isTeasers = guardArrayValues(isTeaser);
if (isTeasers(teasers)) {
  const first = teasers[0];
  type expectFirst = {
    type: string;
  } & (
    | {
        readonly type: 'a';
      }
    | {
        readonly type: 'b';
      }
    | {
        readonly type: 'c';
      }
  );
  expectType<expectFirst>(first);
}
