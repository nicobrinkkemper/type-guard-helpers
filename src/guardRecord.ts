import { guardPipe } from './guardPipe';
import { isRecord } from './isRecord';
import type { AnyTypeGuard } from './types';

type GuardRecord = <Guard extends AnyTypeGuard<Record<string, unknown>>>(
  guard: Guard
) => ReturnType<typeof guardPipe<typeof isRecord, Guard>>;

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
const guardRecord: GuardRecord = (guard) => guardPipe(isRecord, guard);

export { guardRecord };
export type { GuardRecord };
