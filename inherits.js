Function.prototype.inherits = function(parentClass) {
  // childClass = this;
  function Surrogate () {};
  Surrogate.prototype = parentClass.prototype;
  this.prototype = new Surrogate();
}
