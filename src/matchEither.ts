import type { AnyPrimitive, TypeGuard } from './types';

type MatchEitherFn<Input, A extends Input, B extends Input> = TypeGuard<
  Input,
  A | B
>;

type MatchEither<Input = AnyPrimitive> = <A extends Input, B extends Input>(
  subjectA: A,
  subjectB: B
) => MatchEitherFn<Input, A, B>;

const matchEither: MatchEither =
  (subjectA, subjectB) =>
  (value): value is never =>
    value === subjectA || value === subjectB;

export { matchEither };
export type { MatchEitherFn, MatchEither };
