import test from 'ava';

import { isTypeUndefined } from '../src/isTypeUndefined';
import { matchSchema } from '../src/matchSchema';

test('Should return false when specified values are not present', (t) => {
	t.is(
		matchSchema({
			foo: (value: unknown): value is 'foo' => value === 'foo',
		})({
			bar: 'not checked',
		} as unknown),
		false
	);
});

test('Should return false when specified values are not correct', (t) => {
	t.is(
		matchSchema({
			foo: (value: unknown): value is 'foo' => value === 'foo',
		})({
			foo: 'bad',
		}),
		false
	);
});

test('Should return true with additional unspecified values', (t) => {
	t.is(
		matchSchema({
			foo: (value: unknown): value is 'foo' => value === 'foo',
		})({
			foo: 'foo',
			bar: 'not checked, but ok',
		} as unknown),
		true
	);
});

test('Should work with Array.isArray', (t) => {
	t.is(matchSchema({ foo: Array.isArray })({ foo: [], bar: {} }), true);
});

test('Should not fail if a guard allows undefined and the key is not set', (t) => {
	t.is(
		matchSchema({
			foo: isTypeUndefined,
		})({}),
		true
	);
	t.is(
		matchSchema({
			foo: isTypeUndefined,
		})({
			foo: undefined,
		}),
		true
	);
	t.is(
		matchSchema({
			foo: isTypeUndefined,
		})({
			bar: 'bar',
		}),
		true
	);
});
test('Should fail if a guard allows undefined and the key IS set', (t) => {
	t.is(
		matchSchema({
			foo: isTypeUndefined,
		})({
			foo: 'bar',
		}),
		false
	);
});
