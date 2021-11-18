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
	<Value>(value: Value): value is A extends Value ? A : never =>
		isRecord(value) && guard(value);

export { guardRecord };
