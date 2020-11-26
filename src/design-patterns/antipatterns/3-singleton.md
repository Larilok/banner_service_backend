Singleton
=========
[Singleton - antipattern](https://www.michaelsafyan.com/tech/design/patterns/singleton)

## Bad, Brittle Assumption

 The name of the function that retrieves the sole instance is typically called "getInstance()", "instance()", or "get()", although the name used is not important to make the object a singleton. It is also not necessary for the object to be constructible at all; any use of global (or "static") variables for maintaining state is also a type of singleton.

The biggest problem with the singleton pattern is that the assumption that there will ever be only one instance is often broken during a project's lifetime, and this pattern structures the code in a way that requires a very significant effort to refactor when this assumption is inevitably wrong

This pattern makes the code inflexible

## Difficulty Testing

This is because the singleton pattern introduces a dependency through a side-channel that is not explicitly given as a parameter to constructors or other functions that use it

## Multithreading

The singleton pattern is especially difficult to implement correctly when taking multithreading into account 


# What to use instead
Instead of using this pattern, simply instantiate a single instance and propagate it to places that use the object as a parameter to make the dependency explicit

```
   // BAD: Using singleton
     public class CloseButtonHandler implements ButtonHandler {
        @Override
        public void buttonPressed() {
          // What will we do if we ever redesign the app to have multiple windows?
          // Using a singleton like this is inherently fragile.
          Window.getInstance().closeWindow();
        }
     }
```

```
      // GOOD: Allows dependency to be supplied explicitly
     public class CloseButtonHandler implements ButtonHandler {
        private final Window window;

        public CloseButtonHandler(Window window) {
          this.window = Preconditions.checkNotNull(window);
        }

        @Override
        public void buttonPressed() {
          window.closeWindow();
        }
     }
```