import { isNot } from './isNot';

/** Takes a schema object and returns a function that takes an object. Returned function will return the first key/value pair in the object not matching the schema type-guards. */
const findInvalidEntry = <GUARD extends AnyGuardType>(guard: GUARD) => {
  const isInvalidEntry = isNot(guard);
  return <VALUE extends Record<PropertyKey, unknown>>(value: VALUE) =>
    Object.entries(value).find(isInvalidEntry);
};

export { findInvalidEntry };
