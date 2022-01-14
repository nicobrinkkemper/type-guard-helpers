import type { TypeGuard } from './types';

/** Fixes the parameter and predicate for a generic guard so it may be used in type-safe manner. */
const fixGuard = <Param, Predicate extends Param>(
	guard: TypeGuard<Param, Predicate>
) => guard;

/** Fixes the generic parameter and the to-be-excluded value for a guard, so it may be used in type-safe manner.  */
const fixExclude = <Param, Predicate>(
	guard: TypeGuard<Param, Exclude<Param, Predicate>>
) => guard;

export { fixGuard, fixExclude };
