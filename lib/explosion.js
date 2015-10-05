(function () {
  window.Asteroids = window.Asteroids || {};

  var Util = new Asteroids.Util();

  var Explosion = Asteroids.Explosion = function(pos, vel, game, scale) {
    var img_explosion = new Image();  // 35 x 40
    img_explosion.src = './img/explosion.png';
    this.scale = scale;
    this.counter = 0;

    this.img_explosion = img_explosion

    Asteroids.MovingObject.call(this,
      {pos: pos, vel: vel, radius: Explosion.RADIUS, color: Explosion.COLOR}, game)
  }

  Util.inherits(Explosion, Asteroids.MovingObject);

  Explosion.COLOR = "#FF0000";
  Explosion.RADIUS = 5;

  Explosion.prototype.collideWith = function(otherObject) {
    // if (otherObject instanceof Asteroids.Ship) {
    //   // ship flies right through!
    // } else {
    //
    //
    //   this.game.remove(otherObject);
    //   this.game.remove(this);
    // };
  };

  Explosion.prototype.draw = function (ctx) {
    // ctx.drawImage(this.img_explosion, this.pos[0]-15, this.pos[1]-20)
    this.counter++;


    var dw = 40;
    var dh = 40;

    //scaled explosions. not so impressive
    // dw = (this.scale / 20) * 40
    // dh = (this.scale / 20) * 40

    if (this.counter > (13 * 4)){
    // debugger

      this.game.remove(this);
    } else {
      var count = Math.floor(this.counter / 4);
      var xoff = (count%13) * 40;
      ctx.drawImage(
        this.img_explosion,
        xoff-5, +1, 40, 40, // src
        this.pos[0]-(dw/2), this.pos[1]-(dh/2), dw, dh
      )
    }
  };


})();
