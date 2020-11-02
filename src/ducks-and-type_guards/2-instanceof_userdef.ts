import { A, B } from './classes'

function isB(arg: any): arg is B {
  return arg.y !== undefined;
}

function doStuffInstanceU(q: A | B) {
  if (isB(q)) {
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

doStuffInstanceU(obj1)
