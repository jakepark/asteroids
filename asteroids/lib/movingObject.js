(function () {
  window.Asteroids = window.Asteroids || {};

  var MovingObject = Asteroids.MovingObject = function (attrs, game){
    this.pos = attrs.pos;
    this.vel = attrs.vel;
    this.radius = attrs.radius;
    this.color = attrs.color;
    this.game = game;
  };

  MovingObject.prototype.draw = function (ctx) {
    var ctx = ctx;
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

  MovingObject.prototype.move = function (){
    this.pos[0] = this.pos[0] + this.vel[0];
    this.pos[1] = this.pos[1] + this.vel[1];
    this.game.wrap(this.pos);
  }

  MovingObject.prototype.isCollidedWith = function (otherObject){
    pos1 = this.pos
    pos2 = otherObject.pos
    var dist = Math.sqrt(Math.pow((pos1[0] - pos2[0]), 2) +
                Math.pow((pos1[1] - pos2[1]), 2));
    return (dist < (this.radius + otherObject.radius));
  }

  MovingObject.prototype.collideWith = function(otherObject) {

  }

})();
