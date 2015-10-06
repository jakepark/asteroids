(function (){
  window.Asteroids = window.Asteroids || {};

  var Util = new Asteroids.Util();

  var Nemesis = Asteroids.Nemesis = function (game){
    this.game = game;
    this.pos = this.game.randomPosition();
    // this.pos = [400, 250]
    this.vel = [0,0];

    this.mass = 30000;
    this.color = Nemesis.COLOR;
    this.bulletspeed = Nemesis.BULLETSPEED;
    this.bulletcounter = 0;
    this.speedlimit = Nemesis.SPEEDLIMIT;

    this.heading = 0;
    this.thrust = 0;
    this.speed = 0;
    this.shields = 3;

    if (this.shields > 0){
      this.radius = Nemesis.RADIUS + 10
    } else {
      this.radius = Nemesis.RADIUS
    }

    this.safe = true;
    this.alive = true;
    this.counter = 0;
    this.kills = 0;



    if (this.shields > 0){
      this.shieldcolor = "#ffffff"
    } else {
      this.shieldcolor = "#007bb5" // blue .. no shield
    }

    var img_thruster = new Image();
    img_thruster.src = './img/thruster.png';
    this.img_thruster = img_thruster;


    var img_ship = new Image();
    img_ship.src = './img/nemesis.png';
    this.img_ship = img_ship;
    // (url, pos, size, speed, frames, dir, once)

    this.sprite = new Asteroids.Sprite(   // url, pos, size
        'img/ship.png', [20, 20], [40, 40],
        0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      );
  };

  Util.inherits(Nemesis, Asteroids.Ship);

  Nemesis.RADIUS = 10;
  Nemesis.COLOR = "#007bb5";
  Nemesis.BULLETSPEED = 2;
  Nemesis.SPEEDLIMIT = 7;

  Nemesis.prototype.draw = function (ctx) {
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

    // if ((this.safe === true && this.counter % 5 != 0 && this.counter % 5 != 1 )
    //     || this.safe === false){

      // ship sprite success
      ctx.save();
      ctx.translate(this.pos[0], this.pos[1]);
      ctx.rotate(-this.heading);
      ctx.drawImage(this.img_ship, -20, -20)
      ctx.restore();
      // ship sprite success
    // }

  };


})();


//ship sprites: 20, 20 start, 40 in between each..
