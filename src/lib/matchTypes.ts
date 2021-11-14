import { matchTypeIn } from './matchTypeIn';

/**
 * Given one or more type names as arguments, returns a Type Guard that will check if the type of the given value matches at least one of the type names.
 *
 * @category Type Guard Creator
 */
const matchTypes = <
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
	...types: Types
) => matchTypeIn(types);

export { matchTypes };
