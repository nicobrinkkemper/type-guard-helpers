import type { AnyTypeGuard, DeepGuardType, GuardTypes } from './types';

function guardAllIn<
	Guards extends readonly [
		AnyTypeGuard<Param, A>?,
		AnyTypeGuard<A, B>?,
		AnyTypeGuard<B, C>?,
		AnyTypeGuard<C, D>?,
		AnyTypeGuard<D, E>?,
		...(readonly AnyTypeGuard<E, F>[])
	],
	Param extends unknown = Guards[0] extends (
		val: infer X,
		...args: readonly unknown[]
	) => val is never
		? X extends never
			? unknown
			: X
		: unknown,
	A = DeepGuardType<Guards[0]>,
	B = Guards[1] extends undefined ? A : DeepGuardType<Guards[1]>,
	C = Guards[2] extends undefined ? B : DeepGuardType<Guards[2]>,
	D = Guards[3] extends undefined ? C : DeepGuardType<Guards[3]>,
	E = Guards[4] extends undefined ? D : DeepGuardType<Guards[4]>,
	F = Guards[5] extends undefined ? E : DeepGuardType<Guards[5]>
>(
	guards: Guards
): <Value extends Param, Result extends Value & GuardTypes<Guards>>(
	value: Value
) => value is Result;
/**
 * Given one or multiple Type Guards as array, returns a Type Guard that checks if the given value matches all given Type Guards.
 *
 * @example
 * ```ts
 * import { guardAllIn,  match, matchSchema } from 'type-guard-helpers';
 * const isFooBar = guardAllIn([
 *     matchSchema({ foo: match'foo') }),
 *     matchSchema({ bar: match'bar') })
 * ]); // val is { readonly foo: "foo"; } & { readonly bar: "bar"; }
 * ```
 * @category Type Guard Composer
 */
function guardAllIn<Guards extends readonly AnyTypeGuard[]>(guards: Guards) {
	return function guardAllInArr<Value, Result extends GuardTypes<Guards>>(
		value: Result extends Value ? Value : Result
	): value is Result extends Value ? Result : never {
		return guards.findIndex((guard) => !guard(value as never)) === -1;
	};
}

export { guardAllIn };
