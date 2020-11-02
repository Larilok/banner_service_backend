import { A, B } from './classes'

// The instanceof operator tests whether the prototype property of a constructor appears anywhere in the prototypes chain of an object.

function doStuffInstance(q: A | B) {
  if (q instanceof B) {
    console.log(q.y)
  }
  else {
    console.log(q.x)
  }
}

let obj1: A = new A(3)
let obj2: B = new B(3, 'abc')

console.log(obj1) // { x: 3 }

obj1 = obj2
console.log(obj1) // { x: 3, y: 'abc' }
console.log(obj1 instanceof A) // false
console.log(obj1 instanceof B) // true

doStuffInstance(obj1)
