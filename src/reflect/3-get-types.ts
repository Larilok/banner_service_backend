import 'reflect-metadata'

class Service {}

function myFirstDecorator(constructor: Function) {
  console.log(constructor)
}

@myFirstDecorator
class Module {
  service: Service
  constructor(service: Service, a:number) {}
}

Reflect.defineMetadata('instance', new Module(new Service(), 5), Module)

console.log(Reflect.getMetadataKeys(Module))

console.log(Reflect.getOwnMetadata('design:paramtypes', Module)) // array of Service and Number
console.log(Reflect.getOwnMetadata('instance', Module)) // array of Service and Number
