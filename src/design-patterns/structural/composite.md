Composite
----------

Composite is a structural design pattern that allows composing objects into a tree-like structure and work with the it as if it was a singular object.

- Composite became a pretty popular solution for the most problems that require building a tree structure. Composite’s great feature is the ability to run methods recursively over the whole tree structure and sum up the results.

### Usage
Using the Composite pattern makes sense only when the core model of your app can be represented as a tree.

- Use the Composite pattern when you have to implement a tree-like object structure.

- Use the pattern when you want the client code to treat both simple and complex elements uniformly.
  - All elements defined by the Composite pattern share a common interface.

### Cons

- It might be difficult to provide a common interface for classes whose functionality differs too much. In certain scenarios, you’d need to overgeneralize the component interface, making it harder to comprehend.
----

Typescript

It’s often used to represent hierarchies of user interface components or the code that works with graphs.
