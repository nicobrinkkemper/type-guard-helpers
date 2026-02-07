import type {
  AnyTypeGuard,
  GuardType,
  GuardTypeInput,
  TypeGuardFn
} from './types';

type GuardEitherIn = <Guards extends readonly AnyTypeGuard[]>(
  guards: readonly [...Guards]
) => TypeGuardFn<GuardTypeInput<Guards[number]>, GuardType<Guards[number]>>;

/**
 * Given one or multiple Type Guards as array, returns a Type Guard to check if a value matches at least one of the given Type Guard(s).
 * Same as {@link guardEither}, but accepts a single array instead of multiple arguments
 *
 * @example
 * ```ts
 * import { isNull,  match, isEitherIn } from 'type-guard-helpers';
 * const isStringOrNull = isEitherIn([isNull, isString]);
 * const test = {} as unknown;
 * if (isStringOrNull(test)) {
 *   test; // string || null
 * }
 * ```
 * @category Type Guard Composer
 */
const guardEitherIn: GuardEitherIn =
  (guards) =>
  (value): value is never =>
    guards.some((guard) => guard(value));

export { guardEitherIn };
export type { GuardEitherIn };
