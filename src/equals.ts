/*
double equals (==) will perform a type conversion when comparing two things,
 and will handle NaN, -0, and +0 specially to conform to IEEE 754 (so NaN != NaN, and -0 == +0);

triple equals (===) will do the same comparison as double equals (including the special handling for NaN, -0, and +0)
 but without type conversion; if the types differ, false is returned.
*/

console.log(0 == 0) // true
console.log(0 === 0) // true

console.log(+0 == -0) // true
console.log(+0 === -0) // true

console.log(+0 == 0) // true
console.log(+0 === 0) // true

console.log(-0 == 0) // true
console.log(-0 === 0) // true

console.log(0 == false) // true
console.log(0 === false) // false

console.log('' == false) // true
console.log('' === false) // false

console.log('' == 0) // true
console.log('' === 0) // false

console.log('33' == 33) // true
console.log('33' === 33) // false

console.log('[1,2]' == '1, 2') // true
console.log('[1,2]' === '1, 2') // false

console.log(new String('foo') == 'foo') // true
console.log(new String('foo') === 'foo') // false

console.log(null == undefined) // true
console.log(null === undefined) // false
