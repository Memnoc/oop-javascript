## The Constructor Pattern

A constructor is a special method used to initialise a newly created object once the memory has been allocated for it.

Almost everything in JS is an object, and classes are nothing more than syntactic sugar on top of the JS's protptypal approach to inheritance.

### prototype chain
We need to open a little parenthesis here as this is where things start to get confusing.
In JavaScript, there is only one construct: object. Each object has a private property which holds a link to another object, and this is called the **prototype object**; this prototype object contains a prototype of its own, and this goes on until a final object with a *null* value is reached, closing the so called **prototype chain**. By definition, `null` has no prototype, and that's why is the final link to the chain.

The confusion steems from the fact that each member of the prorotype chain can be mutated, and even swapped at runtime.

So in this sense, classes in JavaScript do not unlock any additional inheritance capabilities, only place a layer of abstraction over the prototype chain.
 ## [prototype_chain](./prototype_chain.md)

 The advantages of this pattern lean on the classes themselves, meaning that they allow for inheritance and encapsulation.
 ## [inheritance](./inheritance.md)
 ## [encapsulation](./encapsulation.md)