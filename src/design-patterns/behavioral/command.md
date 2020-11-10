Command
====
Also known as: Action, Transaction

Command is behavioral design pattern that converts requests or simple operations into objects.

Turns a request into a stand-alone object that contains all information about the request. This transformation lets you parameterize methods with different requests, delay or queue a request's execution, and support undoable operations.

### Usage

- Use the Command pattern when you want to queue operations, schedule their execution, or execute them remotely.

- Use the Command pattern when you want to implement reversible operations.

---
Typescript

The Command pattern is pretty common in TypeScript code. Most often it’s used as an alternative for callbacks to parameterizing UI elements with actions. It’s also used for queueing tasks, tracking operations history, etc.
