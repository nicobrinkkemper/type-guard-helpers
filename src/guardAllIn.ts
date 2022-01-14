import type { DeepGuardType, DeepTypeGuard, GuardTypes } from './types';

function guardAllIn<
	Guards extends readonly [
		DeepTypeGuard<Param, A>?,
		DeepTypeGuard<A, B>?,
		DeepTypeGuard<B, C>?,
		DeepTypeGuard<C, D>?,
		DeepTypeGuard<C, D>?,
		...(readonly DeepTypeGuard<E, F>[])
	],
	Param = Parameters<NonNullable<Guards[0]>>[0],
	A = Param & DeepGuardType<Required<Guards>[0]>,
	B = A & DeepGuardType<Required<Guards>[1]>,
	C = B & DeepGuardType<Required<Guards>[2]>,
	D = C & DeepGuardType<Required<Guards>[3]>,
	E = D & DeepGuardType<Required<Guards>[4]>,
	F = E & DeepGuardType<Required<Guards>[5]>
>(
	guards: Guards
): <Value extends Param, Result extends GuardTypes<Guards>>(
	value: Result extends Value ? Value : Result
) => value is Result extends Value ? Result : never;
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
function guardAllIn<
	Param,
	A extends GuardTypes<Guards>,
	Guards extends readonly DeepTypeGuard<Param, A>[]
>(guards: Guards) {
	return function guardAllInArr<Value extends Param, Result extends A>(
		value: Result extends Value ? Value : Result
	): value is Result extends Value ? Result : never {
		return guards.findIndex((guard) => !guard(value as never)) === -1;
	};
}

export { guardAllIn };
