import { guardEntries } from './guardEntries';
import { isRecord } from './isRecord';
import type { EntryTypeGuard, GuardType } from './types';

/**
 * Given a Type Guard for entries, returns a Type Guard that checks if the given value is a Record and all its entries match the given Type Guard.
 *
 * @example
 * ```ts
 * import { matchKeys, isNumber, guardEntries } from "type-guard-helpers"
 *
 * const test = {} as unknown;
 * const isCart = guardEntries(
 * 	  isEntryLike([matchKeys('total', 'tax'), isNumber])
 * );
 *
 * if (isCart(test)) {
 * 	  test; //  { readonly total: number; readonly tax: number; }
 * }
 * ```
 * @category Type Guard Composer
 */
const guardRecord = <Guard extends EntryTypeGuard>(guard: Guard) => {
	const entryGuard = guardEntries(guard);
	return (
		value: unknown
	): value is { readonly [k in GuardType<Guard>[0]]: GuardType<Guard>[1] } =>
		isRecord(value) && entryGuard(value);
};

export { guardRecord };
