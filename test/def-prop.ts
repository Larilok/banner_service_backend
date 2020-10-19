
class Greeter {
  property = 'property'
  hello: string

  constructor (m: string) {
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
  value: function gret () {
    console.log(this.hello)
  },
  writable: true,
  enumerable: false,
  configurable: true
})
console.log(Object.getOwnPropertyDescriptor(obj, 'hi'))

a.hi()
