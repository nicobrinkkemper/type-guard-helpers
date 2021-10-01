import { AnyGuardType, GuardType } from './types';

/**
 * @example ```ts
 * const test = [] as string | readonly string[];
 * if (isNot(isString)(test)) {
 *   test; // string[]
 * }
 * ```
 */
const isNot =
  <GUARD extends AnyGuardType>(guard: GUARD) =>
  <VALUE>(value: VALUE): value is Exclude<VALUE, GuardType<GUARD>> =>
    !guard(value);

export { isNot };
