import test from 'ava';

import { matchObjectKey } from '../lib/matchObjectKey';

const hasStatus = matchObjectKey('status');
const functionObject = Object.assign((val = true) => val, {
	status: 200,
});

test('Should return true because key is present', (t) => {
	t.is(hasStatus({ status: 200 }), true);
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	t.is(hasStatus(functionObject as any), true);
});

test('Should return false because key is not present', (t) => {
	t.is(hasStatus({ StATuS: 200 }), false);
	t.is(hasStatus({}), false);
});
