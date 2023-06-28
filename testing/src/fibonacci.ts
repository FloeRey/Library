export function fibonacci(n: number): number {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error('Input must be a non-negative integer');
  }
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
