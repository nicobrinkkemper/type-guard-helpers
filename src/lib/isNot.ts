import { AnyGuardType, GuardType } from './types';

/**
 * @example ```ts
 * import { isNot, isString } from 'type-guard-helpers'
 * const test = [] as string | readonly string[];
 * const isNotString = isNot(isString);
 * if (isNotString(test)) {
 *   test; // string[]
 * }
 * ```
 */
const isNot =
  <GUARD extends AnyGuardType>(guard: GUARD) =>
  <VALUE>(value: VALUE): value is Exclude<VALUE, GuardType<GUARD>> =>
    !guard(value);

export { isNot };
