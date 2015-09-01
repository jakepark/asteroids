(function () {
  window.Asteroids = window.Asteroids || {};

  var Util = new Asteroids.Util();

  var Bullet = Asteroids.Bullet = function(pos, vel, game) {
    Asteroids.MovingObject.call(this, {
      pos: pos,
      vel: vel,
      radius: Bullet.RADIUS,
      color: Bullet.COLOR
    }, game);
    if (this.vel[0] === 0 && this.vel[1] === 0) {
      this.vel = Util.randomVec(5);
    }
  };

  Util.inherits(Bullet, Asteroids.MovingObject);
  Bullet.COLOR = "#000000";
  Bullet.RADIUS = 10;
})();
