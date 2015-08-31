(function () {
  window.Asteroids = window.Asteroids || {};

  var Util = new Asteroids.Util();

  var Asteroid = Asteroids.Asteroid = function(pos, game) {
    var vel = Util.randomVec(10)
    Asteroids.MovingObject.call(this,
      {pos: pos, vel: vel, radius: Asteroid.RADIUS, color: Asteroid.COLOR}, game)
  }

  Util.inherits(Asteroid, Asteroids.MovingObject);

  Asteroid.COLOR = "#115c4d";
  Asteroid.RADIUS = 25;

})();
