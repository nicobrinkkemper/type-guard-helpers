import { guardAll } from './guardAll';

/**
 * Given two Type Guards as arguments, returns a Type Guard that checks if the given value matches both given Type Guards.
 * Same as {@linkcode guardPipe}, but it requires exactly two guards instead of up to 12.
 *
 * @example
 * ```ts
 * import { guardTwo, isTypeString } form "type-guard-helpers"
 * const isFoobar = guardTwo(
 *   isTypeString,
 * 	 (val): val is `foo${string}` => val.startsWith('foo'), // (parameter) val: string
 * );
 * const test = {} as unknown;
 * if (isFoobar(test)) {
 * 	test; // `foo${string}`
 * }
 * ```
 * @category Type Guard Composer
 */
const guardTwo = guardAll as <A, B>(
	guard1: (value: unknown) => value is A,
	guard2?: (value: A) => value is B extends A ? B : never
) => (value: unknown) => value is A & B;

export { guardTwo };
