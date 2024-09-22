export interface Playlist {
  id: string;
  name: string;
  public: boolean;
  description: string;
}

type Box = { value: any };
// type stringBox = { value: string };
// type numberBox = { value: number };
// type stringArrayBox = { value: Array<string> };

const typeForgettingBox: Box = { value: "pączki" };

const suprise = typeForgettingBox.value; // any

type TypedBox<T> = { value: T };

const memoryBox: TypedBox<string> = { value: "123" };
memoryBox.value.search("123");

const inception: TypedBox<TypedBox<string>> = { value: { value: "DIcaprio" } };

let randomBox = {} as TypedBox<string> | TypedBox<number>;
if (typeof randomBox.value === "string") {
  randomBox.value; // string
}

// Useless generics
declare function parse<T>(text: string): T;
declare function seralize<T>(obj: T): string;

// parse() as T
// seralize(any):string

// Useful Generics = min 2T
function identity<T>(item: T): T {
  return item;
}
identity("123").search;
identity(123).toExponential;

// Generics + Type Inference - function takeFirst<T>(arr: Array<T>): T

const arr1: number[] = [1, 2, 3];
const arr2 = ["a", "b" /*  123 - error */]; // string[]
const arr3: Array<string> = ["a", "b" /*  123 - error */];

function takeFirst<T>(arr: Array<T>) {
  return arr[0];
}

const res1 = takeFirst<string>(["123"]); // string
// const res2 = takeFirst() // unknown[]
// const res2 = takeFirst([]) // never[]
const res2 = takeFirst([1, 2, 3, 4]);
const res3: "banana" = takeFirst(["banana", "banana", "banana"]);


// Generic class / interface

interface Collection{
  add(x: ?): void
  get() : ? ??
}

class Queue implements Collection{} // FIFO
class Stack implements Collection{} // FILO


// // end
// [].push(el); 
// [].pop();

// // start
// [].unshift(el) 
// [].shift();