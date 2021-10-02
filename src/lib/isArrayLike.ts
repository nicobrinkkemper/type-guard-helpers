import { findInvalidValue } from './findInvalidValue';
import { isArray } from './isArray';
import { AnyGuardType, GuardType } from './types';

/**
 * Takes a Type Guard and returns a Type Guard that takes a unknown value. The returned Type Guard will return true
 * if the given value is an array that only contains values that match the given Type Guards.
 * @example ```ts
 * import { isString, isArrayLike } from 'type-guard-helpers';
 * const isStringArray = isArrayLike(isString)
 * if(isStringArray(test)) test; // test: readonly string[]
 * ```
 */
const isArrayLike = <GUARD extends AnyGuardType>(guard: GUARD) => {
  const invalidValue = findInvalidValue(guard);
  return (value: unknown): value is readonly GuardType<GUARD>[] =>
    isArray(value) && !invalidValue(value);
};

export { isArrayLike };
