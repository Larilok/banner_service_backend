Observer
=====

Observer is a behavioral design pattern that lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they’re observing.

### Usage

- Use the Observer pattern when changes to the state of one object may require changing other objects, and the actual set of objects is unknown beforehand or changes dynamically.

- Use the pattern when some objects in your app must observe others, but only for a limited time or in specific cases.
---
Typescript

The Observer pattern is pretty common in TypeScript code, especially in the GUI components. It provides a way to react to events happening in other objects without coupling to their classes.