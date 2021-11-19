/**
 * A Type Guard that checks if the given value is an array
 *
 * @category Type Guard
 */
const isArray = Array.isArray as <
	Value,
	Predicate extends readonly unknown[] extends Value
		? readonly unknown[]
		: never
>(
	value: Value
) => value is Predicate;

export { isArray };
