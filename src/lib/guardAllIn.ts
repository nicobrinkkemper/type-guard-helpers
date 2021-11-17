import type { AnyTypeGuard, CombineGuardType } from './types';

/**
 * Given one or multiple Type Guards as array, returns a Type Guard that checks if the given value matches all given Type Guards.
 *
 * @example
 * ```ts
 * import { guardAll, matchString, matchSchema } from 'type-guard-helpers';
 * const isFooBar = guardAll([
 *     matchSchema({ foo: match'foo') }),
 *     matchSchema({ bar: match'bar') })
 * ]); // val is { readonly foo: "foo"; } & { readonly bar: "bar"; }
 * ```
 * @category Type Guard Composer
 */
const guardAllIn =
	<Guards extends readonly AnyTypeGuard[]>(guards: Guards) =>
	<Value, Predicate = CombineGuardType<Guards>>(
		value: Value
	): value is Predicate extends Value ? Predicate : never =>
		guards.findIndex((guard) => !guard(value)) === -1;

export { guardAllIn };
