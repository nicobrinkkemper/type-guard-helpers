import test from 'ava';

import { isTypeString } from '../src';
import { matchPartialSchema } from '../src/matchPartialSchema';

test('Should return true when specified values are not present', (t) => {
	t.is(
		matchPartialSchema({
			foo: (value: unknown): value is 'foo' => value === 'foo',
		})({
			bar: 'not checked',
		} as unknown),
		true
	);
});

test('Should return false when specified values are not correct', (t) => {
	t.is(
		matchPartialSchema({
			foo: (value: unknown): value is 'foo' => value === 'foo',
		})({
			foo: 'bad',
		} as unknown),
		false
	);
});

test('Should return true with additional unspecified values', (t) => {
	t.is(
		matchPartialSchema({
			foo: (value: unknown): value is 'foo' => value === 'foo',
		})({
			foo: 'foo',
			bar: 'not checked, but ok',
		}),
		true
	);
});

test('Should work with Array.isArray', (t) => {
	t.is(matchPartialSchema({ foo: Array.isArray })({ foo: [], bar: {} }), true);
});

test('Should return true for empty object', (t) => {
	t.is(matchPartialSchema({ key: isTypeString })({}), true);
});
