/*
The bind() method creates a new function that, when called,
 has its this keyword set to the provided value,
 with a given sequence of arguments preceding any provided when the new function is called.
*/

function mul (a, b) {
  console.log(this)
  return a * b
}
const mulArrow = (a, b) => { console.log(this); return a * b * this.arg }

const double = mul.bind({ arg: 3 }, 2)
const doubleArrow = mulArrow.bind({ arg: 3 }, 2)

console.log(double(3))
console.log(doubleArrow(3))
