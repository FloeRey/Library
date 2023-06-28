export function quicksort<T = unknown>(arr: T[]): T[] {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left: typeof arr = [];
  const right: typeof arr = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quicksort(left), pivot, ...quicksort(right)];
}
