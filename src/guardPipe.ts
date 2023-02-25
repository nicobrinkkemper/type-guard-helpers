import { guardAll } from './guardAll';
import type { AnyTypeGuard, GuardType, PipeGuard, TypeGuardFn } from './types';

/**
 * Given one or multiple Type Guard as arguments, returns a Type Guard that checks if the given value matches all given Type Guard.
 * Same as {@linkcode guardAll}, but each Type Guard must implement the previous Type Guard output, which will be inferred up to 8 Type Guard.
 * @example
 * ```ts
 * const isFooBar = guardPipe(
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
declare function _guardPipe<A extends AnyTypeGuard, B extends PipeGuard<A>>(
  ...guard: readonly [A, B]
): TypeGuardFn<unknown, GuardType<B>>;
declare function _guardPipe<
  A extends AnyTypeGuard,
  B extends PipeGuard<A>,
  C extends PipeGuard<B>
>(...guard: readonly [A, B, C]): TypeGuardFn<unknown, GuardType<C>>;
declare function _guardPipe<
  A extends AnyTypeGuard,
  B extends PipeGuard<A>,
  C extends PipeGuard<B>,
  D extends PipeGuard<C>
>(...guard: readonly [A, B, C, D]): TypeGuardFn<unknown, GuardType<D>>;
declare function _guardPipe<
  A extends AnyTypeGuard,
  B extends PipeGuard<A>,
  C extends PipeGuard<B>,
  D extends PipeGuard<C>,
  E extends PipeGuard<D>
>(...guard: readonly [A, B, C, D, E]): TypeGuardFn<unknown, GuardType<E>>;
declare function _guardPipe<
  A extends AnyTypeGuard,
  B extends PipeGuard<A>,
  C extends PipeGuard<B>,
  D extends PipeGuard<C>,
  E extends PipeGuard<D>,
  F extends PipeGuard<E>
>(...guard: readonly [A, B, C, D, E, F]): TypeGuardFn<unknown, GuardType<F>>;
declare function _guardPipe<
  A extends AnyTypeGuard,
  B extends PipeGuard<A>,
  C extends PipeGuard<B>,
  D extends PipeGuard<C>,
  E extends PipeGuard<D>,
  F extends PipeGuard<E>,
  G extends PipeGuard<F>
>(...guard: readonly [A, B, C, D, E, F, G]): TypeGuardFn<unknown, GuardType<B>>;
declare function _guardPipe<
  A extends AnyTypeGuard,
  B extends PipeGuard<A>,
  C extends PipeGuard<B>,
  D extends PipeGuard<C>,
  E extends PipeGuard<D>,
  F extends PipeGuard<E>,
  G extends PipeGuard<F>,
  H extends PipeGuard<G>
>(
  ...guard: readonly [A, B, C, D, E, F, G, H]
): TypeGuardFn<unknown, GuardType<H>>;

// a trick to avoid the duplication of the function signature
const guardPipe: typeof _guardPipe = guardAll;
export { guardPipe };
