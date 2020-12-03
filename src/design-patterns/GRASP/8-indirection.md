Indirection
====
**Indirection** means that some action would not be taken directly by the object in question but it would be performed by intermediately object which can be used by different other object who needs similar action
Problem:
- Where to assign a responsibility, to avoid direct coupling between two (or more) things? How to de-couple objects so that low coupling is supported and reuse potential remains higher?

Solution:
- Assign the responsibility to an intermediate object to mediate between other components or services so that they are not directly coupled.  The intermediary creates an indirection between the other components.

Diff between PF and Indirection:
- Pure fabrication also focuses on handling the low cohesion rather than reuse


GoF:  Adapter, Bridge, Facade, Observer, and Mediator
