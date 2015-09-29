(function() {
  window.Asteroids = window.Asteroids || {};

  var Util = Asteroids.Util = function() {
  };

  Util.prototype.inherits = function(childClass, parentClass) {
    function Surrogate () {};
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate();
  };

  Util.prototype.randomVec = function (length){
    var x = Math.random() * length;
    var y = Math.random() * length;

    var randomSign = function(randomNum) {
      if (randomNum < .5) {
        return 1;
      } else {
        return -1;
      };
    };

    x = x * randomSign(Math.random());
    y = y * randomSign(Math.random());
    return [x,y];
  };

})();
