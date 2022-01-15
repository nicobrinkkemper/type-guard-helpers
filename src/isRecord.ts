import type { TypeGuardFn } from './types';
/**
 * A Type Guard that checks if the given value is not equal to null and is of type "object"
 *
 * @category Type Guard
 */
const isRecord: TypeGuardFn<{ readonly [k in string]: unknown }> = (
	value
): value is never => value !== null && typeof value === 'object';

export { isRecord };
