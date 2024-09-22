```ts

// Generic class / interface

interface Collection<T> {
  add(item: T): void;
  get(): T;
  // get(): T | undefined;
}

// FIFO
class Queue<T> implements Collection<T> {
  private items: Array<T> = [];

  add(item: T) {
    this.items.push(item);
  }
  get(): T {
    const item = this.items.shift();
    if (!item) throw new Error("Empty queue!");
    return item;
  }
}

// FILO
class Stack<T> implements Collection<T> {
  private items: Array<T> = [];
  add(item: T): void {
    this.items.push();
  }
  get(): T {
    const item = this.items.pop();
    if (!item) throw new Error("Empty stack!");
    return item;
  }
}

// // end
// [].push(el);
// [].pop();

// // start
// [].unshift(el)
// [].shift();

```