const isFunction = (
  value: unknown
): value is (...args: readonly unknown[]) => unknown =>
  typeof value === 'function';
export { isFunction };
