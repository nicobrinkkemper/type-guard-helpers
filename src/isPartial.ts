import { isRecord } from './isRecord';
import type { TypeGuardFn } from './types';

/**
 * A Type Guard that checks if the given value is not equal to null and is of type "object"
 *
 * @category Type Guard
 */
const isPartial: TypeGuardFn<unknown, { readonly [k in string]-?: unknown }> =
  isRecord;

export { isPartial };
