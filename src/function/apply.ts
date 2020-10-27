/*
  func.apply(thisArg, [ argsArray])
  thisArg - the value of 'this'
  argsArray - an array-like object
*/
const array = ['a', 'b']
const elements = [0, 1, 2]
array.push.apply(array, elements)
let array2 = ['a', 'b']

array2 = array2.concat(elements)
console.log(array2)
