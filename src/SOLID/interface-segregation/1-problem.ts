class Bird {
  swim () {
    console.log('I can quack')
  }

  fly () {
    console.log('I can fly')
  }
}

class DuckA extends Bird {

}

class PenguinA extends Bird {

}

const duckA = new DuckA()
const penguinA = new PenguinA()

penguinA.fly()
