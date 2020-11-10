Iterator
=====

Iterator is a behavioral design pattern that allows sequential traversal through a complex data structure without exposing its internal details.

### Usage

- Use the Iterator pattern when your collection has a complex data structure under the hood, but you want to hide its complexity from clients (either for convenience or security reasons).
- Use the Iterator when you want your code to be able to traverse different data structures or when types of these structures are unknown beforehand.
---
Typescript

The pattern is very common in TypeScript code. Many frameworks and libraries use it to provide a standard way for traversing their collections