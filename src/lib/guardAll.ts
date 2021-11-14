import { guardAllIn } from './guardAllIn';
import type { AnyTypeGuard } from './types';

/**
 * Given one or multiple Type Guards as arguments, will return a Type Guard that will check if the given value is a intersection of all given Type Guards combined.
 * Same as {@linkcode isAllIn}, but accepts multiple arguments instead of a single array
 *
 * @example
 * ```ts
 * import { isAll, isKey, isSchema } from 'type-guard-helpers';
 * const isFooBar = isAll(
 *    isSchema({ foo: matchKey('foo') }),
 *    isSchema({ bar: matchKey('bar') })
 * ); // val is { readonly foo: "foo"; } & { readonly bar: "bar"; }
 * ```
 * @category  Type Guard Composer
 *  */
const guardAll = <Guards extends readonly AnyTypeGuard[]>(...guards: Guards) =>
	guardAllIn(guards);

export { guardAll };
