import type {
  AnyTypeGuard,
  GuardType,
  GuardTypeInput,
  TypeGuardFn
} from './types';

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
const guardEitherIn = <Guards extends readonly AnyTypeGuard[]>(
  guards: readonly [...Guards]
) =>
  ((value: unknown) =>
    guards.findIndex((guard) => guard(value)) !== -1) as TypeGuardFn<
    GuardTypeInput<Guards[number]>,
    GuardType<Guards[number]>
  >;

export { guardEitherIn };
