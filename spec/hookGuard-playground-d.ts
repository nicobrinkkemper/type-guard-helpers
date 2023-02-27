import { expectType } from 'tsd';

import { hookGuard, isNull, logGuard, negateGuard } from '../index';

const stringOrNull = 'few' as string | null;

if (hookGuard(isNull)(stringOrNull)) {
  expectType<null>(stringOrNull);
}

const isNotNull = negateGuard(isNull);

if (isNotNull(stringOrNull)) {
  expectType<string>(stringOrNull);
}

// hooking to log
const before = console.log;
const after = console.log;
const hookLog = hookGuard(isNull, before, after);
if (hookLog(stringOrNull)) {
  expectType<null>(stringOrNull);
}

const negateHook = hookGuard(isNotNull);
if (isNotNull(stringOrNull)) {
  expectType<string>(stringOrNull);
}
if (hookGuard(isNull)(stringOrNull)) {
  expectType<null>(stringOrNull);
}
if (negateHook(stringOrNull)) {
  expectType<string>(stringOrNull);
}

const logHook = logGuard(
  isNull,
  ({ value, guard }) => console.info(`Calling:`, { guard, value }),
  ({ result }) => console.info(`Result:`, { result })
);
if (logHook(stringOrNull)) {
  expectType<null>(stringOrNull);
}

if (logGuard(isNotNull)(stringOrNull)) {
  expectType<string>(stringOrNull);
}
