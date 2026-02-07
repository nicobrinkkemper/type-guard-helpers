import type { GuardAllInFn } from './guardAllIn';
import { guardAllIn } from './guardAllIn';
import type { AnyTypeGuard } from './types';

type GuardAll = <Guards extends readonly AnyTypeGuard[]>(
  ...guards: Readonly<[...Guards]>
) => GuardAllInFn<Guards>;

/**
 * Given one or multiple Type Guards as parameters, returns a Type Guard that checks if the given value matches all given Type Guards.
 *
 * @example
 * ```ts
 * import { guardAllIn, match, matchSchema } from 'type-guard-helpers';
 * const isFooBar = guardAll(
 *     matchSchema({ foo: match('foo') }),
 *     matchSchema({ bar: match('bar') })
 * ); // val is { readonly foo: "foo"; } & { readonly bar: "bar"; }
 * ```
 * @category Type Guard Composer
 */
const guardAll: GuardAll = (...guards) => guardAllIn(guards);

export { guardAll };
export type { GuardAll };
