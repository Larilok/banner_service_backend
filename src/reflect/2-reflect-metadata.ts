import 'reflect-metadata'

class ExampleModule {
  a: number
  b: string
  constructor (a:number, b?:string) {
    console.log('constructor')
    this.a = a
  }
  getA(a:number) {
    return this.a
  }
}

Reflect.defineMetadata('instance', new ExampleModule(5,'a'), ExampleModule)
Reflect.defineMetadata('instance2', new ExampleModule(5,'a'), ExampleModule)

console.log(Reflect.hasOwnMetadata('instance', ExampleModule))

console.log(Reflect.getOwnMetadata('instance', ExampleModule))
