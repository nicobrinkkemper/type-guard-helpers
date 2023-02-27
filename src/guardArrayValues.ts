import { negateIterableGuard } from './negateGuard';
import type {
  AnyIterableTypeGuard,
  GuardType,
  GuardTypeInput,
  TypeGuardFn
} from './types';

type GuardArrayValues = <Guard extends AnyIterableTypeGuard>(
  guard: Guard
) => TypeGuardFn<readonly GuardTypeInput<Guard>[], readonly GuardType<Guard>[]>;

/**
 * Given a Type Guard, returns a Type Guard that checks if the given value is an array and if all its values match the given Type Guard.
 *
 * @example
 * ```ts
 * import { guardArrayValues } from 'type-guard-helpers';
 *
 * const isStringArray = guardArrayValues(
 * 	(value): value is string =>
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
const guardArrayValues: GuardArrayValues =
  (guard) =>
  (value): value is never =>
    value.findIndex(negateIterableGuard(guard) as never) === -1;

export { guardArrayValues };
export type { GuardArrayValues };
