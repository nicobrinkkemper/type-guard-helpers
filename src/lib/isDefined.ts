import { isTypeUndefined } from './isTypeUndefined';
import { negateGuard } from './negateGuard';

/**
 * A Type Guard that will check if the given value is not undefined
 *
 * @example
 * ```ts
 * const test = {} as string | undefined;
 * if (isDefined(test)) {
 *   	test; // string
 * }
 * ```
 * @category  Type Guard
 */
const isDefined = negateGuard(isTypeUndefined);

export { isDefined };
