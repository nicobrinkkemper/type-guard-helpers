import test from 'ava';

import { matchTypeIn } from '../src/matchTypeIn';

test('Should return true for corresponding types', (t) => {
	t.is(matchTypeIn(['undefined'])(undefined), true);
	t.is(matchTypeIn(['string', 'object'])(null), true);
	t.is(matchTypeIn(['string', 'object'])(null), true);
});

test('Should return false for non corresponding types', (t) => {
	t.is(matchTypeIn(['string', 'object'])(undefined as unknown), false);
	t.is(matchTypeIn(['object', 'undefined'])('undefined'), false);
});
