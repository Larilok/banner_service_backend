
const getInheritance = (instance:any, parents: any = []):any => {
  const parent:object = Object.getPrototypeOf(instance)
  if (!parent) return parents
  console.log(`---------\nParent is ${parent}`)
  console.log(`Parents constructor name is ${parent.constructor.name}`)
  console.log(`Parent constructor is ${parent.constructor}`)
  console.dir(`Parent have such properties: ${Object.getOwnPropertyNames(parent)}`)
  console.dir(`Parent have such keys: ${Object.keys(parent)}`)
  parents.push(parent.constructor.name)
  return getInheritance(parent, parents)
}

const showInheritance = (instance:any):any => {
  console.log(`---------\nObject is ${instance}`)
  console.log(`Object constructor name is ${instance.constructor.name}`)
  console.log(`Object constructor is ${instance.constructor}`)
  console.dir(`Object have such properties: ${Object.getOwnPropertyNames(instance)}`)
  console.dir(`Object have such keys: ${Object.keys(instance)}`)
  return getInheritance(instance)
}

// function deprecated(target: any, propertyName: string, descriptor: PropertyDescriptor) {
//   console.log('deprecated method')
//   console.log(target)
//   console.log(descriptor)
// }

// function deprecatedN(target: any, propertyName: string) {
//   console.log('deprecated property')
//   console.log(target)
//   console.log(propertyName)
// }

// function configurable(value: boolean) {
//   return function (
//     target: any,
//     propertyKey: string,
//     descriptor: PropertyDescriptor
//   ) {
//     descriptor.configurable = value
//   }
// }

// //(@required p)

// function required(target: Object,
//   propertyKey: string | symbol,
//   parameterIndex: number) {
//   console.log('------parameter required')
//   console.log(target.constructor.name)
//   console.log(propertyKey)
//   console.log(parameterIndex)
// }

// // interface PropertyDescriptor{
// //   configurable?: boolean; descriptor can be modified or the property can be deleted
// //   enumerable?: boolean; for(key in obj)
// //   value?: any; function or object or primitive
// //   writable?: boolean; value can be modified
// //   get? (): any;
// //   set? (v: any): void;
// // }

function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  console.log('second')
  return class extends constructor {
    newProperty = 'new property'
    hello = 'override'
  }
}

// function sealed(constructor: Function) {
//   console.log('sealed decorator')
//   Object.seal(constructor)
//   Object.seal(constructor.prototype)
// }

// @classDecorator
// @sealed
// class Greeter {
//   @deprecatedN
//   public property = 'property'
//   hello: string

//   constructor (m: string) {
//     this.hello = m
//   }

//   @deprecated
//   greeting () {
//     return 'Hello, ' + this.hello
//   }

//   greet (a:any, @required name:string) {
//     return 'Hello, ' + name
//   }

//   @configurable(false)
//   get getHello () {
//     return this.hello
//   }

//   @configurable(false)
//   get getProperty () {
//     return this.property
//   }
// }

// const a = new Greeter('world1')
// const b = new Greeter('world2')
// const c = new Greeter('world3')
const funcArrow = (a:any, b = 1) => { }
function func (a:any, b = 1) { }
console.log(showInheritance(func))
// console.log(funcArrow.toString())
