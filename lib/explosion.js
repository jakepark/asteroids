(function () {
  window.Asteroids = window.Asteroids || {};

  var Util = new Asteroids.Util();

  var Explosion = Asteroids.Explosion = function(pos, vel, game) {
    var img_explosion = new Image();  // 35 x 40
    img_explosion.src = './img/explosion.png';

    counter = 0;

    this.img_explosion = img_explosion

    Asteroids.MovingObject.call(this,
      {pos: pos, vel: vel, radius: Explosion.RADIUS, color: Explosion.COLOR}, game)
  }

  Util.inherits(Explosion, Asteroids.MovingObject);

  Explosion.COLOR = "#FF0000";
  Explosion.RADIUS = 5;

  Explosion.prototype.collideWith = function(otherObject) {
    if (otherObject instanceof Asteroids.Ship) {
      debugger

      otherObject.relocate();
    } else {


      this.game.remove(otherObject);
      this.game.remove(this);
    };
  };

  Explosion.prototype.draw = function (ctx) {
    var count = Math.floor(explosion.counter / 4);
    var xoff = (count%4) * 24;
    // ctx.drawImage(this.img_explosion, this.pos[0]-15, this.pos[1]-20)
    ctx.drawImage(
      this.img_explosion,
      xoff-15,
      this.pos[1]-20
    )
  };


})();
