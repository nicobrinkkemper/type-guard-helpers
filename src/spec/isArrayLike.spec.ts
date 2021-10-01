import test from 'ava';

import { isArrayLike } from '../lib/isArrayLike';

test("Should return true because it's a list of tuple", (t) => {
  const isTuple = isArrayLike(Array.isArray);
  t.is(isTuple([[]]), true);
});
