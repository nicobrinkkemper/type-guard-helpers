import { negateIterableGuard } from './negateGuard';
import type {
  AnyIterableTypeGuard,
  GuardType,
  GuardTypeInput,
  TypeGuardFn
} from './types';

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
const guardNonEmptyArrayValues = <Guard extends AnyIterableTypeGuard>(
  guard: Guard
) =>
  ((value) =>
    Array.isArray(value) &&
    value.length !== 0 &&
    value.findIndex(negateIterableGuard(guard)) === -1) as TypeGuardFn<
    readonly GuardTypeInput<Guard>[],
    readonly [GuardType<Guard>, ...GuardType<Guard>[]]
  >;

export { guardNonEmptyArrayValues };
