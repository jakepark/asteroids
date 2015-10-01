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
      this.game.remove(this);

    } else {

      this.game.remove(otherObject);
      this.game.remove(this);
    };
  };

  Bullet.prototype.draw = function (ctx) {

    var x = this.pos[0]
    var y = this.pos[1]

    // turn off wrapping if you want this feature
    // if (x < 0 || y < 0 || x > game.dim_x || y > game.dim_y) {
    //
    //   game.remove(this);
    // }

    ctx.drawImage(this.img_bullet, this.pos[0]-5, this.pos[1]-5)
  };


})();
