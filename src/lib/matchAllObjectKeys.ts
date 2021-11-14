import { matchKeyInObject } from './matchKeyInObject';
import { negateGuard } from './negateGuard';

/**
 * Given a object, returns a Type Guard that takes an object and will check if the latter given object contains all the keys of the first given object.
 * @category Type Guard Creator
 */
const matchAllObjectKeys = <
	KeyedObject extends {
		readonly [k in keyof KeyedObject]: unknown;
	}
>(
	object: KeyedObject
) => {
	const keys = Object.keys(object);
	return (value: {
		readonly [k: PropertyKey]: unknown;
	}): value is {
		readonly [k in keyof KeyedObject]: unknown;
	} => {
		const negateGuardKeyOfValue = negateGuard(matchKeyInObject(value));
		return keys.findIndex(negateGuardKeyOfValue) === -1;
	};
};

export { matchAllObjectKeys };
