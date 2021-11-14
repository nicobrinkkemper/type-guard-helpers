import { matchKeyInObject } from './matchKeyInObject';
import { negateGuard } from './negateGuard';

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
