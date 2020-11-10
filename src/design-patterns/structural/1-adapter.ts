// Say you have two classes with compatible interfaces:
// RoundHole and RoundPeg.
class RoundHole {
    constructor (radius: number) {  }

    getRadius() {
        // Return the radius of the hole.
    }

    fits(peg: RoundPeg) {
        return this.getRadius() >= peg.getRadius()
    }
}

class RoundPeg {
  constructor (radius: number) {  }

  getRadius() {
    // Return the radius of the hole.
  }
}

// But there's an incompatible class: SquarePeg.
class SquarePeg {
  constructor (width:number) {  } 

  getWidth(): number {
      // Return the square peg width.
      return NaN
  }
}

// An adapter class lets you fit square pegs into round holes.
// It extends the RoundPeg class to let the adapter objects act
// as round pegs.
class SquarePegAdapter {
  // In reality, the adapter contains an instance of the
  // SquarePeg class.
  private peg: SquarePeg
  
  constructor (peg: SquarePeg) {
    this.peg = peg
  } 

  getRadius() {
      // The adapter pretends that it's a round peg with a
      // radius that could fit the square peg that the adapter
      // actually wraps.
    return this.peg.getWidth() * Math.sqrt(2) / 2
  }
}

// Somewhere in client code.
let hole = new RoundHole(5)
let roundPeg = new RoundPeg(5)
hole.fits(roundPeg) // true

let smallSqPeg = new SquarePeg(5)
let largeSqPeg = new SquarePeg(10)
hole.fits(smallSqPeg) // this won't compile (incompatible types)

let smallSquarePegAdapter = new SquarePegAdapter(smallSqPeg)
let largeSquarePegAdapter = new SquarePegAdapter(largeSqPeg)
hole.fits(smallSquarePegAdapter) // true
hole.fits(largeSquarePegAdapter) // false