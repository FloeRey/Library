import test from 'ava';
import { fibonacci } from '../src/fibonacci';

test('fibonacci(0) should return 0', (t) => {
  t.is(fibonacci(0), 0);
});

test('fibonacci(1) should return 1', (t) => {
  t.is(fibonacci(1), 1);
});

test('fibonacci(5) should return 5', (t) => {
  t.is(fibonacci(5), 5);
});

test('fibonacci(10) should return 55', (t) => {
  t.is(fibonacci(10), 55);
});

test('fibonacci(20) should return 6765', (t) => {
  t.is(fibonacci(20), 6765);
});

test('fibonacci(-1) should throw an error', (t) => {
  t.throws(() => fibonacci(-1));
});

test('fibonacci(1.5) should throw an error', (t) => {
  t.throws(() => fibonacci(1.5));
});

test('fibonacci("foo") should throw an error', (t) => {
  t.throws(() => fibonacci('foo' as any));
});

const testCases = [
  { input: 0, expectedOutput: 0 },
  { input: 1, expectedOutput: 1 },
  { input: 5, expectedOutput: 5 },
  { input: 10, expectedOutput: 55 },
  { input: 20, expectedOutput: 6765 },
  { input: -1, expectedError: 'Input must be a non-negative integer' },
  { input: 1.5, expectedError: 'Input must be a non-negative integer' },
  { input: 'foo' as any, expectedError: 'Input must be a non-negative integer' },
];

for (const testCase of testCases) {
  test(`fibonacci(${testCase.input}) should produce the correct output.`, (t) => {
    t.plan(1);

    if (testCase.expectedError) {
      t.throws(() => fibonacci(testCase.input), { message: testCase.expectedError });
    } else {
      t.is(fibonacci(testCase.input), testCase.expectedOutput ?? 0);
    }
  });
}
