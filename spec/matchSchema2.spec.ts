import test from 'ava';

import { isTypeString, matchArray, matchSchema } from '../src';

const schema = {
  foo: isTypeString,
  foobar: matchArray(['foo', 'bar'])
} as const;
const isFooRecord = matchSchema(schema);

test('Should return true for a matching object foo/bar', (t) => {
  t.is(schema.foo('a'), true);
  t.is(schema.foobar(['foo', 'bar']), true);
  t.is(
    isFooRecord({
      foo: 'a',
      foobar: ['foo', 'bar']
    }),
    true
  );
});

test('Should return false for empty object', (t) => {
  t.is(isFooRecord({} as never), false);
});

test('Should return false for anything else', (t) => {
  t.is(
    isFooRecord({
      foo: '',
      foobar: ['bar', 'foo'] as never
    }),
    false
  );
});
