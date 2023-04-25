export interface Iterator<T> {
  next(): { value: T, done: boolean };
}