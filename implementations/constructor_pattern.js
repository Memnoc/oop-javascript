// Classes must include and declare a method named constructor()
// which will be used to instantiate a new object
// new is the keyword that allows us to call the constructor
// 'this' inside the constructor references the new object created

// basic constructor

class Car {
  constructor(model, year, miles) {
    this.model = model
    this.year = year
    this.miles = miles
  }

  toString() {
    return `${this.model} from ${this.year} has done ${this.miles}`
  }
}
// make some cars
const pontiac = new Car('M34a', 1984, 144)
// console.log(pontiac.toString())
const mercedes = new Car('smart', 2020, 194)
// console.log(mercedes.toString())
const toyota = new Car('Yaris', 2023, 7843)
// console.log(toyota.toString())

// Problems with this basic implementation
// 1. Makes inheritance difficult
// 2. toString() is defined (again) for every instance of the class;
// ideally, all classes should use the same version of the method

// constructor with Prototypes

// proptotypes allow you to define methods for all instances of a particular object (so proper inheritance)
// The idea is that when the constructor is invoked, all the properties
// of the constructor are passed down the prototype chain to all the other instances of the object

class Airplane {
  constructor(type, make, size) {
    this.type = type
    this.make = make
    this.size = size
  }
}
Airplane.prototype.toString = function () {
  return ` The ${this.type} airplane type is from ${this.make} and of class ${this.size}`
}

// we are using Object.prototype.newMethod rather than
// Object.prototype to avoide redefining the protorype object
// We still can use Object.prototype to add new methods

// create planes

const airplane_one = new Airplane('domestic', 'ryanair', 'boeing')
const airplane_two = new Airplane('jet-fighter', 'F15', 'jet')

// console.log(airplane_one.toString())
// console.log(airplane_two.toString())

// The class airplane now shares the very same toString() method across all instances
