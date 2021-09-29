import { isKeyOf } from './isKeyOf';
import { isNot } from './isNot';

/** Takes a array of keys and returns a function that takes an object. Returned function will return the first key in the object not matching any of the given keys. */
const findMissingKey =
  <KEYS extends readonly string[]>(keys: KEYS) =>
  <VALUE extends Record<PropertyKey, unknown>>(value: VALUE) =>
    keys.find(isNot(isKeyOf(value)));

export { findMissingKey };
