import { isNullable } from './isNullable';
import { negateGuard } from './negateGuard';

const isNonNullable = negateGuard(isNullable);

export { isNonNullable };
