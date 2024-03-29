import { isObject } from './isObject';
import type { TypeGuardFn } from './types';
/**
 * A Type Guard that checks if the given value is not equal to null and is of type "object"
 *
 * @category Type Guard
 */
const isRecord: TypeGuardFn<unknown, Record<PropertyKey, unknown>> = isObject;

export { isRecord };
