import { guardEitherIn } from './guardEitherIn';
import type { TypeGuard } from './types';

/**
 * Given one or multiple Type Guards as arguments, returns a Type Guard to check if a value matches at least one of the given Type Guard(s).
 * Same as {@link isEither}, but accepts multiple arguments instead of a single array
 *
 * @example
 * ```ts
 * import { isNull, matchString, isEither } from 'type-guard-helpers';
 * const isStringOrNull = isEither(isNull, isString);
 * const test = {} as unknown;
 * if (isStringOrNull(test)) {
 *   test; // string || null
 * }
 * ```
 * @category Type Guard Composer
 */
const guardEither = <A>(...guards: readonly TypeGuard<unknown, A>[]) =>
	guardEitherIn(guards);

export { guardEither };
