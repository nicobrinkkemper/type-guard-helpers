import type { AnyTypeGuard, GuardType } from './types';

/**
 * Given a Schema, returns a Type Guard for `Object.entries` results to be required.
 *
 * A required entry key must exist and pass the corresponding Type Guard in Schema.
 *
 * @category Type Guard Creator
 */
const matchExactSchemaEntry =
	<
		Schema extends {
			readonly [k: PropertyKey]: AnyTypeGuard;
		}
	>(
		schema: Schema
	) =>
	(
		entry: readonly [PropertyKey, unknown]
	): entry is readonly [keyof Schema, GuardType<Schema[keyof Schema]>] =>
		entry[0] in schema && schema[entry[0]](entry[1]);

export { matchExactSchemaEntry };
