
```js


// main.ts
interface Placki {
  main: 1;
}

// plugin.ts
interface Placki {
  //   main: string; // Error.
  plugin: 2;
}

const obj: Placki = {
  main: 1,
  plugin: 2,
};

```