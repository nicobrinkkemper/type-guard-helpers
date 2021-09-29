const isArray = Array.isArray as (
  value: unknown
) => value is readonly unknown[];
export { isArray };
