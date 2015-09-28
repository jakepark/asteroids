(function (){
  window.Asteroids = window.Asteroids || {};

  var Util = new Asteroids.Util();

  var Ship = Asteroids.Ship = function (game){
    this.game = game;
    this.pos = this.game.randomPosition();
    this.vel = [0,0];
    this.radius = Ship.RADIUS;
    this.color = Ship.COLOR;
    this.bulletspeed = Ship.BULLETSPEED;

    this.heading = 0;
    // this.sprite = new Asteroids.Sprite(url, pos, size);
    this.sprite = new Asteroids.Sprite(
        'img/subspace_ship.png', [20, 20], [40, 40]
      );
  };

  Util.inherits(Ship, Asteroids.MovingObject);

  Ship.RADIUS = 15;
  Ship.COLOR = "#007bb5";
  Ship.BULLETSPEED = 2;

  Ship.prototype.relocate = function() {
    this.pos = this.game.randomPosition();
  };

  Ship.prototype.power = function(impulse) {
    this.vel[0] = this.vel[0] + impulse*Math.sin(this.heading);
    this.vel[1] = this.vel[1] + impulse*Math.cos(this.heading);

  };

  // Ship.prototype.power = function(impulse) {
  //   this.vel[0] = this.vel[0] + impulse[0];
  //   this.vel[1] = this.vel[1] + impulse[1];
  // };

  Ship.prototype.fireBullet = function() {

    var vel_bullet = [this.vel[0]*this.bulletspeed, this.vel[1]*this.bulletspeed]
    var pos_bullet = [this.pos[0] + this.vel[0]*30,this.pos[1] + this.vel[1]*30]

    b = new Asteroids.Bullet(pos_bullet, vel_bullet, this.game);

    this.game.add(b);

  };


  // rotate ship's heading 9 degrees left every press. pi/20
  Ship.prototype.rotateLeft = function () {
    this.heading += Math.PI/20;

  };

  Ship.prototype.rotateRight = function () {
    this.heading -= Math.PI/20;
  };

})();


//ship sprites: 20, 20 start, 40 in between each..
