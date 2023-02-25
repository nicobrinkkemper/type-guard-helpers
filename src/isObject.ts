import type { TypeGuardFn } from './types';
/**
 * A Type Guard that checks if the given value type is equal to `object` and is not null
 *
 * @category Type Guard
 */
const isObject: TypeGuardFn<unknown, object> = (value): value is never =>
  value !== null && typeof value === 'object';

export { isObject };
