import test from 'ava';

import { isObject } from './isObject';

test('Should return true for a object, array or class', (t) => {
  t.is(isObject({}), true);
  t.is(isObject([]), true);
  t.is(
    isObject(
      // eslint-disable-next-line functional/no-class
      new (class {})()
    ),
    true
  );
});

test('Should return false for anything else', (t) => {
  t.is(isObject(1), false);
  t.is(isObject(true), false);
  t.is(isObject('1'), false);
  t.is(isObject(Symbol()), false);
  t.is(
    isObject(() => true),
    false
  );
  t.is(
    isObject(function namedFunction() {
      return false;
    }),
    false
  );
  const constArrowFunc = () => false;
  t.is(isObject(constArrowFunc), false);
});
