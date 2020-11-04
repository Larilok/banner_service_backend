Singleton
-----------

Singleton is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.

- Use the Singleton pattern when a class in your program should have just a single instance available to all clients; for example, a single database object shared by different parts of the program.

-  Use the Singleton pattern when you need stricter control over global variables.

Cons: 

- The Singleton pattern can mask bad design, for instance, when the components of the program know too much about each other.
- Violates the Single Responsibility Principle. The pattern solves two problems at the time. 
  - Ensure that a class has just a single instance
  - Provide a global access point to that instance

-------
No usage

Singleton has almost the same pros and cons as global variables. Although they’re super-handy, they break the modularity of your code.

You can’t just use a class that depends on Singleton in some other context. You’ll have to carry the Singleton class as well. Most of the time, this limitation comes up during the creation of unit tests.