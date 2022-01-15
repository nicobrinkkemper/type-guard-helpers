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
	: readonly U[];

function filterGuard<Param, A>(guard: TypeGuard<Param, A>) {
	return function _filterGuard<Arr extends readonly Param[]>(
		arr: Arr
	): FilterGuard<Arr, A> {
		return arr.filter(guard) as never;
	};
}

const filterNonNullable = filterGuard(isNonNullable);

export { filterGuard, filterNonNullable };
export type { FilterGuard };
