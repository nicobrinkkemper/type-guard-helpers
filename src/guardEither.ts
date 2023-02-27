import { guardEitherIn } from './guardEitherIn';
import type { AnyTypeGuard } from './types';

type GuardEither = <Guards extends readonly AnyTypeGuard[]>(
  ...guards: readonly [...Guards]
) => ReturnType<typeof guardEitherIn<Guards>>;

/**
 * Given one or multiple Type Guards as arguments, returns a Type Guard to check if a value matches at least one of the given Type Guard(s).
 * Same as {@link guardEitherIn}, but accepts multiple arguments instead of a single array
 *
 * @example
 * ```ts
 * import { isNull,  match, guardEither, isTypeString } from 'type-guard-helpers';
 * const isStringOrNull = guardEither(isNull, isTypeString);
 * const test = {} as unknown;
 * if (isStringOrNull(test)) {
 *   test; // string || null
 * }
 * ```
 * @category Type Guard Composer
 */
const guardEither: GuardEither = (...guards) => guardEitherIn(guards);

export { guardEither };
export type { GuardEither };
