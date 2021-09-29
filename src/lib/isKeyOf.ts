import { isPropertyKey } from './isPropertyKey';

/** Takes a object and returns a type-guard that takes a unknown value. Type-guard will pass if the value is a key of given object`. */
const isKeyOf =
  <OBJECT extends Record<PropertyKey, unknown>>(object: OBJECT) =>
  (value: unknown): value is keyof OBJECT =>
    isPropertyKey(value) && value in object;

export { isKeyOf };
