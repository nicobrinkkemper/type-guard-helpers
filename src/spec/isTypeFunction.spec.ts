import test from 'ava';

import { isTypeFunction } from '../lib/isTypeFunction';

test('Should return true for a function', (t) => {
	t.is(
		// eslint-disable-next-line functional/functional-parameters
		isTypeFunction(() => true),
		true
	);
	t.is(
		// eslint-disable-next-line functional/functional-parameters
		isTypeFunction(function namedFunction() {
			return false;
		}),
		true
	);
	// eslint-disable-next-line functional/functional-parameters
	const constArrowFunc = () => false;
	t.is(isTypeFunction(constArrowFunc), true);
});

test('Should return false for anything else', (t) => {
	t.is(isTypeFunction(1 as unknown), false);
	t.is(isTypeFunction(true as unknown), false);
	t.is(isTypeFunction('1' as unknown), false);
	t.is(isTypeFunction(Symbol() as unknown), false);

	t.is(isTypeFunction({} as unknown), false);
	t.is(isTypeFunction([] as unknown), false);
	// eslint-disable-next-line functional/no-class
	t.is(isTypeFunction(new (class {})()), false);
});
