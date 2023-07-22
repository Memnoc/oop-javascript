## Encapsulation

One of the core of OOP (Obejct Oriented Programming).

The mechanism of this pattern is simple: it consists of bundling the attributes and methods of an implementation into a single unit, usually a class. This is useful to hide the internal structure of a class to external actors, and in so doing maintaing decisional power over the design and behaviour of the implementation.

In other words: **encapsulation allows you to hide specific information and control access to the object's internal state.**

A typical example are the methods known as `getters()` and `setters()`
These methods, as the name suggests, allow to retrieve (get) and change (set) attributes of the class.
The advantage offered is that the final consumer of the methods has no visibility over the internal implementation of the class, the methods itself and any other attributes. The final user can only use the method as the class creator intended, and not in any other way, in so guaanteeing a consistent behaviour of the unit across implementations.
## [constructor_pattern](./constructor_pattern.md)
## [inheritance](./inheritance.md)