
```ts

// Duck typing
interface Plane {
  fly: true;
  takePasangers: true;
}
interface Bird {
  fly: true;
}
interface Duck {
  fly: true;
}

// Structural ( vs Nominal )
interface Point {
  x: number;
  y: number;
}
type Vector = { x: number; y: number; length: number };

let p: Point = { x: 123, y: 234 };
let v: Vector = { x: 123, y: 234, length: 123 };

// Covariance
// v = p; // Property 'length' is missing in type 'Point' but required in type 'Vector'.ts(2741)
p = v;

(p as Vector).length; // OK?

let x = p as Vector | Point;

// x.length // Error

// Type Narrowing
if ("length" in p) p; // Point & Record<"length", unknown>
if ("length" in p && typeof p.length === "string") p.length; // Point & Record<"length", string>
if ("length" in x) x.length;

// Contravariance

interface Renderer {
  drawVector: (dostarczaVector: Vector) => void;
//   drawPoint: (dostarczaPunkt: Point) => void; // Contravariant
  drawPoint(dostarczaPunkt: Point): void; // Bivariant!
}
const renderer = {} as Renderer;

const biorePunkt = (odbieramPunkt: Point) => {};
const bioreVector = (odbieramVector: Vector) => {};

renderer.drawVector = bioreVector;
renderer.drawVector = biorePunkt; // ingnoruje length

renderer.drawPoint = biorePunkt;
renderer.drawPoint = bioreVector; // ERROR: brakuje length!

```