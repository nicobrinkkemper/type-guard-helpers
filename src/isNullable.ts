import type { MatchEitherFn } from './matchEither';
import { matchEither } from './matchEither';

const isNullable = matchEither(null, undefined) as MatchEitherFn<
  unknown,
  null,
  undefined
>;

export { isNullable };
