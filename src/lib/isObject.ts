const isObject = (val: unknown): val is Record<PropertyKey, unknown> =>
  typeof val === 'object';
export { isObject };
