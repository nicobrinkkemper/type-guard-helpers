import { isNonNullable } from './isNonNullable';
import { isNull } from './isNull';
import { isNullable } from './isNullable';
import { isUndefined } from './isUndefined';
import { negateIterableGuard } from './negateGuard';
import type {
  AnyIterableTypeGuard,
  Combine,
  GuardType,
  GuardTypeInput
} from './types';

type FilterGuard<
  Arr extends readonly unknown[],
  Filter,
  Result extends readonly unknown[] = readonly []
> = Arr extends readonly []
  ? Result
  : Arr extends readonly [infer Head, ...infer Tail]
  ? FilterGuard<
      Tail,
      Filter,
      Head extends Filter ? readonly [...Result, Combine<Filter, Head>] : Result
    >
  : readonly Filter[];

type FilterGuardFn<Guard extends AnyIterableTypeGuard> = <
  Arr extends GuardTypeInput<Guard>[]
>(
  arr: Readonly<[...Arr]>
) => FilterGuard<[...Arr], GuardType<Guard>>;

type ExcludeGuardFn<Guard extends AnyIterableTypeGuard> = <
  Arr extends GuardTypeInput<Guard>[]
>(
  arr: Readonly<[...Arr]>
) => FilterGuard<[...Arr], Exclude<Arr[number], GuardType<Guard>>>;

const filterGuard =
  <Guard extends AnyIterableTypeGuard>(guard: Guard): FilterGuardFn<Guard> =>
  (arr) =>
    arr.filter(guard) as never;

const excludeGuard =
  <Guard extends AnyIterableTypeGuard>(guard: Guard): ExcludeGuardFn<Guard> =>
  (arr) =>
    arr.filter(negateIterableGuard(guard) as never) as never;

const filterNonNullable = filterGuard(isNonNullable) as typeof excludeNullable;
const excludeNullable = excludeGuard(isNullable);
const excludeUndefined = excludeGuard(isUndefined);
const excludeNull = excludeGuard(isNull);

export {
  filterGuard,
  filterNonNullable,
  excludeGuard,
  excludeNullable,
  excludeUndefined,
  excludeNull
};
export type { FilterGuard };
