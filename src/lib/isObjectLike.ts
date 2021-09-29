import { findInvalidEntry } from './findInvalidEntry';
import { findMissingKey } from './findMissingKey';
import { isKeyOf } from './isKeyOf';
import { isObject } from './isObject';

const isRequiredEntry = <SCHEMA extends GuardSchema<SCHEMA>>(
  schema: SCHEMA
) => {
  const isSchemaKey = isKeyOf(schema);
  return (
    entry: readonly [PropertyKey, unknown]
  ): entry is readonly [keyof SCHEMA, GuardType<SCHEMA[keyof SCHEMA]>] =>
    isSchemaKey(entry[0]) && schema[entry[0]](entry[1]);
};

/**
 * Takes a schema and return a type-guard that takes a unknown value. The returned type-guard will return true if the given value matches a type-guard
 * in the schema with the same key. Returns false when a key is encountered that is not in the schema.
 *
 * @example ```ts
 * const isFoo = isObjectLike({
 *            foo: (value: unknown): value is 'foo' => value === 'foo',
 * })
 * const test = {foo:'foo'} as unknown
 * if(isFoo(test)){
 *            test; // hover will show: { readonly foo: "foo"; }
 * }
 * ```
 */
const isObjectLike = <SCHEMA extends GuardSchema<SCHEMA>>(schema: SCHEMA) => {
  const invalidEntry = findInvalidEntry(isRequiredEntry(schema));
  const missingKey = findMissingKey(Object.keys(schema));
  return (
    value: unknown
  ): value is { readonly [k in keyof SCHEMA]: GuardType<SCHEMA[k]> } => {
    return isObject(value) && !missingKey(value) && !invalidEntry(value);
  };
};

export { isObjectLike };
