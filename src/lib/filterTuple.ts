type FilterTuple<
	T extends readonly unknown[],
	U,
	A extends readonly unknown[] = readonly []
> = T extends readonly []
	? A
	: T extends readonly [infer F, ...infer L]
	? FilterTuple<L, U, F extends U ? readonly [...A, F] : A>
	: never;

const filterTuple = <T extends readonly unknown[], U>(
	arr: T,
	pred: (v: T[number]) => v is U
): FilterTuple<T, U> => arr.filter(pred) as FilterTuple<T, U>;

export { filterTuple };
