(function (){
  window.Asteroids = window.Asteroids || {};

  var Util = new Asteroids.Util();


  var Ship = Asteroids.Ship = function (game){
    this.game = game;
    this.pos = this.game.randomPosition();
    this.vel = [0,0];
    this.radius = Ship.RADIUS;
    this.color = Ship.COLOR;
  };

  Util.inherits(Ship, Asteroids.MovingObject);

  Ship.RADIUS = 15;
  Ship.COLOR = "#FF0000";

  Ship.prototype.relocate = function() {
    this.pos = this.game.randomPosition();
    this.vel = [0,0];
  };

  Ship.prototype.power = function(impulse) {
    this.vel[0] = this.vel[0] + impulse[0];
    this.vel[1] = this.vel[1] + impulse[1];
  }

  Ship.prototype.fireBullet = function() {
    var bPos = [this.pos[0], this.pos[1]];
    var bVel = [this.vel[0], this.vel[1]];
    var bullet = new Asteroids.Bullet(bPos, bVel, this.game);
    this.game.addBullet(bullet);
  }

})();
