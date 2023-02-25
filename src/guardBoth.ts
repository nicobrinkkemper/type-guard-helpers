import type {
  AnyTypeGuard,
  Combine,
  GuardType,
  GuardTypeInput,
  TypeGuardFn
} from './types';

/**
 * Given two Type Guards as arguments, returns a Type Guard that checks if the given value matches both given Type Guards.
 * Same as {@linkcode guardAll}, but accepts multiple arguments instead of a single array
 * @example
 * ```ts
 * const isFooBar = guardBoth(
 *     matchType('string'),
 *     matches('1','2'),
 * );
 *
 * const test = {} as unknown;
 * if(isFooBar(test)){
 *     test; // 'foobar'
 * }
 * ```
 * @category Type Guard Composer
 *  */
const guardBoth =
  <GuardLeft extends AnyTypeGuard, GuardRight extends AnyTypeGuard>(
    guardLeft: GuardLeft,
    guardRight: GuardRight
  ): TypeGuardFn<
    Combine<GuardTypeInput<GuardLeft>, GuardTypeInput<GuardRight>>,
    Combine<
      Combine<GuardTypeInput<GuardLeft>, GuardTypeInput<GuardRight>>,
      Combine<GuardType<GuardLeft>, GuardType<GuardRight>>
    >
  > =>
  (value): value is never =>
    guardLeft(value) && guardRight(value);

export { guardBoth };
