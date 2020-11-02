import { A, B } from './classes'

function doStuff(q: A | B) {
  // is it A or B?
  // console.log(q.y)
}

let obj1: A = new A(3)
let obj2: B = new B(3, 'abc')

console.log(obj1) // { x: 3 }

obj1 = obj2
console.log(obj1) // { x: 3, y: 'abc' }
// obj1.y
console.log(obj1 instanceof A) // false
console.log(obj1 instanceof B) // true

doStuff(obj1)
