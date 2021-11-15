import { guardAllIn } from './guardAllIn';
import type { AnyTypeGuard } from './types';

/**
 * Given one or multiple Type Guards as arguments, returns a Type Guard that checks if the given value matches all given Type Guards.
 * Same as {@linkcode guardAllIn}, but accepts multiple arguments instead of a single array
 *
 * @example
 * ```ts
 * import { guardAll, matchKey, matchSchema } from 'type-guard-helpers';
 * const isFooBar = guardAll(
 *    matchSchema({ foo: matchKey('foo') }),
 *    matchSchema({ bar: matchKey('bar') })
 * ); // val is { readonly foo: "foo"; } & { readonly bar: "bar"; }
 * ```
 * @category Type Guard Composer
 *  */
const guardAll = <Guards extends readonly AnyTypeGuard[]>(...guards: Guards) =>
	guardAllIn(guards);

export { guardAll };
