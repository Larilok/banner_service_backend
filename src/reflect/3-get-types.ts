import 'reflect-metadata'

class Service {}

function myFirstDecorator(constructor: Function) {
  console.log(constructor)
}

@myFirstDecorator
class Module {
  service: service
  constructor(service: Service, a:number) {}
}
console.log(Reflect.getMetadataKeys(Module))

console.log(Reflect.getOwnMetadata('design:paramtypes', Module)) // array of Service and Number
