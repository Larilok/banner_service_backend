// type obj = {
//   a: number
// }

// class List<T> {
//   array: T[]

//   constructor () {
//     this.array = []
//   }

//   add (a:T) {
//     this.array.push(a)
//   }
// }
// const a = new List<number>()
// const b = new List<string>()
// const objI = new List<obj>()

// a.add(5)
// b.add('')
// objI.add({ a: 5 })

type num<T> = T extends number ? number: string

function name<T, K extends num<T>> (param:K) {
  return param
}

const a = name(5)
