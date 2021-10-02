/* eslint-disable functional/functional-parameters */

import { isStringIn } from './isStringIn';

/**
 * Creates a Type Guard for one or multiple strings. Same as `isStringLikes`, but uses spread parameters to receive strings for convenience and automatic readonly conversion.
 * @example ```ts
 * import { isStringLike } from 'type-guard-helpers'
 * const test = 'foo' as unknown;
 * const isFooOrBar = isStringLike('foo','bar')
 * if (isFooOrBar(test)) {
 *                  test; // 'foo' | 'bar'
 * }
 * ```
 */
const isStringLike = <A extends readonly string[]>(...strings: A) =>
  isStringIn(strings);

export { isStringLike };
