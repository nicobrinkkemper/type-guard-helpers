import { isNull } from './isNull';
import { isNullable } from './isNullable';
import { isTypeUndefined } from './isTypeUndefined';
import type { TypeGuard } from './types';

/** Excludes a type from a array while preserving const order
 *  @example
 * ```ts
 * guardAllIn(
 * 	 guards.filter(
 * 		<Value>(val: Value): val is Exclude<Value, undefined> => val !== undefined
 * 	 ) as unknown as ExcludeFromTuple<typeof guards, undefined>
 * );
 * ```
 */
type ExcludeFromTuple<
	Arr extends readonly unknown[],
	Filter,
	Result extends readonly unknown[] = readonly []
> = Arr extends readonly []
	? Result
	: Required<Arr> extends readonly [infer Head, ...infer Tail]
	? ExcludeFromTuple<
			Tail,
			Filter,
			Head extends Filter ? Result : readonly [...Result, Head]
	  >
	: {
			readonly [P in keyof Arr]-?: Exclude<Arr[P], Filter>;
	  };

type ExcludeGuardFn = <Param extends unknown, Result>(
	guard: TypeGuard<Param, Result>
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
) => <A extends readonly any[]>(arr: A) => ExcludeFromTuple<A, Result>;

const excludeGuard: ExcludeGuardFn = (guard) => (arr) =>
	arr.filter(guard) as never;

const excludeNonNullable = excludeGuard(isNullable);
const excludeUndefined = excludeGuard(isTypeUndefined);
const excludeNull = excludeGuard(isNull);

export { excludeGuard, excludeNonNullable, excludeUndefined, excludeNull };
