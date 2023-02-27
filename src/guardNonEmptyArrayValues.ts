import { negateIterableGuard } from './negateGuard';
import type {
  AnyIterableTypeGuard,
  GuardType,
  GuardTypeInput,
  TypeGuardFn
} from './types';

type GuardNonEmptyArrayValues = <Guard extends AnyIterableTypeGuard>(
  guard: Guard
) => TypeGuardFn<
  readonly GuardTypeInput<Guard>[],
  readonly [GuardType<Guard>, ...GuardType<Guard>[]]
>;

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
const guardNonEmptyArrayValues: GuardNonEmptyArrayValues =
  (guard) =>
  (value): value is never =>
    Array.isArray(value) &&
    value.length !== 0 &&
    value.findIndex(negateIterableGuard(guard)) === -1;

export { guardNonEmptyArrayValues };
