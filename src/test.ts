// Example Setup
declare var foo:{bar?: {baz: string}}
function immediate (callback: ()=>void) {
  callback()
}

// Type Guard
if (foo.bar) {
  console.log(foo.bar.baz) // Okay
  functionDoingSomeStuff(() => {
    console.log(foo.bar.baz) // TS error: Object is possibly 'undefined'"
  })
}
