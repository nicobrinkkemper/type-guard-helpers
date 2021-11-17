import { guardAllIn } from './guardAllIn';
import { isTypeUndefined } from './isTypeUndefined';
import { negateGuard } from './negateGuard';
import type { TypeGuard } from './types';

/**
 * Given one or multiple Type Guards as arguments, returns a Type Guard that checks if the given value matches all given Type Guards.
 * Same as {@linkcode guardAllIn}, but accepts multiple arguments instead of a single array
 *
 * @example
 * ```ts
 * import { guardAll, matchKey, matchSchema } from 'type-guard-helpers';
 * const isFooBar = guardAll(
 *    matchSchema({ foo: matchKey('foo') }),
 *    matchSchema({ bar: matchKey('bar') })
 * ); // val is { readonly foo: "foo"; } & { readonly bar: "bar"; }
 * ```
 * @category Type Guard Composer
 *  */
const guardAll: <A, B, C, D, E, F, G, H, I, J, K>(
	guard1: TypeGuard<unknown, A>,
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
	...guards: readonly TypeGuard<K, K>[]
) => <Value>(
	value: Value
) => value is A & B & C & D & E & F & G & H & I & J & K extends Value
	? A & B & C & D & E & F & G & H & I & J & K
	: never = (...guards) =>
	guardAllIn(guards.filter(negateGuard(isTypeUndefined)));

export { guardAll };
