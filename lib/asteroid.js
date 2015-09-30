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
    } else if (otherObject instanceof Asteroids.Asteroid) {

      var x = this.vel[0];
      var y = this.vel[1];

      this.vel[0] = -y;
      this.vel[1] = -x;

      var j = otherObject.vel[0];
      var k = otherObject.vel[1];

      // otherObject.vel[0] = -k;
      // otherObject.vel[1] = -j;
      
    // var magnitude = Math.pow((Math.pow(x, 2) + Math.pow(y, 2)), 0.5)

    } else {
      this.game.remove(otherObject);
      this.game.remove(this);
    };
  };

  // Asteroid.prototype.draw = function (ctx) {
  //   ctx.drawImage(this.img_asteroid, this.pos[0]-25, this.pos[1]-25)
  // };

})();



  // Asteroid.prototype.collideWith = function(otherObject) {
  //   if (otherObject instanceof Asteroids.Ship) {
  //     otherObject.relocate();
  //   } else if (otherObject instanceof Asteroids.Asteroid) {
  //
  //     var x = this.vel[0];
  //     var y = this.vel[1];
  //
  //     this.vel[0] = -y;
  //     this.vel[1] = -x;
  //
  //     var j = otherObject.vel[0];
  //     var k = otherObject.vel[1];
  //
  //     otherObject.vel[0] = -k;
  //     otherObject.vel[1] = -j;
  //
  //
  //   } else {
  //     this.game.remove(otherObject);
  //     this.game.remove(this);
  //   };
  // };
