import type { TypeGuard } from './types';

const matchEither =
  <T, T2>(subjectA: T, subjectB: T2): TypeGuard<unknown, T | T2> =>
  (value): value is never =>
    value === subjectA || value === subjectB;

export { matchEither };
