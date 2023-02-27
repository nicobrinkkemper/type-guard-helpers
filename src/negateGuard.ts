import type {
  AnyIterableTypeGuard,
  AnyTypeGuard,
  GuardType,
  NegateTypeGuardFn
} from './types';

type NegateGuard = <Guard extends AnyTypeGuard>(
  guard: Guard
) => NegateTypeGuardFn<GuardType<Guard>>;

type NegateIterableGuard = <Guard extends AnyIterableTypeGuard = never>(
  guard: Guard
) => NegateTypeGuardFn<GuardType<Guard>>;

/**
 * Negates the output of any given Type Guard and types accordingly using Exclude.
 * @example
 * ```ts
 * import { negateGuard, isNull } from 'type-guard-helpers'
 * const test = 'a' as string | null;
 * if (negateGuard(isNull, test)) {
 *   test; // string
 * }
 * ```
 * @category Type Guard Composer
 */
const negateGuard: NegateGuard =
  (guard) =>
  (value): value is never =>
    !guard(value);

/**
 * Negates the output of any given Type Guard and types accordingly using Exclude.
 * @example
 * ```ts
 * import { negateIterableGuard, isNull } from 'type-guard-helpers'
 * const test = ['a'] as string[] | null;
 * if (negateIterableGuard(isNull, test)) {
 *   test; // string[]
 * }
 * ```
 * @category Type Guard Composer
 */
const negateIterableGuard: NegateIterableGuard = negateGuard;

export { negateIterableGuard, negateGuard };
