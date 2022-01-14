import { isRecord } from './isRecord';
import type { TypeGuard } from './types';

/**
 * Given a Type Guard, returns a Type Guard that checks if the given value is a Record and all its entries match the given Type Guard.
 *
 * @example
 * ```ts
 * import { guardRecord } from "type-guard-helpers"
 *
 * const test = {} as unknown;
 * const isTranslation = guardRecord(
 * 	(val): val is { readonly translation: string } => !!val.translation
 * );
 *
 * if (isTranslation(test)) {
 * 	test; //  { readonly translation: string; }
 * }
 * ```
 * @category Type Guard Composer
 */
const guardRecord =
	<A>(guard: TypeGuard<Record<string, unknown>, A>) =>
	<Value, Result extends A>(
		value: Result extends Value ? Value : Result
	): value is Result extends Value ? Result : never =>
		isRecord(value) && guard(value);

export { guardRecord };
