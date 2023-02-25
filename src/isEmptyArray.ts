/**
 * A Type Guard that checks if the given value is a zero length array
 *
 * @category Type Guard
 */
const isEmptyArray = <Value, Predicate = never[]>(
  value: Value
): value is Predicate extends Value ? Predicate : never =>
  Array.isArray(value) && value.length === 0;

export { isEmptyArray };
