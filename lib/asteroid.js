(function () {
  window.Asteroids = window.Asteroids || {};

  var Util = new Asteroids.Util();

  var Asteroid = Asteroids.Asteroid = function(pos, game) {
    var vel = Util.randomVec(2)
    this.counter = 0;
    this.rotation = Math.random();
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
    if (otherObject instanceof Asteroids.Explosion) {
      // nothing , let it explode

    } else if (otherObject instanceof Asteroids.Ship) {
      if (otherObject.clipping === true){

        var explosion = new Asteroids.Explosion( otherObject.pos,
          otherObject.vel,
          this.game
        )

        this.game.add(explosion)

        otherObject.relocate();   // teleport that ship
      }
    } else if (otherObject instanceof Asteroids.Asteroid) {
      // asteroid 1
      this.rotation = this.rotation * -1
      var x = this.vel[0];
      var y = this.vel[1];

      var pos_x = this.pos[0];
      var pos_y = this.pos[1];
      var magnitude = Math.pow((Math.pow(x, 2) + Math.pow(y, 2)), 0.5)

      var j = otherObject.vel[0];
      var k = otherObject.vel[1];

      var pos_j = otherObject.pos[0];
      var pos_k = otherObject.pos[1];
      var other_magnitude = Math.pow((Math.pow(pos_j, 2) + Math.pow(pos_k, 2)), 0.5)



      this.vel[0] = -x;
      this.vel[1] = -y;

      this.pos[0] = pos_x - 10*(x / magnitude)
      this.pos[1] = pos_y -10*(y / magnitude)

      // asteroid 2


      otherObject.vel[0] = -j;
      otherObject.vel[1] = -k;

      otherObject.pos[0] =  pos_j - 10*(pos_j / other_magnitude)
      otherObject.pos[1] =  pos_k - 10*(pos_k / other_magnitude)

    } else { // bullet

      var explosion = new Asteroids.Explosion( this.pos,
        this.vel,
        this.game
      )

      this.game.add(explosion)

      // this.game.add(explosion)
      this.game.remove(otherObject);
      this.game.remove(this);

    };
  };

  Asteroid.prototype.draw = function (ctx) {
    this.counter++;
    var heading = (this.counter/20) // % (2 * Math.PI))


    ctx.save();
    ctx.translate(this.pos[0], this.pos[1]);
    ctx.rotate(this.rotation * heading);
    ctx.drawImage(this.img_asteroid, -25, -25)
    ctx.restore();


    // ctx.drawImage(this.img_asteroid, this.pos[0]-25, this.pos[1]-25)
  };

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
