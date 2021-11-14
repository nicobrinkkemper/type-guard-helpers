import type { AnyTypeGuard, UnionToIntersection } from './types';

/**
 * Given one or multiple Type Guards as array, will return a Type Guard that will check if the given value is a intersection of all given Type Guards combined.
 *
 * This function enables type safe composition of Type Guards, will always narrow down to highest denominator in case of overlap.
 *
 * @example
 * ```ts
 * import { isAllIn, isString, isSchema } from 'type-guard-helpers';
 * const isFooBar = isAllIn([
 *     isSchema({ foo: match'foo') }),
 *     isSchema({ bar: match'bar') })
 * ]); // val is { readonly foo: "foo"; } & { readonly bar: "bar"; }
 * ```
 * @category  Type Guard Composer
 */
const guardAllIn =
	<Guards extends readonly AnyTypeGuard[]>(guards: Guards) =>
	(val: unknown): val is UnionToIntersection<Guards> =>
		guards.findIndex((guard) => !guard(val)) === -1;

export { guardAllIn };
