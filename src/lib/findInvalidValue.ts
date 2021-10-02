import { isNot } from './isNot';
import { AnyGuardType } from './types';

/** Takes a Type Guard and returns a function that takes an array. Returned function will return the first value in the array not matching the Type Guard  */
const findInvalidValue = <GUARD extends AnyGuardType>(guard: GUARD) => {
  const isInvalidValue = isNot(guard);
  return <VALUE extends readonly unknown[]>(value: VALUE) =>
    value.find(isInvalidValue);
};

export { findInvalidValue };
