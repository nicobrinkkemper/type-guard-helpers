import { negateGuard } from './negateGuard';
import type { EntryTypeGuard, GuardType } from './types';

/**
 * Given a Type Guard for entries, returns a Type Guard that takes an object and checks if all its entries match the given Type Guard.
 *
 * @example
 * ```ts
 * import { isKeys, isNumber, guardEntries } from "type-guard-helpers"
 *
 * const test = {} as unknown;
 * const isCart = guardEntries(
 * 	  isEntryLike([isKeys('total', 'tax'), isNumber])
 * );
 *
 * if (isCart(test)) {
 * 	  test; //  { readonly total: number; readonly tax: number; }
 * }
 * ```
 * @category | Type Guard Enhancer
 */
const guardEntries =
	<Guard extends EntryTypeGuard>(guard: Guard) =>
	(value: {
		readonly [k: PropertyKey]: unknown;
	}): value is { readonly [k in GuardType<Guard>[0]]: GuardType<Guard>[1] } =>
		Object.entries(value).findIndex(negateGuard(guard)) === -1;

export { guardEntries };
