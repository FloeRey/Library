import test from 'ava';
import { quicksort } from '../src/quicksort';

test('quicksort([]) should return []', (t) => {
  t.deepEqual(quicksort([]), []);
});

test('quicksort([1]) should return [1]', (t) => {
  t.deepEqual(quicksort([1]), [1]);
});

test('quicksort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]) should return [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]', (t) => {
  t.deepEqual(quicksort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]), [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
});

test('quicksort([9, 8, 7, 6, 5, 4, 3, 2, 1]) should return [1, 2, 3, 4, 5, 6, 7, 8, 9]', (t) => {
  t.deepEqual(quicksort([9, 8, 7, 6, 5, 4, 3, 2, 1]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test('quicksort([1, 2, 3, 4, 5, 6, 7, 8, 9]) should return [1, 2, 3, 4, 5, 6, 7, 8, 9]', (t) => {
  t.deepEqual(quicksort([1, 2, 3, 4, 5, 6, 7, 8, 9]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test('quicksort(["foo", "bar", "baz"]) should return ["bar", "baz", "foo"]', (t) => {
  t.deepEqual(quicksort(["foo", "bar", "baz"]), ["bar", "baz", "foo"]);
});

test('quicksort([1, 2, 3, "foo", 4, 5]) should return [1, 2, 3, "foo", 4, 5]', (t) => {
  t.deepEqual(quicksort([1, 2, 3, "foo", 4, 5]), [1, 2, 3, "foo", 4, 5]);
});
