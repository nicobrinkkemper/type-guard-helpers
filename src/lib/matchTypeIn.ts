import type { MatchType } from './types';

/**
 * Given one or more type names as array, returns a Type Guard that checks if the type of the given value matches at least one of the given type names.
 *
 * @category Type Guard Creator
 */
const matchTypeIn =
	<
		Types extends readonly (
			| 'boolean'
			| 'function'
			| 'number'
			| 'bigint'
			| 'object'
			| 'string'
			| 'symbol'
			| 'undefined'
		)[]
	>(
		types: Types
	) =>
	(value: unknown): value is MatchType<Types[number]> =>
		types.indexOf(typeof value) !== -1;

export { matchTypeIn };
