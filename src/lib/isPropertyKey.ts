const isPropertyKey = (value: unknown): value is PropertyKey =>
  typeof value === 'string' ||
  typeof value === 'number' ||
  typeof value === 'symbol';

export { isPropertyKey };
