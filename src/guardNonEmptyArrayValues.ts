import { negateIterableGuard } from './negateGuard';
import type { IterableTypeGuard } from './types';

/**
 * Given a Type Guard, returns a Type Guard that checks if the given value is an array and if the value of the array matches the given Type Guard.
 *
 * @example
 * ```ts
 * import { guardArrayValues } from 'type-guard-helpers';
 *
 * const isStringArray = guardArrayValues(
 * 	(value: unknown): value is string =>
 * 		typeof value !== 'string'
 * );
 *
 * const test = {} as unknown;
 * if (isStringArray(test)) {
 * 	  test; // test: readonly string[]
 * }
 * ```
 * @category Type Guard Composer
 */
const guardNonEmptyArrayValues =
  <Param, A>(guard: IterableTypeGuard<Param, A>) =>
  <Value extends Param, Result extends readonly [A, ...A[]]>(
    value: Result extends Value ? Value : Result
  ): value is Result extends Value ? Result : never =>
    Array.isArray(value) &&
    value.length !== 0 &&
    value.findIndex(negateIterableGuard(guard)) === -1;

export { guardNonEmptyArrayValues };
