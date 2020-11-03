// Reflect is a built-in object that provides methods for interceptable JavaScript operations.

function myFunction () {
  console.log(this.x)
}

myFunction()

myFunction.apply({ x: 10 })

Reflect.apply(myFunction, { x: 10 }, [])
