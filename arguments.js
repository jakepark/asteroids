var sum = function(){
  var args = Array.prototype.slice.call(arguments);
  return args.reduce(twosum)
}

var twosum = function (a, b){
  return a+b;
}

Function.prototype.myBind = function(context){
  fn = this

  var outerArgs = Array.prototype.slice.call(arguments, 1)

  return function(){
    var innerArgs = Array.prototype.slice.call(arguments);
    var allArgs = outerArgs.concat(innerArgs);
    return fn.apply(context, allArgs)
  };

};


var curriedSum = function(numArgs) {
  var numbers = [];
  var _curriedSum = function(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return numbers.reduce(twosum);
    }
    else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}

Function.prototype.curry = function (numArgs){
  fn = this;
  var args = [];
  var _curriedArg = function(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return fn.apply(null, args) ;
    }
    else {
      return _curriedArg;
    }
  }
  return _curriedArg;
}

f = sum.curry(5);
console.log(f(4)(5)(1)(2)(3));
