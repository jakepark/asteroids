function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

(function () {
  window.Asteroids = window.Asteroids || {};

  var Util = new Asteroids.Util();

  var Asteroid = Asteroids.Asteroid = function(pos, game, radius) {
    var vel = Util.randomVec(2)
    this.counter = 0;
    this.counter_rot = Math.random() < 0.5 ? -1 : 1;
    this.rotation = Math.random();




    var img_asteroid = new Image();
    img_asteroid.src = './img/asteroid.png';
    this.img_asteroid = img_asteroid

    Asteroids.MovingObject.call(this,
      {pos: pos, vel: vel, radius: radius, color: Asteroid.COLOR}, game)
    if (this.radius > 20){
      this.hp = 10;
    } else {
      this.hp = 5;
    }

  }

  Util.inherits(Asteroid, Asteroids.MovingObject);

  Asteroid.COLOR = "#7a5230";
  var frictionDecay = 0.75

  Asteroid.prototype.collideWith = function(otherObject) {
    if (otherObject instanceof Asteroids.Explosion) {
      // nothing , let it explode

    } else  if (otherObject instanceof Asteroids.Bullet){ // bullet

      if (this.hp > 1){
        this.hp--


        var collisionPointX =
         ((this.pos[0] * otherObject.radius) + (otherObject.pos[0] * this.radius))
         / (this.radius + otherObject.radius);

        var collisionPointY =
         ((this.pos[1] * otherObject.radius) + (otherObject.pos[1] * this.radius))
         / (this.radius + otherObject.radius);

        var impact = [collisionPointX, collisionPointY]


        var explosion = new Asteroids.Explosion( impact,
          [0,0],
          this.game,
          otherObject.radius
        )
        this.game.add(explosion)

        this.game.remove(otherObject);
      } else if (this.hp === 1) {
        var explosion = new Asteroids.Explosion( this.pos,
          this.vel,
          this.game,
          this.radius
        )
        this.game.add(explosion)
        this.game.remove(otherObject);
        if (this.game.asteroids.length === 1){
          this.game.cleared = true;
        }
        this.game.remove(this);
      }
    } else if (otherObject instanceof Asteroids.Ship &&
        otherObject.shields === 0){

        var explosion = new Asteroids.Explosion( otherObject.pos,
          otherObject.vel,
          this.game
        )
        this.game.add(explosion);
        otherObject.lives--;
        otherObject.relocate();   // teleport that ship
      // }
    // } else if (otherObject instanceof Asteroids.Asteroid) {
    } else {


        var collisionPointX =
         ((this.x * otherObject.radius) + (otherObject.x * this.radius))
         / (this.radius + otherObject.radius);

        var collisionPointY =
         ((this.y * otherObject.radius) + (otherObject.y * this.radius))
         / (this.radius + otherObject.radius);

        this.counter_rot = this.counter_rot * -1

        var newVelX1 = (this.vel[0] * (this.mass - otherObject.mass) +
          (2 * otherObject.mass * otherObject.vel[0])) / (this.mass + otherObject.mass);
        var newVelY1 = (this.vel[1] * (this.mass - otherObject.mass) +
          (2 * otherObject.mass * otherObject.vel[1])) / (this.mass + otherObject.mass);
        var newVelX2 = (otherObject.vel[0] * (otherObject.mass - this.mass) +
          (2 * this.mass * this.vel[0])) / (this.mass + otherObject.mass);
        var newVelY2 = (otherObject.vel[1] * (otherObject.mass - this.mass) +
          (2 * this.mass * this.vel[1])) / (this.mass + otherObject.mass);


        // // asteroid
        this.x = this.x + frictionDecay * newVelX1;
        this.y = this.y + frictionDecay * newVelY1;
        this.vel[0] = newVelX1
        this.vel[1] = newVelY1

        // // otherObject
        otherObject.x = otherObject.x + frictionDecay * newVelX2;
        otherObject.y = otherObject.y + frictionDecay * newVelY2;
        otherObject.vel[0] = newVelX2
        otherObject.vel[1] = newVelY2

    }
  };


  Asteroid.prototype.draw = function (ctx) {
    if (this.counter_rot === 1){
      this.counter++;
    } else {
      this.counter--;
    }
    var heading = (this.counter/20) // % (2 * Math.PI))

    ctx.save();
    ctx.translate(this.pos[0], this.pos[1]);
    ctx.scale(this.radius/25, this.radius/25);
    ctx.rotate(this.rotation * heading);
    ctx.drawImage(this.img_asteroid, -25, -25)
    ctx.restore();

    // ctx.drawImage(this.img_asteroid, this.pos[0]-25, this.pos[1]-25)
  };

})();
