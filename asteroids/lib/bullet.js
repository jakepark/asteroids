(function () {
  window.Asteroids = window.Asteroids || {};

  var Util = new Asteroids.Util();

  var Bullet = Asteroids.Bullet = function(pos, vel, game) {

    Asteroids.MovingObject.call(this,
      {pos: pos, vel: vel, radius: Bullet.RADIUS, color: Bullet.COLOR}, game)
  }

  Util.inherits(Bullet, Asteroids.MovingObject);

  Bullet.COLOR = "#FF0000";
  Bullet.RADIUS = 5;

  Bullet.prototype.collideWith = function(otherObject) {
    if (otherObject instanceof Asteroids.Ship) {
      otherObject.relocate();
    } else {
      this.game.remove(otherObject);
      this.game.remove(this);
    };
  };

})();