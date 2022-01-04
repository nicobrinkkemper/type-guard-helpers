import test from 'ava';

import { guardRecord } from '../lib/guardRecord';

const isTranslation = guardRecord(
	(val): val is { readonly translation: string } =>
		typeof val.translation === 'string'
);

test('Should return true for objects with translations', (t) => {
	const fnObj = Object.assign((a: string) => a, {
		translation: 'hi',
		nameSpace: 'yo',
	});
	t.is(isTranslation({ translation: true as unknown }), true);
	t.is(isTranslation({ translation: 'true', someOtherThing: 'yes' }), true);
	t.is(isTranslation(fnObj), true);
});

test('Should return true for translations', (t) => {
	t.is(isTranslation(false as unknown), false);
	t.is(isTranslation(null as unknown), false);
});
