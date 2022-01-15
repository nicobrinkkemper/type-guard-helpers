import test from 'ava';

import {
	guardEither,
	guardNonEmptyArrayValues,
	guardOption,
	isFalse,
	isNull,
	isTypeNumber,
	isTypeString,
	isUndefined,
} from '../src';

const isList = guardNonEmptyArrayValues(
	guardOption(isTypeString, isTypeNumber)
);
const isFalsyList = guardNonEmptyArrayValues(
	guardEither(isUndefined, isNull, isFalse)
);
test('Should return true for non empty lists', (t) => {
	t.is(isList(['']), true);
	t.is(isList([1, 'true']), true);
	t.is(isFalsyList([null]), true);
	t.is(isFalsyList([false]), true);
	t.is(isFalsyList([undefined]), true);
});
test('Should return false for anything else', (t) => {
	t.is(isList('1' as unknown), false);
	t.is(isList([]), false);
	t.is(isList({}), false);
	t.is(isList(Symbol() as unknown), false);
});
