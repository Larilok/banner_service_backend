/*
  The call() method calls a function with a given this value and arguments provided individually.
*/
function greet() {
  const reply = [this.animal, 'typically sleep between', this.sleepDuration].join(' ')
  console.log(reply)
}

const obj = {
  animal: 'cats', sleepDuration: '12 and 16 hours'
}

greet.call(obj)
