import type { AnyTypeGuard, GuardType } from './types';

/**
 * Given a Schema, returns a Type Guard for `Object.entries` results to be optional.
 *
 * A optional entry is valid if the value passes the Type Guard for the key or if the key does not exist on the Schema object.
 *
 * @category Type Guard Creator
 */
const matchSchemaEntry =
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
		!(entry[0] in schema) || schema[entry[0]](entry[1]);

export { matchSchemaEntry };
