import { guardAllIn } from './guardAllIn';
import type { AnyTypeGuard } from './types';

/**
 * Given one or multiple Type Guards as parameters, returns a Type Guard that checks if the given value matches all given Type Guards.
 *
 * @example
 * ```ts
 * import { guardPipe In,  match, matchSchema } from 'type-guard-helpers';
 * const isFooBar = guardAll(
 *     matchSchema({ foo: match'foo') }),
 *     matchSchema({ bar: match'bar') })
 * ); // val is { readonly foo: "foo"; } & { readonly bar: "bar"; }
 * ```
 * @category Type Guard Composer
 */
const guardAll = <Guards extends readonly AnyTypeGuard[]>(
  ...guards: Readonly<[...Guards]>
) => guardAllIn(guards);

export { guardAll };
