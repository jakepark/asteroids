(function () {
  window.Asteroids = window.Asteroids || {};

  var Util = new Asteroids.Util();

  var Asteroid = Asteroids.Asteroid = function(pos, game) {
    var vel = Util.randomVec(2)

    var img_asteroid = new Image();
    img_asteroid.src = './img/asteroid.png';

    this.img_asteroid = img_asteroid


    Asteroids.MovingObject.call(this,
      {pos: pos, vel: vel, radius: Asteroid.RADIUS, color: Asteroid.COLOR}, game)
  }

  Util.inherits(Asteroid, Asteroids.MovingObject);

  Asteroid.COLOR = "#7a5230";
  Asteroid.RADIUS = 25;

  Asteroid.prototype.collideWith = function(otherObject) {
    if (otherObject instanceof Asteroids.Ship) {
      otherObject.relocate();
    // } else if (otherObject instanceof Asteroids.Asteroid) {
    //   debugger
    //   this.vel
    //
    //   // this.game.remove(otherObject);
    //   // this.game.remove(this);
    } else {
      this.game.remove(otherObject);
      this.game.remove(this);
    };
  };

  Asteroid.prototype.draw = function (ctx) {
    ctx.drawImage(this.img_asteroid, this.pos[0]-25, this.pos[1]-25)
  };

})();
