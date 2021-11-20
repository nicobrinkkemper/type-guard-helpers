# Match a single value

These functions all use `subject === value` under the hood.

```ts
const isNull = match(null);
const isFoo = matchString('foo');
const isSuccess = matchNumber(200);
const isTrue = matchBoolean(true);

if (isNull(test)) {
	test; // null
}
if (isFoo(test)) {
	test; // foo
}
if (isSuccess(test)) {
	test; // 200
}
if (isTrue(test)) {
	test; // true
}
```

```ts
if (isNull(test)) {
	test; // null
}
```

## Match to one of multiple values

These functions all use `subject.indexOf(value) !== -1` under the hood.

```ts
const isNil = matchEitherIn([null, undefined]);
const isFooBar = matchStringIn(['foo', 'bar'] as const);
const isStatus = matchNumberIn([200, 404] as const);

if (isNil(test)) {
	test; // null | undefined
}
if (isFooBar(test)) {
	test; // "foo" | "bar"
}
if (isStatus(test)) {
	test; // 200 | 404
}
```

For convenience, the below functions will use the spread operator to map the arguments to the the `matchEitherIn` function. Thus, these would be drop in replacements for the above guards.

```ts
const isNil = matchEither(null, undefined);
const isFooBar = matchStrings('foo', 'bar');
const isStatus = matchNumbers(200, 404);
```

This doesn't need the `as const` statement to infer the literals.

## Match object to a schema

A schema is an object like `{key:guard}`.

```ts
const fooBarSchema = {
	foo: matchString('foo'),
	bar: matchString('bar'),
} as const;
const isFooBar = matchSchema(fooBarSchema);
const isExactFooBar = matchExactSchema(fooBarSchema);
const isPartialFooBar = matchPartialSchema(fooBarSchema);

if (isFooBar(test)) {
	test; // { readonly foo: "foo"; readonly bar: "bar"; }
}
if (isExactFooBar(test)) {
	test; // { readonly foo: "foo"; readonly bar: "bar"; }
}
if (isPartialFooBar(test)) {
	test; // { readonly foo?: "foo" | undefined; readonly bar?: "bar" | undefined; }
}
```

The difference between `matchSchema` and `matchExactSchema` is that the latter will also check that there are no unknown keys in the value. Since unknown sources of data are likely to change, it might not be wise to fail when encountering unknown keys.

## Match arrays

```ts
const isStringArray = guardArray(isTypeString);
const isRGB = matchArray(['red', 'green', 'blue']);
if (isStringArray(test)) {
	test; // readonly string[]
}
if (isRGB(test)) {
	test; // readonly ['red', 'green', 'blue']
}
```
