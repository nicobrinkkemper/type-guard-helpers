/**
 * A Type Guard that will check if the given value is an array
 *
 * @category  Type Guard
 */
const isArray: (value: unknown) => value is readonly unknown[] = Array.isArray;

export { isArray };
