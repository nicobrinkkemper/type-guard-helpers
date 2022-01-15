import type { DeepGuardType, GuardTypes, TypeGuard } from './types';

import type { AnyTypeGuard } from '.';

function guardAllIn<
	Guards extends readonly [
		TypeGuard<Param, A>?,
		TypeGuard<A, B>?,
		TypeGuard<B, C>?,
		TypeGuard<C, D>?,
		TypeGuard<C, D>?,
		...(readonly TypeGuard<E, F>[])
	],
	Param = Parameters<NonNullable<Guards[0]>>[0],
	A = Param & DeepGuardType<Guards[0]>,
	B = A & DeepGuardType<Guards[1]>,
	C = B & DeepGuardType<Guards[2]>,
	D = C & DeepGuardType<Guards[3]>,
	E = D & DeepGuardType<Guards[4]>,
	F = E & DeepGuardType<Guards[5]>
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
function guardAllIn<Guards extends readonly AnyTypeGuard[]>(guards: Guards) {
	return function guardAllInArr<
		Value extends Parameters<NonNullable<Guards[0]>>[0],
		Result extends GuardTypes<Guards>
	>(
		value: Result extends Value ? Value : Result
	): value is Result extends Value ? Result : never {
		return guards.findIndex((guard) => !guard(value as never)) === -1;
	};
}

export { guardAllIn };
