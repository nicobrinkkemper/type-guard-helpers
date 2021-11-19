import test from 'ava';

import { matchType } from '../lib/matchType';

test('Should return true for corresponding types', (t) => {
	t.is(matchType('undefined')(undefined), true);
});

test('Should return false for non corresponding types', (t) => {
	t.is(matchType('string')(undefined as unknown), false);
	t.is(matchType('object')('undefined'), false);
});
