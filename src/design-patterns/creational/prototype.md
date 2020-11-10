Prototype
----
Prototype is a creational design pattern that lets you copy existing objects without making your code dependent on their classes.

- Use the Prototype pattern when your code shouldn’t depend on the concrete classes of objects that you need to copy.

- Use the pattern when you want to reduce the number of subclasses that only differ in the way they initialize their respective objects. Somebody could have created these subclasses to be able to create objects with a specific configuration.
-----

All prototype classes should have a common interface that makes it possible to copy objects even if their concrete classes are unknown. Prototype objects can produce full copies since objects of the same class can access each other’s private fields.

The Prototype pattern is available in TypeScript out of the box with a Cloneable interface.
