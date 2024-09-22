export interface Playlist {
  id: string;
  name: string;
  public: boolean;
  description: string;
}

const arr1: number[] = [1, 2, 3];
// arr.push('23') // error
const arr2: string[] = ["a", "b" /*  123 - error */];
const arr3: Array<string> = ["a", "b" /*  123 - error */];

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
