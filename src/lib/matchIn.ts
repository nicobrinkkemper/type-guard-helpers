import type { AnyPrimitive } from './types';

type MatchInFn = <Primitives extends readonly AnyPrimitive[]>(
	arr: Primitives
) => <Value, Result extends Primitives[keyof Primitives]>(
	value: Result extends Value
		? Value
		: Result extends AnyPrimitive
		? Result
		: never
) => value is Result extends Value ? Result : never;

/**
 * Given an array of primitives, returns a Type Guard that checks if the given value is strictly equal to any of the given primitives.
 * @category Type Guard Creator
 */
const matchIn: MatchInFn =
	(arr) =>
	(value): value is never =>
		arr.indexOf(value as AnyPrimitive) !== -1;

export type { MatchInFn };
export { matchIn };
