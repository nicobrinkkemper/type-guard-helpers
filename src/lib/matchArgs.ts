import { matchIn } from './matchIn';

/**
 * Given a array, returns a Type Guard that checks if the given value is a index of the given array.
 * @category  Type Guard Creator
 */
const matchArgs = <AnyArray extends readonly unknown[]>(...args: AnyArray) =>
	matchIn(args);

export { matchArgs };
