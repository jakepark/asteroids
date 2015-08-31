function Animal (name) {
  this.name = name;
};

Animal.prototype.sayHello = function () {
  console.log("Hello, my name is " + this.name);
};

function Dog () {};

// The surrogate will be used to construct `Dog.prototype`.
function Surrogate () {};
// A `Surrogate` instance should delegate to `Animal.prototype`.
Surrogate.prototype = Animal.prototype;

// Set `Dog.prototype` to a `Surrogate` instance.
// `Surrogate.__proto__` is `Animal.prototype`, but `new
// Surrogate` does not invoke the `Animal` constructor function.
Dog.prototype = new Surrogate();

Dog.prototype.bark = function () {
  console.log("Bark!");
};


Function.prototype.inherits = function(parentClass) {
  // childClass = this;
  function Surrogate () {};
  Surrogate.prototype = parentClass.prototype;
  this.prototype = new Surrogate();
}
