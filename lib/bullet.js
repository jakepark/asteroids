(function () {
  window.Asteroids = window.Asteroids || {};

  var Util = new Asteroids.Util();

  var Bullet = Asteroids.Bullet = function(pos, vel, game) {
    var img_bullet = new Image();
    img_bullet.src = './img/bullet.png';

    this.img_bullet = img_bullet

    this.counter = 0;
    this.armed = false;

    Asteroids.MovingObject.call(this,
      {pos: pos, vel: vel, radius: Bullet.RADIUS, color: Bullet.COLOR}, game)
  }

  Util.inherits(Bullet, Asteroids.MovingObject);

  Bullet.COLOR = "#FF0000";
  Bullet.RADIUS = 5;


  Bullet.prototype.isCollidedWith = function (otherObject){
    pos1 = this.pos
    pos2 = otherObject.pos
    var dist = Math.sqrt(
                ((pos1[0] - pos2[0]) * (pos1[0] - pos2[0])) +
                ((pos1[1] - pos2[1]) * (pos1[1] - pos2[1]))
              );

    if (otherObject instanceof Asteroids.Ship && otherObject.shields > 0 &&
      this.armed === true){

      return (dist < (this.radius + otherObject.shieldradius));
    } else {
      return (dist < (this.radius + otherObject.radius));
    }
  }


  Bullet.prototype.collideWith = function(otherObject) {
    if (otherObject instanceof Asteroids.Explosion) {
      // nothing , let it explode

    } else if (otherObject instanceof Asteroids.Ship) {
      if (otherObject.safe === false){
        if (otherObject.shields === 0){

          var explosion = new Asteroids.Explosion( otherObject.pos,
            otherObject.vel,
            this.game,
            otherObject.radius
          )

          this.game.add(explosion)
          otherObject.lives--;
          otherObject.relocate();   // teleport that ship
          this.game.remove(this);
        } else {   // explosion on shield


          var collisionPointX =
           ((this.pos[0] * otherObject.shieldradius) + (otherObject.pos[0] * this.radius))
           / (this.radius + otherObject.shieldradius);

          var collisionPointY =
           ((this.pos[1] * otherObject.shieldradius) + (otherObject.pos[1] * this.radius))
           / (this.radius + otherObject.shieldradius);

          var impact = [collisionPointX, collisionPointY]

          var explosion = new Asteroids.Explosion( impact,
            this.vel,
            this.game,
            this.radius
          )

          this.game.add(explosion)


          otherObject.shields--;
          this.game.remove(this);

        }
      }
    }else if (otherObject instanceof Asteroids.Bullet) {

        this.game.remove(otherObject);
        this.game.remove(this);
      };
  };

  Bullet.prototype.draw = function (ctx) {
    if (this.counter < 100){
      this.counter++;
    } else {
      this.armed = true;
    }

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
