import test from 'ava';

import { isFunction } from '../lib/isFunction';

test('Should return true for a function', (t) => {
  t.is(
    isFunction(() => true),
    true
  );
  t.is(
    isFunction(function namedFunction() {
      return false;
    }),
    true
  );
  const constArrowFunc = () => false;
  t.is(isFunction(constArrowFunc), true);
});

test('Should return false for anything else', (t) => {
  t.is(isFunction(1), false);
  t.is(isFunction(true), false);
  t.is(isFunction('1'), false);
  t.is(isFunction(Symbol()), false);

  t.is(isFunction({}), false);
  t.is(isFunction([]), false);
  t.is(
    isFunction(
      // eslint-disable-next-line functional/no-class
      new (class {})()
    ),
    false
  );
});
