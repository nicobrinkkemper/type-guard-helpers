import type { CombineType, TypeGuard } from './types';

/**
 * Given two Type Guards as arguments, returns a Type Guard that checks if the given value matches both given Type Guards.
 * Same as {@linkcode guardAllIn}, but accepts multiple arguments instead of a single array
 * @example
 * ```ts
 * const isFooBar = guardBoth(
 *     matchType('string'),
 *     matches('1','2'),
 * );
 *
 * const test = {} as unknown;
 * if(isFooBar(test)){
 *     test; // 'foobar'
 * }
 * ```
 * @category Type Guard Composer
 *  */
function guardBoth<Param, A, B>(
	guard1: TypeGuard<Param, A>,
	guard2: TypeGuard<A, B>
) {
	return <
		Value extends Param,
		Result extends CombineType<readonly [Param, A, B]>
	>(
		value: Result extends Value ? Value : Result
	): value is Result extends Value ? Result : never =>
		guard1(value) && guard2(value);
}

export { guardBoth };
