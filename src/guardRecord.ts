import { isRecord } from './isRecord';
import type { AnyTypeGuard, TypeGuard, TypeGuardFn } from './types';

/**
 * Given a Type Guard, returns a Type Guard that checks if the given value is a Record and all its entries match the given Type Guard.
 *
 * @example
 * ```ts
 * import { guardRecord } from "type-guard-helpers"
 *
 * const test = {} as unknown;
 * const isTranslation = guardRecord(
 * 	(val): val is { readonly translation: string } => !!val.translation
 * );
 *
 * if (isTranslation(test)) {
 * 	test; //  { readonly translation: string; }
 * }
 * ```
 * @category Type Guard Composer
 */
const guardRecord = <Guard extends AnyTypeGuard>(guard: Guard) =>
  ((value) => isRecord(value) && guard(value)) as Guard extends TypeGuard<
    infer A,
    infer B
  >
    ? TypeGuardFn<
        A,
        {
          readonly [k in keyof B]: B[k];
        }
      >
    : never;

export { guardRecord };
