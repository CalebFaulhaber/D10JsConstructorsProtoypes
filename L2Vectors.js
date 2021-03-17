class Vector {
    constructor(x,y,z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
    plus(v) {
        return new Vector(this.x += v.x, this.y += v.y, this.z += v.y);
    } 
    minus(v) {
        return new Vector(this.x -= v.x, this.y -= v.y, this.z += v.z);
    }
}; 

// Vector.prototype.Magnitude = function() {
//     return Math.sqrt(this.x * this.x + this.y * this.y);
// }
// Vector.prototype.Plus = function(v) {
//         return new Vector(this.x += v.x, this.y += v.y, this.z += v.y);
// }
// Vector.prototype.Minus = function(v) {
//     return new Vector(this.x -= v.x, this.y -= v.y, this.z += v.z);
// }

let v1 = new Vector(4,4,0);
let v2 = new Vector(1,2,2);

console.log(v1)
console.log(v2.plus(v2))
console.log(v2.minus(v1))
console.log(v1.magnitude())






// [Lab] Vectors

// Vectors are a representation of movement in space. That is 2 to 3 distances in x, y and/or z axes. Vectors are very useful when working with graphics, videos and any applications that requires drawing in space.


// The figure below shows an example of a Vector.


// The grey lines ax, ay and az represent the movement distance respectively in the axes x, y and z.
// The black line a represents the length and total movement of ax, ay and az added together.
// Our Vector constructor should store values for ax, ay and az. However, I would suggest that you simply use the names, x, y & z, instead.


// Your task is to build a Vector constructor.

// It should support the coordinates: x, y and z.
// It should have 3 prototype methods: plus, minus, magnitude.
// The methods, plus & minus, should return a new Vector (not a plain object or an existing vector) with the correct distances.
// Create a constructor/prototype version and class based version.

// Examples of Vector usage:

// let v1 = new Vector(4,4,0);
// let v2 = new Vector(1,2,2);


// v1.plus(v2) // returns Vector {x: 5, y: 6, z: 2}
// v2.plus(v1) // returns Vector {x: 5, y: 6, z: 2}


// v1.minus(v2) // returns Vector {x: 3, y: 2, z: -2}
// v2.minus(v1) // returns Vector {x: -3, y: -2, z: 2}


// v1.magnitude() // returns 5.656854249492381
// v2.magnitude() // returns 3