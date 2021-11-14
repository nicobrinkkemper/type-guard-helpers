import type { MatchType } from './types';

/**
 * Given any argument, returns a Type Guard that checks if the given value is strictly equal to the given argument.
 * @category Type Guard Creator
 */
const matchType =
	<
		Type extends
			| 'boolean'
			| 'function'
			| 'number'
			| 'bigint'
			| 'object'
			| 'string'
			| 'symbol'
			| 'undefined'
	>(
		type: Type
	) =>
	(value: unknown): value is MatchType<Type> =>
		typeof value === type;

export { matchType };
