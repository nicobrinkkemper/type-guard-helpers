import test from 'ava';

import { isTypeString, matchArray, matchSchema } from '../src';

const isRecord = matchSchema({
	foo: isTypeString,
	foobar: matchArray(['foo', 'bar']),
});

test('Should return true for a matching object', (t) => {
	t.is(
		isRecord({
			foo: 'a',
			foobar: ['foo', 'bar'],
		}),
		true
	);
});

test('Should return false for empty object', (t) => {
	t.is(isRecord({}), false);
});

test('Should return false for anything else', (t) => {
	t.is(
		isRecord({
			foo: '',
			foobar: ['bar', 'foo'] as unknown,
		}),
		false
	);
});
