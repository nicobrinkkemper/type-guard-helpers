const isNonNullable = <Value, ExcludedResult = null | undefined>(
	value: ExcludedResult extends Value ? ExcludedResult : Value
): value is ExcludedResult extends Value ? never : Value => value != null;

export { isNonNullable };
