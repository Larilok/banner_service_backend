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
