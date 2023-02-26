import { isRecord } from './isRecord';
import type {
  AnyTypeGuard,
  GuardType,
  GuardTypeInput,
  ObjectTypeGuardFn
} from './types';

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
const guardRecord = <Guard extends AnyTypeGuard<Record<string, unknown>>>(
  guard: Guard
) =>
  ((value) => isRecord(value) && guard(value)) as ObjectTypeGuardFn<
    {
      [K in keyof GuardTypeInput<Guard> | string]: GuardTypeInput<Guard>[K];
    },
    {
      [K in keyof GuardType<Guard>]: GuardType<Guard>[K];
    }
  >;

export { guardRecord };
