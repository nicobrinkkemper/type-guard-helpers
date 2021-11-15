import { isArray } from './isArray';
import { negateGuard } from './negateGuard';
import type { GuardType, IterableTypeGuard } from './types';

/**
 * Given a Type Guard, returns a Type Guard that takes an array and checks if all its values match the given Type Guard.
 *
 * @example
 * ```ts
 * import { isTypeString, guardArray } from 'type-guard-helpers';
 * const isStringArray = guardArray(isTypeString)
 * if(isStringArray(test)){
 *    test; // test: readonly string[]
 * }
 * ```
 * @category Type Guard Composer
 */
const guardArray = <Guard extends IterableTypeGuard>(guard: Guard) => {
	const finder = negateGuard(guard);
	return (value: unknown): value is readonly GuardType<Guard>[] =>
		isArray(value) && value.findIndex(finder) === -1;
};

export { guardArray };
