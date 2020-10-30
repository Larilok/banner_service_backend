interface IFlyingBird {
  fly(): void
}

interface ISwimmingBird {
  swim(): void
}

class Duck implements IFlyingBird {
  quack() {
    console.log('I can quack')
  }
  fly() {
    console.log('I can fly')
  }
}
class Penguin implements ISwimmingBird {
  swim() {
    console.log('I can swim')
  }
}

function makeFlyingBirdFly(bird: IFlyingBird){
  bird.fly()
}

function makeSwimmingBirdSwim(bird: ISwimmingBird){
  bird.swim()
}

const duck = new Duck()
const penguin = new Penguin()

makeFlyingBirdFly(duck)
makeSwimmingBirdSwim(penguin)
