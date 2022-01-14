/**
 * Calls any guard
 * @example
 * ```ts
 * import { negateGuard, isNull } from 'type-guard-helpers'
 * const test = [] as string | null;
 * if (negateGuard(isNull, test)) {
 *   test; // string
 * }
 * ```
 * @category Type Guard Composer
 */
const isTruthy = <Value, Predicate = Exclude<Value, null | undefined | '' | 0>>(
	value: Value
): value is Predicate extends Value ? Predicate : never => !!value;

export { isTruthy };
