import { negateGuard } from './negateGuard';
import type { AnyTypeGuard, GuardType } from './types';

/**
 * Given a Type Guard, returns a Type Guard that takes an array and checks if all its values match the given Type Guard.
 *
 * @example
 * ```ts
 * import { isString, guardArray } from 'type-guard-helpers';
 * const isStringArray = guardArray(isString)
 * if(isStringArray(test)){
 *    test; // test: readonly string[]
 * }
 * ```
 * @category Type Guard Composer
 */
const guardArray =
	<Guard extends AnyTypeGuard>(guard: Guard) =>
	(value: readonly unknown[]): value is readonly GuardType<Guard>[] =>
		value.findIndex(negateGuard(guard)) === -1;

export { guardArray };
