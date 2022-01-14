import test from 'ava';

import {
	guardEither,
	guardNonEmptyArray,
	guardNonEmptyArrayValues,
	guardOption,
	isFalse,
	isNull,
	isTypeNumber,
	isTypeString,
	isUndefined,
	negateGuard,
} from '../src';

const isNonEmptyList = guardNonEmptyArray(
	negateGuard(
		<Value>(
			val: unknown
		): val is Exclude<'' | false | null | undefined, Value> => !!val
	)
);
const isList = guardNonEmptyArrayValues(
	guardOption(isTypeString, isTypeNumber)
);
const isFalsyList = guardNonEmptyArrayValues(
	guardEither(isUndefined, isNull, isFalse)
);
test('Should return false for lists with undefined values', (t) => {
	t.is(isNonEmptyList(['']), false);
	t.is(isNonEmptyList([0]), false);
	t.is(isNonEmptyList([null]), false);
	t.is(isNonEmptyList([false]), false);
	t.is(isNonEmptyList([undefined]), false);
});
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
