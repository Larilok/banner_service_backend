class Greeter {
  property = 'property'
  hello

  constructor (m) {
    this.hello = m
  }

  greet () {
    return 'Hello, ' + this.hello
  }
}
class Greeter1 {
  property = 'property'
  hello

  constructor (m) {
    this.hello = m
  }

  greet () {
    return 'Hello, ' + this.hello
  }
}

const a = new Greeter('world1')

const obj = Object.getPrototypeOf(Object.getPrototypeOf(1))
console.log(Object.getOwnPropertyDescriptor(obj, 'toString'))
Object.defineProperty(obj, 'hi', {
  value: function hi () {
    console.log(this.hello)
  },
  writable: true,
  enumerable: false,
  configurable: true
})
console.log(Object.getOwnPropertyDescriptor(obj, 'hi'))

// a.hi()

// let b = 1
// console.log(typeof (b))
// console.log(b)
// b.hi()

const b = new Greeter1('world1')

b.hi()
