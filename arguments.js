var sum = function(){
  var args = Array.prototype.slice.call(arguments);

  var twosum = function (a, b){
    return a+b;
  }

  return args.reduce(twosum)
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
