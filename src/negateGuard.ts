import type {
  AnyIterableTypeGuard,
  AnyTypeGuard,
  NegateTypeGuardFn
} from './types';

/**
 * Negates the output of any given Type Guard and types accordingly using Exclude.
 * @example
 * ```ts
 * import { negateGuard, isNull } from 'type-guard-helpers'
 * const test = [] as string | null;
 * if (negateGuard(isNull, test)) {
 *   test; // string
 * }
 * ```
 * @category Type Guard Composer
 */
const negateGuard = <Guard extends AnyTypeGuard>(guard: Guard) =>
  ((value) => !guard(value)) as NegateTypeGuardFn<Guard>;

/**
 * Negates the output of any given Type Guard and types accordingly using Exclude.
 * @example
 * ```ts
 * import { negateGuard, isNull } from 'type-guard-helpers'
 * const test = [] as string | null;
 * if (negateGuard(isNull, test)) {
 *   test; // string
 * }
 * ```
 * @category Type Guard Composer
 */
const negateIterableGuard = negateGuard as <Guard extends AnyIterableTypeGuard>(
  guard: Guard
) => NegateTypeGuardFn<Guard>;

export { negateIterableGuard };

export { negateGuard };
