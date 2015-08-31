var sum = function(){
  var args = Array.prototype.slice.call(arguments);

  var twosum = function (a, b){
    return a+b;
  }

  return args.reduce(twosum)
}
