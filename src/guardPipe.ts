import { guardAll } from './guardAll';
import type {
  AnyTypeGuard,
  GuardType,
  GuardTypeInput,
  PipeGuard,
  TypeGuardFn
} from './types';

declare function GuardPipe<A extends AnyTypeGuard, B extends PipeGuard<A>>(
  ...guard: readonly [A, B]
): TypeGuardFn<GuardTypeInput<A>, GuardType<B>>;
declare function GuardPipe<
  A extends AnyTypeGuard,
  B extends PipeGuard<A>,
  C extends PipeGuard<B>
>(...guard: readonly [A, B, C]): TypeGuardFn<GuardTypeInput<A>, GuardType<C>>;
declare function GuardPipe<
  A extends AnyTypeGuard,
  B extends PipeGuard<A>,
  C extends PipeGuard<B>,
  D extends PipeGuard<C>
>(
  ...guard: readonly [A, B, C, D]
): TypeGuardFn<GuardTypeInput<A>, GuardType<D>>;
declare function GuardPipe<
  A extends AnyTypeGuard,
  B extends PipeGuard<A>,
  C extends PipeGuard<B>,
  D extends PipeGuard<C>,
  E extends PipeGuard<D>
>(
  ...guard: readonly [A, B, C, D, E]
): TypeGuardFn<GuardTypeInput<A>, GuardType<E>>;
declare function GuardPipe<
  A extends AnyTypeGuard,
  B extends PipeGuard<A>,
  C extends PipeGuard<B>,
  D extends PipeGuard<C>,
  E extends PipeGuard<D>,
  F extends PipeGuard<E>
>(
  ...guard: readonly [A, B, C, D, E, F]
): TypeGuardFn<GuardTypeInput<A>, GuardType<F>>;
declare function GuardPipe<
  A extends AnyTypeGuard,
  B extends PipeGuard<A>,
  C extends PipeGuard<B>,
  D extends PipeGuard<C>,
  E extends PipeGuard<D>,
  F extends PipeGuard<E>,
  G extends PipeGuard<F>
>(
  ...guard: readonly [A, B, C, D, E, F, G]
): TypeGuardFn<GuardTypeInput<A>, GuardType<G>>;
declare function GuardPipe<
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
): TypeGuardFn<GuardTypeInput<A>, GuardType<H>>;

// a trick to avoid duplication of the function signature
type GuardPipe = typeof GuardPipe;

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
const guardPipe: GuardPipe = guardAll;

export { guardPipe };
export type { GuardPipe };
