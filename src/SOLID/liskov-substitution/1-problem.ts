// interface IBird {
//   fly(): void
// }

// interface IDuck extends IBird {
//   quack(): void
// }
// interface IPenguin extends IBird {
//   swim(): void
// }

// class DuckA implements IDuck {
//   quack() {
//     console.log('I can quack')
//   }
//   fly() {
//     console.log('I can fly')
//   }
// }
// class PenguinA implements IPenguin {
//   swim() {
//     console.log('I can swim')
//   }
//   fly() {
//     throw new Error('Cannot fly')
//   }
// }

// function makeBirdFlyA(bird: IBird){
//   bird.fly()
// }

// const duckA = new DuckA()
// const penguinA = new PenguinA()

// makeBirdFlyA(duckA)
// makeBirdFlyA(penguinA)
