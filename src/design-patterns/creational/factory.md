# Factory

Factory is an ambiguous term that stands for a function, method or class that supposed to be producing something. Most commonly, factories produce objects. But they may also produce files, records in databases, etc.

# Simple Factory

The Simple factory pattern  describes a class that has one creation method with a large conditional that based on method parameters chooses which product class to instantiate and then return.

# Factory method

The Factory Method  is a creational design pattern that provides an interface for creating objects but allows subclasses to alter the type of an object that will be created.

If you have a creation method in base class and subclasses that extend it, you might be looking at the factory method.

- Use the Factory Method when you don’t know beforehand the exact types and dependencies of the objects your code should work with.

-  Use the Factory Method when you want to provide users of your library or framework with a way to extend its internal components.

# Abstract Factory

The Abstract Factory is a creational design pattern that allows producing families of related or dependent objects without specifying their concrete classes.

- Use the Abstract Factory when your code needs to work with various families of related products, but you don’t want it to depend on the concrete classes of those products—they might be unknown beforehand or you simply want to allow for future extensibility.

- Abstract Factory specializes in creating families of related objects

- Abstract Factory can serve as an alternative to Facade when you only want to hide the way the subsystem objects are created from the client code.

- You can use Abstract Factory along with Bridge. This pairing is useful when some abstractions defined by Bridge can only work with specific implementations. In this case, Abstract Factory can encapsulate these relations and hide the complexity from the client code.
     
- Builder focuses on constructing complex objects step by step. Abstract Factory specializes in creating families of related objects. Abstract Factory returns the product immediately, whereas Builder lets you run some additional construction steps before fetching the product.

------
The Factory Method pattern is widely used in TypeScript code. It’s very useful when you need to provide a high level of flexibility for your code.

Factory Method defines a method, which should be used for creating objects instead of direct constructor call (new operator). Subclasses can override this method to change the class of objects that will be created.

------

The Abstract Factory pattern is pretty common in TypeScript code. Many frameworks and libraries use it to provide a way to extend and customize their standard components.

Abstract Factory defines an interface for creating all distinct products but leaves the actual product creation to concrete factory classes. Each factory type corresponds to a certain product variety.

The client code calls the creation methods of a factory object instead of creating products directly with a constructor call (new operator). Since a factory corresponds to a single product variant, all its products will be compatible.

Client code works with factories and products only through their abstract interfaces. This lets the client code work with any product variants, created by the factory object. You just create a new concrete factory class and pass it to the client code.