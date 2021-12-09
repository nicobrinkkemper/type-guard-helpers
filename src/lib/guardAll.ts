import { guardAllIn } from './guardAllIn';
import type { AnyTypeGuard, CombineType, TypeGuard } from './types';

/**
 * Given one or multiple Type Guards as arguments, returns a Type Guard that checks if the given value matches all given Type Guards.
 * Same as {@linkcode guardAllIn}, but accepts multiple arguments instead of a single array
 * @example
 * ```ts
 * const isFooBar = guardAll(
 *     matchType('string'),
 *     (val): val is `foo${string}` => val.startsWith('foo'),
 *     (val): val is 'foobar' => val === 'foobar'
 * );
 *
 * const test = {} as unknown;
 * if(isFooBar(test)){
 *     test; // 'foobar'
 * }
 * ```
 * @category Type Guard Composer
 *  */
const guardAll: <Param, A, B, C, D, E, F, G, H, I, J, K>(
	guard1?: TypeGuard<Param, A>,
	guard2?: TypeGuard<A, B>,
	guard3?: TypeGuard<B, C>,
	guard5?: TypeGuard<C, D>,
	guard6?: TypeGuard<D, E>,
	guard7?: TypeGuard<E, F>,
	guard8?: TypeGuard<F, G>,
	guard9?: TypeGuard<G, H>,
	guard10?: TypeGuard<H, I>,
	guard11?: TypeGuard<I, J>,
	guard12?: TypeGuard<J, K>,
	...guards: ReadonlyArray<TypeGuard<K, K>>
) => <
	Value,
	Result extends CombineType<readonly [A, B, C, D, E, F, G, H, I, J, K]>,
	Predicate extends Result extends Value ? Result : never
>(
	value: Result extends Value ? Value : Result
) => value is Predicate = (...guards) =>
	guardAllIn(guards as readonly AnyTypeGuard[]);

export { guardAll };
