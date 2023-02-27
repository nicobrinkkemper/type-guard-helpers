import { guardArrayValues } from './guardArrayValues';
import type { AnyPrimitive, TypeGuardFn } from './types';

type MatchArrayFn<
  Input extends readonly AnyPrimitive[],
  Output extends Input
> = TypeGuardFn<Input, Output>;

type MatchArray<
  Input extends readonly AnyPrimitive[] = readonly AnyPrimitive[]
> = <Arr extends Input>(array: readonly [...Arr]) => MatchArrayFn<Input, Arr>;

/**
 * Given an array of primitives, returns a Type Guard that checks if the given value is like the array.
 *
 * @category Type Guard Creator
 */
const matchArray: MatchArray = (array) =>
  guardArrayValues((value, i): value is never => value === array[i]);

export { matchArray };
