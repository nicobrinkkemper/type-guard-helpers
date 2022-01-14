const isNullable = <Value, Result extends null | undefined>(
	value: Result extends Value ? Value : Result
): value is Result extends Value ? Result : never => !(value != null);

export { isNullable };
