import { isNonNullable } from './isNonNullable';
import type { TypeGuard } from './types';

type FilterGuard<
	T extends readonly unknown[],
	U,
	A extends readonly unknown[] = readonly []
> = T extends readonly []
	? A
	: T extends readonly [infer F, ...infer L]
	? FilterGuard<L, U, F extends U ? readonly [...A, F] : A>
	: never;

type filterGuardFn = <Param, Result>(
	guard: TypeGuard<Param, Result>
) => <A extends readonly []>(arr: A) => FilterGuard<typeof arr, Result>;

const filterGuard: filterGuardFn = (guard) => (arr) =>
	arr.filter(guard) as never;

const filterNonNullable = filterGuard(isNonNullable);

export { filterGuard, filterNonNullable };
