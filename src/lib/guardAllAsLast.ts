import { guardAll } from './guardAll';
import type { AnyTypeGuard, GuardType, Last } from './types';

/**
 * Given one or multiple Type Guards as arguments, returns a Type Guard that checks if the given value matches all given Type Guards.
 * Same as {@linkcode guardAll}, but will only cast the last Type Guard to the given value.
 *
 * @example
 * ```ts
 * import { guardAllAsLast, matchKey, matchSchema } from 'type-guard-helpers';
 * const isFooBar = guardAllAsLast(
 *    matchSchema({ foo: matchKey('foo') }),
 *    matchSchema({ bar: matchKey('bar') })
 * ); // val is { readonly bar: "bar"; }
 * ```
 * @category Type Guard Composer
 *  */
const guardAllAsLast = guardAll as <Guards extends readonly AnyTypeGuard[]>(
	...guard: Guards
) => (value: unknown) => value is GuardType<Last<Guards>>;

export { guardAllAsLast };
