Builder 
------
Builer is a creational design pattern that lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code.

- Use the Builder pattern to get rid of a “telescopic constructor”(with optional params).

- Use the Builder pattern when you want your code to be able to create different representations of some product (for example, stone and wooden houses)

- Use the Builder to construct Composite trees or other complex objects.

Pros
- You can construct objects step-by-step, defer construction steps or run steps recursively.
- You can reuse the same construction code when building various representations of products.
- Single Responsibility Principle. You can isolate complex construction code from the business logic of the product.

Relations

- You can use Builder when creating complex Composite trees because you can program its construction steps to work recursively.

- You can combine Builder with Bridge: the director class plays the role of the abstraction, while different builders act as implementations.

---------

Unlike other creational patterns, Builder doesn’t require products to have a common interface. That makes it possible to produce different products using the same construction process.

The Builder pattern is a well-known pattern in TypeScript world. It’s especially useful when you need to create an object with lots of possible configuration options.