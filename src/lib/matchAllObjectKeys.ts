import { matchKeyInObject } from './matchKeyInObject';
import { negateGuard } from './negateGuard';

/**
 * Given a object, returns a Type Guard that takes an object and checks if the latter given object contains all the keys of the first given object.
 * @category Type Guard Creator
 */
const matchAllObjectKeys =
	<
		KeyedObject extends {
			readonly [k in keyof KeyedObject]: unknown;
		}
	>(
		object: KeyedObject
	) =>
	(value: {
		readonly [k: PropertyKey]: unknown;
	}): value is {
		readonly [k in keyof KeyedObject]: unknown;
	} =>
		Object.keys(object).findIndex(negateGuard(matchKeyInObject(value))) === -1;

export { matchAllObjectKeys };
