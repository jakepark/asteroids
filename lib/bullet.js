(function () {
  window.Asteroids = window.Asteroids || {};

  var Util = new Asteroids.Util();

  var Bullet = Asteroids.Bullet = function(pos, vel, game) {
    var img_bullet = new Image();
    img_bullet.src = './img/bullet.png';

    this.img_bullet = img_bullet

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

  Bullet.prototype.draw = function (ctx) {
    ctx.drawImage(this.img_bullet, this.pos[0]-5, this.pos[1]-5)
  };


})();
