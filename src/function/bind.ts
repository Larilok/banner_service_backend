/*
The bind() method creates a new function that, when called,
 has its this keyword set to the provided value,
 with a given sequence of arguments preceding any provided when the new function is called.
*/

function mul (a: number, b: number) {
  return a * b
}
const mulArrow = (a: number, b: number) =>  a * b * this.arg

const double = mul.bind(null, 2)
const doubleArrow = mulArrow.bind({ arg: 3}, 2)

console.log(double(3))
console.log(doubleArrow(3))

// const fArrow = () => console.log(this.name)

function f() {
  console.log(this.name);
}

const ff = f.bind( {name: "John"} )
ff()
