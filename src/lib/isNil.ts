const isNil = (value: unknown): value is undefined | null =>
  value === null || typeof value === 'undefined';
export { isNil };
