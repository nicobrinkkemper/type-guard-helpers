/** Takes a key and returns a Type Guard to check if that key exists on a unknown object. Type Guard will pass if key is present in given value via `key in value`. */
const isKey =
  <KEY extends PropertyKey>(key: KEY) =>
  <VALUE extends Record<PropertyKey, unknown>>(
    value: VALUE
  ): value is VALUE & Record<KEY, unknown> =>
    key in value;

export { isKey };
