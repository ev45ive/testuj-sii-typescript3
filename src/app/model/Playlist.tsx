export interface Playlist {
  id: string;
  name: string;
  public: boolean;
  description: string;
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
p = v;
// v = p; // Property 'length' is missing in type 'Point' but required in type 'Vector'.ts(2741)


// Duck typing
interface Plane{ fly: true, takePasangers:true }
interface Bird{ fly: true }
interface Duck{ fly: true }