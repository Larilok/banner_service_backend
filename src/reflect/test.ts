import 'reflect-metadata'

function logType(target: any, key: string) {
  const t = Reflect.getMetadata('design:type', target, key)
  console.log(`${key} type: ${t.name}`)
}

function logParamTypes(target: any, key: string) {
  const types = Reflect.getMetadata('design:paramtypes', target, key)
  const s = types.map((a:any) => a.name).join()
  console.log(`${key} param types: ${s}`)
} 

function logReturnType(target: any, key: string) {
  const t = Reflect.getMetadata('design:returntype', target, key);
  console.log(`${key} return type: ${t.name}`)
} 

function validate<T>(
  target: any,
  propertyKey: string,
  descriptor: TypedPropertyDescriptor<T>
) {
  let set = descriptor.set;
  descriptor.set = function (value: T) {
    let type = Reflect.getMetadata("design:type", target, propertyKey);
    if (!(value instanceof type)) {
      throw new TypeError("Invalid type.");
    }
    set.call(target, value);
  };
}

class Greeter {
  @logType
  public property = 'property'

  // @logReturnType
  greeting () {
    return 'Hello, ' + this.hello
  }

  hello: string

  constructor (m: string) {
    this.hello = m
  }

  @logParamTypes
  @logType
  greet (a:any, name:string) {
    return 'Hello, ' + name
  }


  get getHello () {
    return this.hello
  }


  get getProperty () {
    return this.property
  }
}

console.log(Reflect.getOwnMetadataKeys(Greeter))

console.log(Reflect.getOwnMetadata('design:paramtypes', Greeter))