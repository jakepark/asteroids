(function (){
  window.Asteroids = window.Asteroids || {};

  var Util = new Asteroids.Util();

  var Ship = Asteroids.Ship = function (game){
    this.game = game;
    this.pos = this.game.randomPosition();
    // this.pos = [400, 250]
    this.vel = [0,0];

    this.mass = 30000;
    this.color = Ship.COLOR;
    this.bulletspeed = Ship.BULLETSPEED;
    this.bulletcounter = 0;
    this.speedlimit = Ship.SPEEDLIMIT;

    this.heading = 0;
    this.thrust = 0;
    this.speed = 0;
    this.shields = 3;

    if (this.shields > 0){
      this.radius = Ship.RADIUS + 10
    } else {
      this.radius = Ship.RADIUS
    }

    this.lives = 3;

    this.safe = true;
    this.alive = true;

    this.counter = 0;

    this.kills = 0;

    // if (this.safe === true) {
    //
    //   window.setTimeout(function () {
    //     this.safe = false
    //
    //   }.bind(this), 3000)
    // };

    if (this.shields > 0){
      this.shieldcolor = "#ffffff"
    } else {
      this.shieldcolor = "#007bb5" // blue .. no shield
    }

    var img_thruster = new Image();
    img_thruster.src = './img/thruster.png';
    this.img_thruster = img_thruster;


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
  Ship.BULLETSPEED = 3;
  Ship.SPEEDLIMIT = 7;

  Ship.prototype.relocate = function() {
    this.safe = true;
    this.shields = 3;
    window.setTimeout(function () {
      this.safe = false
    }.bind(this), 5000)


    this.pos = this.game.randomPosition();
    this.vel = [0,0];

  };


  Ship.prototype.power = function(thrust) {
    // velocity
    var x = this.vel[0]
    var y = this.vel[1]
    var magnitude = Math.sqrt((x * x) + (y * y))


    if (thrust === -1) {
      x = x + .20*thrust*Math.sin(this.heading);
      y = y + .20*thrust*Math.cos(this.heading);
    } else if (thrust === 1) {
      x = x + .10*thrust*Math.sin(this.heading);
      y = y + .10*thrust*Math.cos(this.heading);
    }

    this.vel[0] = x;
    this.vel[1] = y;

  };


  Ship.prototype.fireBullet = function() {
    

    if (this.bulletcounter > 5){
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
      b = new Asteroids.Bullet(pos_bullet, vel_bullet, this.game, this);

      this.game.add(b);
      this.bulletcounter = 0;
    }
  };


  // rotate ship's heading 9 degrees left every press. pi/20
  Ship.prototype.rotateLeft = function () {
    this.heading += Math.PI/20;

  };

  Ship.prototype.rotateRight = function () {
    this.heading -= Math.PI/20;
  };

  Ship.prototype.emergencyBrake = function (){
    this.vel = [0,0];
    this.shields = 0;
  };


  Ship.prototype.draw = function (ctx) {
    if (this.bulletcounter < 100){
      this.bulletcounter++;
    }
    this.counter++;


    // rudimentary shield
    if (this.shields > 0){
    ctx.beginPath();
    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,                // start at 0 = right
      2*Math.PI,      // quadrant of last hit
      false
    );
    ctx.lineWidth = 1;
    ctx.strokeStyle = this.shieldcolor
    ctx.stroke();
    // ctx.fill();
    }

    // purely decorative thruster sprite
    if (this.thrust !== 0){
      ctx.save();
      ctx.translate(this.pos[0], this.pos[1]);
      if (this.thrust === -1){
        ctx.rotate(-this.heading);
      } else if (this.thrust === 1){
        ctx.rotate(-this.heading + (Math.PI));
      }
      ctx.drawImage(this.img_thruster, -20, -20)
      ctx.restore();
    }

    if ((this.safe === true && this.counter % 5 != 0 && this.counter % 5 != 1 )
        || this.safe === false){

      // ship sprite success
      ctx.save();
      ctx.translate(this.pos[0], this.pos[1]);
      ctx.rotate(-this.heading);
      ctx.drawImage(this.img_ship, -20, -20)
      ctx.restore();
      // ship sprite success
    }

  };


})();


//ship sprites: 20, 20 start, 40 in between each..
