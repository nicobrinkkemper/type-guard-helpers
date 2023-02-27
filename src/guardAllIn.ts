import type {
  AnyTypeGuard,
  GuardTypeInput,
  GuardTypes,
  TypeGuardFn
} from './types';

type GuardAllInFn<Guards extends readonly AnyTypeGuard[]> =
  Guards extends readonly [
    infer Head extends AnyTypeGuard,
    ...infer Tail extends AnyTypeGuard[]
  ]
    ? TypeGuardFn<GuardTypeInput<Head>, GuardTypes<readonly [Head, ...Tail]>>
    : never;

type GuardAllIn = <Guards extends readonly AnyTypeGuard[]>(
  guards: Readonly<[...Guards]>
) => GuardAllInFn<Guards>;

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
const guardAllIn: GuardAllIn = (guards) =>
  ((value) =>
    guards.findIndex((guard) => !guard(value)) === -1) as GuardAllInFn<
    typeof guards
  >;

export { guardAllIn };
export type { GuardAllInFn, GuardAllIn };
