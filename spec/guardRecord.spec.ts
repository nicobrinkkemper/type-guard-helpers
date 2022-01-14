import test from 'ava';

import { guardRecord } from '../src/guardRecord';

const isTranslation = guardRecord(
	(val): val is { readonly translation: string } =>
		typeof val.translation === 'string'
);

test('Should return true for objects with translations', (t) => {
	const strObj = Object.assign('s', {
		translation: 'hi',
		nameSpace: 'str',
	});
	t.is(isTranslation({ translation: '' as unknown }), true);
	t.is(isTranslation({ translation: 'true', someOtherThing: 'yes' }), true);
	t.is(isTranslation(strObj), true);
});

test('Should return true for translations', (t) => {
	const fnObj = Object.assign((a: string) => a, {
		translation: 'hi',
		nameSpace: 'fn',
	});
	t.is(isTranslation({ translation: true as unknown }), false);
	t.is(isTranslation(false as unknown), false);
	t.is(isTranslation(null as unknown), false);
	t.is(isTranslation(fnObj), false);
});
