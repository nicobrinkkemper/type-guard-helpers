import { isArray } from './isArray';

import type { TypeGuardFn } from '.';

/**
 * A Type Guard that checks if the given value is an array of non-zero length.
 *
 * @category Type Guard
 */
const isNonEmptyArray: TypeGuardFn<readonly unknown[]> = (
	value
): value is never => isArray(value) && value.length > 0;

export { isNonEmptyArray };
