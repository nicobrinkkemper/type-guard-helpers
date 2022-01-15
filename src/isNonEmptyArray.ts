import { guardArray } from './guardArray';

/**
 * A Type Guard that checks if the given value is an array of non-zero length.
 *
 * @category Type Guard
 */
const isNonEmptyArray = guardArray(
	(value): value is typeof value & { readonly length: Exclude<number, 0> } =>
		value.length > 0
);

export { isNonEmptyArray };
