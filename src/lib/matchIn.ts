/**
 * Given a array, returns a Type Guard that checks if the given value is a index of the given array.
 * @category | Type Guard Creator
 */
const matchIn =
	<AnyArray extends readonly unknown[]>(arr: AnyArray) =>
	(value: unknown): value is AnyArray[number] =>
		arr.indexOf(value) !== -1;

export { matchIn };
