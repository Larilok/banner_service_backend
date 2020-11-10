// The component interface declares common operations for both
// simple and complex objects of a composition.
interface IGraphic {
    move(x, y)
    draw()
}
// The leaf class represents end objects of a composition. A
// leaf object can't have any sub-objects. Usually, it's leaf
// objects that do the actual work, while composite objects only
// delegate to their sub-components.

class Dot implements IGraphic {
  x: number
  y: number
  constructor (x: number, y: number) {  }

  move(x, y) {
     this.x += x, this.y += y
  }

  draw() {
     // Draw a dot at X and Y.
  }
}

// All component classes can extend other components.
class Circle extends Dot {
  radius: number
  constructor (x: number, y: number, radius: number) { super(x,y) }

  draw() {
     // Draw a circle at X and Y with radius R.
  }
}

// The composite class represents complex components that may
// have children. Composite objects usually delegate the actual
// work to their children and then "sum up" the result.
class CompoundGraphic implements IGraphic {
    children: Array<IGraphic>

    // A composite object can add or remove other components
    // (both simple or complex) to or from its child list.
    add(child: IGraphic) {
       // Add a child to the array of children.
    }
    remove(child: IGraphic) {
       // Remove a child from the array of children.
    }
    
    move(x: number, y: number) {
       this.children.forEach((child:IGraphic) => {
         child.move(x, y)
       })
    }
    // A composite executes its primary logic in a particular
    // way. It traverses recursively through all its children,
    // collecting and summing up their results. Since the
    // composite's children pass these calls to their own
    // children and so forth, the whole object tree { traversed
    // as a result.
     draw() {
        // 1. For each child component:
        //     - Draw the component.
        //     - Update the bounding rectangle.
        // 2. Draw a dashed rectangle using the bounding
        // coordinates.
     }
  }


// The client code works with all the components via their base
// interface. This way the client code can support simple leaf
// components as well as complex composites.
class ImageEditor {
  all: CompoundGraphic

   load() {
      this.all = new CompoundGraphic()
      this.all.add(new Dot(1, 2))
      this.all.add(new Circle(5, 3, 10))
      // ...
   }
  // Combine selected components into one complex composite
  // component.
   groupSelected(components: Array<IGraphic>) {
      const group = new CompoundGraphic()
      components.forEach(component => {
          group.add(component)
          this.all.remove(component)
          this.all.add(group)
      // All components will be drawn.
          this.all.draw()
    })
   }
}