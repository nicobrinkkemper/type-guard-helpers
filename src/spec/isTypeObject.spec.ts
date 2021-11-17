import test from 'ava';

import { isTypeObject } from '../lib/isTypeObject';

test('Should return true for null, object, array or class', (t) => {
	t.is(isTypeObject({}), true);
	t.is(isTypeObject(null), true);
	t.is(isTypeObject([]), true);
	t.is(
		isTypeObject(
			// eslint-disable-next-line functional/no-class
			new (class {})()
		),
		true
	);
});

test('Should return false for anything else', (t) => {
	t.is(isTypeObject(1), false);
	t.is(isTypeObject(true), false);
	t.is(isTypeObject('1'), false);
	t.is(isTypeObject(Symbol()), false);
	t.is(
		// eslint-disable-next-line functional/functional-parameters
		isTypeObject(() => true),
		false
	);
	t.is(
		// eslint-disable-next-line functional/functional-parameters
		isTypeObject(function namedFunction() {
			return false;
		}),
		false
	);
	// eslint-disable-next-line functional/functional-parameters
	const constArrowFunc = () => false;
	t.is(isTypeObject(constArrowFunc), false);
});
