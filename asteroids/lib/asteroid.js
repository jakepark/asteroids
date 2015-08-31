(function () {
  window.Asteroids = window.Asteroids || {};

  var Util = new Asteroids.Util();

  var Asteroid = Asteroids.Asteroid = function(pos) {
    var vel = Util.randomVec(100)
    Asteroids.MovingObject.call(this,
      {pos: pos, vel: vel, radius: Asteroid.RADIUS, color: Asteroid.COLOR})
  }

  Util.inherits(Asteroid, Asteroids.MovingObject);

  Asteroid.COLOR = "#115c4d";
  Asteroid.RADIUS = 50;

})();
