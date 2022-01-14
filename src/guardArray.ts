import type { TypeGuard } from './types';
/**
 * Given a Type Guard, returns a Type Guard that checks if the given value is an array and matches the given Type Guard.
 *
 * @example
 * ```ts
 * import { guardArray } from 'type-guard-helpers';
 *
 * const isStringArray = guardArray(
 * 	(value): value is readonly string[] =>
 * 		value.findIndex((item) => typeof item !== 'string') === -1
 * );
 *
 * const test = {} as unknown;
 * if (isStringArray(test)) {
 * 	  test; // test: readonly string[]
 * }
 * ```
 * @category Type Guard Composer
 */
const guardArray =
	<Param extends readonly unknown[], A>(
		guard: TypeGuard<readonly [...Param], A>
	) =>
	<Value extends readonly [...Param]>(
		value: Value
	): value is A extends Value ? A : never =>
		Array.isArray(value) && guard(value);

export { guardArray };
