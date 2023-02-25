import type { AnyTypeGuard, GuardTypes, TypeGuardFn } from './types';

type GuardAll<Guards extends readonly AnyTypeGuard[]> =
  Guards extends readonly [
    infer Head extends AnyTypeGuard,
    ...infer Tail extends AnyTypeGuard[]
  ]
    ? TypeGuardFn<unknown, GuardTypes<readonly [Head, ...Tail]>>
    : never;

/**
 * Given one or multiple Type Guards as array, returns a Type Guard that checks if the given value matches all given Type Guards.
 *
 * @example
 * ```ts
 * import { guardPipe In,  match, matchSchema } from 'type-guard-helpers';
 * const isFooBar = guardAllIn([
 *     matchSchema({ foo: match'foo') }),
 *     matchSchema({ bar: match'bar') })
 * ]); // val is { readonly foo: "foo"; } & { readonly bar: "bar"; }
 * ```
 * @category Type Guard Composer
 */
const guardAllIn = <Guards extends readonly AnyTypeGuard[]>(
  guards: Readonly<[...Guards]>
) =>
  ((value) =>
    guards.findIndex((guard) => !guard(value)) === -1) as GuardAll<Guards>;

export { guardAllIn };
