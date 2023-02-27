import type { NegateTypeGuardFn } from './types';

/**
 * Calls any guard
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
const isTruthy: NegateTypeGuardFn<
  null | undefined | '' | 0 | false | unknown
> = (value): value is never => !!value;

export { isTruthy };
