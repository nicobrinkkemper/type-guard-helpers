import { matchEither } from './matchEither';

const isNullable = matchEither(null, undefined);

export { isNullable };
