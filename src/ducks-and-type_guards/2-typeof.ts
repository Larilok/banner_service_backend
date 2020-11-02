//The typeof operator tests whether value belong to one of six basic types: "number", "string", "boolean", "object", "function" or "undefined"

function doSomething(x: number | string) {
  if (typeof x === 'string') {
      // console.log(x.subtr(1)) // Error
      console.log(x.substr(1)) // OK
  }
  x.substr(1)
}
