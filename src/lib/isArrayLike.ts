import { findInvalidValue } from './findInvalidValue';
import { isArray } from './isArray';
import { AnyGuardType, GuardType } from './types';

/**
 * Takes a type-guard and returns a type-guard that takes a unknown value. The returned type-guard will return true
 * if the given value is an array that only contains values that match the given type-guard.
 * @example validateSchemaObject(unknownObj,{someValue: isString})
 */
const isArrayLike = <GUARD extends AnyGuardType>(guard: GUARD) => {
  const invalidValue = findInvalidValue(guard);
  return (value: unknown): value is readonly GuardType<GUARD>[] =>
    isArray(value) && !invalidValue(value);
};

export { isArrayLike };
