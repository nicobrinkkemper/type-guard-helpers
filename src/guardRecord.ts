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
	<Param extends Record<string, unknown>, A extends Param>(
		guard: TypeGuard<Param, A>
	) =>
	<
		Value,
		Merged extends Value & A,
		Result extends Merged extends never
			? A
			: {
					readonly [k in keyof Merged]: Merged[k];
			  }
	>(
		value: Result extends Value ? Value : Result
	): value is Result extends Value ? Result : never =>
		isRecord(value) && guard(value);

export { guardRecord };
