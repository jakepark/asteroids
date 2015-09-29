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
    this.speedlimit = Ship.SPEEDLIMIT;

    this.heading = 0;

    var img_ship = new Image();
    img_ship.src = './img/ship.png';
    this.img_ship = img_ship;
    // (url, pos, size, speed, frames, dir, once)

    this.sprite = new Asteroids.Sprite(   // url, pos, size
        'img/ship.png', [20, 20], [40, 40],
        0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      );
  };

  Util.inherits(Ship, Asteroids.MovingObject);

  Ship.RADIUS = 10;
  Ship.COLOR = "#007bb5";
  Ship.BULLETSPEED = 2;
  Ship.SPEEDLIMIT = 5;

  Ship.prototype.relocate = function() {
    this.pos = this.game.randomPosition();
  };

  Ship.prototype.power = function(impulse) {
    var x = this.vel[0]
    var y = this.vel[1]
    // var magnitude = Math.pow((Math.pow(x, 2) + Math.pow(y, 2)), 0.5)

    var x_new = x + impulse*Math.sin(this.heading);
    var y_new = y + impulse*Math.cos(this.heading);

    // this is weird physics..
    if (Math.abs(x_new) < this.speedlimit){
      x = x_new
    }
    if (Math.abs(y_new) < this.speedlimit){
      y = y_new
    }

    this.vel[0] = x;
    this.vel[1] = y;

  };


  Ship.prototype.fireBullet = function() {
    var x = this.pos[0]
    var y = this.pos[1]
    var x_vel = this.vel[0]
    var y_vel = this.vel[1]  // velocity is flipped due to canvas draw direction



    // var nose = this.RADIUS + Asteroids.Bullet.RADIUS
    var nose = 15

    var magnitude = Math.pow((Math.pow(x, 2) + Math.pow(y, 2)), 0.5)


    x_offset = Math.sin(this.heading)
    y_offset = Math.cos(this.heading);

    var vel_bullet = [x_vel - this.bulletspeed * x_offset,
          y_vel - this.bulletspeed * y_offset]

    var pos_bullet = [x + (-nose) * x_offset, y + (-nose) * y_offset]
    // debugger
    // var pos_bullet = [x + x_vel*30, y + y_vel*30]
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

  Ship.prototype.draw = function (ctx) {
    
    ctx.save();
    ctx.translate(this.pos[0], this.pos[1]);
    ctx.rotate(-this.heading);
    ctx.drawImage(this.img_ship, -20, -20)
    ctx.restore();
  };


})();


//ship sprites: 20, 20 start, 40 in between each..
