# Union + Literal -> Discriminated Union

```ts

interface Banana {
  id: string;
  type: "banana";
  color: "yellow";
  monkey?: string;
}

interface Apple {
  id: string;
  type: "apple";
  color: "red";
  donkey?: string;
}

// 'banana' extends string

const banana: Banana = { type: "banana", color: "yellow", id: "123" };
let fruit: Banana | Apple = { type: "apple", color: "red" } as Banana | Apple;

fruit.id;

// const impossibleFruit: Banana & Apple = { type: "????" };

if (fruit.type == "apple") {
  fruit.color === "red";
}

if (fruit.color == "yellow") {
  fruit.monkey;
}

```