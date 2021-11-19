import test from 'ava';

import { matchTypes } from '../lib/matchTypes';

test('Should return true for corresponding types', (t) => {
	t.is(matchTypes('undefined')(undefined), true);
	t.is(matchTypes('bigint', 'number')(1), true);
	t.is(matchTypes('string', 'object')(null), true);
	t.is(matchTypes('string', 'object')(null), true);
});

test('Should return false for non corresponding types', (t) => {
	t.is(matchTypes('string', 'object')(undefined as unknown), false);
	t.is(matchTypes('object', 'undefined')('undefined'), false);
});
