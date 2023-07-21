## Inheritance with the proptotype chain

### inheriting properties

Javascript objects are like "bags" of properties. They are connected by a link, the proptotype chain, which allows them to share their properties.
When trying to access the property of an object, that property is not ust sought on that particular object, but all along the chain, until either a matching property is found or a `null` value is found, which signfies the end of the prototype chain.

The common syntax notation for the prototyped is
`someObject.[[Prototype]]`
The `[[Prototype]]` internal slot can be accessed via setters and getters as `Object.getPrototypeOf()` or `Object.setPrototypeOf()`

To put it to a practical example, in the object literal 
`{ a:1, b:2, __proto__: c}`
`c` can either be `null` or be an object, will become the [[Prototype]] of the object represented by the literal, while the other keys `a` and `b` will become own properties of the object.

``` Javascript
const o = {
  a: 1,
  b: 2,
  // __proto__ sets the [[Prototype]]. It's specified here
  // as another object literal.
  __proto__: {
    b: 3,
    c: 4,
  },
};
```
// o.[[Prototype]] has properties b and c.
// o.[[Prototype]].[[Prototype]] is Object.prototype (we will explain
// what that means later).
// Finally, o.[[Prototype]].[[Prototype]].[[Prototype]] is null.
// This is the end of the prototype chain, as null,
// by definition, has no [[Prototype]].
// Thus, the full prototype chain looks like:
// { a: 1, b: 2 } ---> { b: 3, c: 4 } ---> Object.prototype ---> null

console.log(o.a); // 1
// Is there an 'a' own property on o? Yes, and its value is 1.

console.log(o.b); // 2
// Is there a 'b' own property on o? Yes, and its value is 2.
// The prototype also has a 'b' property, but it's not visited.
// This is called Property Shadowing

console.log(o.c); // 4
// Is there a 'c' own property on o? No, check its prototype.
// Is there a 'c' own property on o.[[Prototype]]? Yes, its value is 4.

console.log(o.d); // undefined
// Is there a 'd' own property on o? No, check its prototype.
// Is there a 'd' own property on o.[[Prototype]]? No, check its prototype.
// o.[[Prototype]].[[Prototype]] is Object.prototype and
// there is no 'd' property by default, check its prototype.
// o.[[Prototype]].[[Prototype]].[[Prototype]] is null, stop searching,
// no property found, return undefined.

Object.prototype is the top-most element in the prototype chain. Every object in JavaScript has a prototype, and all objects inherit their properties and methods from their prototype.

Here's what the prototype chain looks like for a typical object:

1. Your custom object (such as an Array, Function, or your own defined object)
2. `Object.prototype`
3. `null`` (indicating the end of the prototype chain)

The **Object.prototype** provides a set of standard properties and methods that are available to all objects. These include basic methods like `toString(), valueOf(), hasOwnProperty(), isPrototypeOf(),` and more.

For example, when you use `toString()` method on an array or a string, you're actually using the `toString()` method that's inherited from Object.prototype. This is because all objects in JavaScript, including arrays and strings, are descendants of Object.prototype and therefore have access to its properties and methods.

In addition, Object.prototype can be extended to add new methods or properties to all objects. However, modifying Object.prototype should be done carefully, since changes can have wide-ranging effects on the behavior of your code.

Here's a simple example:

```Javascript
Object.prototype.greet = function() {
  console.log("Hello, world!");
};

const myObject = {};
myObject.greet(); // logs "Hello, world!"

```
In this example, a new method greet() is added to Object.prototype, and is therefore available to all objects. The myObject instance can call this method, even though it was not defined directly on myObject

## [constructor_pattern](./constructor_pattern.md)