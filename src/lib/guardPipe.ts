import { guardAll } from './guardAll';
import type { PipedTypeGuard } from './types';

/**
 * Given one or up to 12 Type Guards as arguments, returns a Type Guard that checks if the given value matches all given Type Guards.
 * Same as {@linkcode guardAll}, but it pipes the Guard Type of each function to the parameters of the next function.
 *
 * @example
 * ```ts
 * import { guardPipe, isTypeString } form "type-guard-helpers"
 * const isFoobar = guardPipe(
 *   isTypeString,
 * 	 (val): val is `foo${string}` => val.startsWith('foo'), // (parameter) val: string
 * 	 (val): val is `foobar` => val === 'foobar' // (parameter) val: `foo${string}`
 * );
 * const test = {} as unknown;
 * if (isFoobar(test)) {
 * 	test; // "foobar"
 * }
 * ```
 * @category Type Guard Composer
 */
const guardPipe = guardAll as <A, B, C, D, E, F, G, H, I, J, K>(
	guard1: PipedTypeGuard<unknown, A>,
	guard2?: PipedTypeGuard<A, B>,
	guard3?: PipedTypeGuard<B, C>,
	guard5?: PipedTypeGuard<C, D>,
	guard6?: PipedTypeGuard<D, E>,
	guard7?: PipedTypeGuard<E, F>,
	guard8?: PipedTypeGuard<F, G>,
	guard9?: PipedTypeGuard<G, H>,
	guard10?: PipedTypeGuard<H, I>,
	guard11?: PipedTypeGuard<I, J>,
	guard12?: PipedTypeGuard<J, K>
) => (value: unknown) => value is A & B & C & D & E & F & G & H & I & J & K;

export { guardPipe };
