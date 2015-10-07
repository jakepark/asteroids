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

    this.lives = 3;

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
  Nemesis.BULLETSPEED = 3;
  Nemesis.SPEEDLIMIT = 7;

  Nemesis.prototype.locate = function() {

    var origin = this.pos
    var target = this.game.ship.pos

    debugger
    window.setTimeout(function () {


    var theta = 0;


    if (this.heading != 3*Math.PI/4) {
      // window.setTimeout(function () {
      this.rotateLeft();

    }
      }.bind(this), 1000)

  }
  // correct, different from
  // Nemesis.prototype.locate = function() {
  //   window.setTimeout(function () {
  //
  //   if (this.heading != 3*Math.PI/4) {
  //     // window.setTimeout(function () {
  //     this.rotateLeft();
  //
  //   }
  //     }.bind(this), 1000)
  //
  // }

  // Nemesis.prototype.locate = function() {
  //   // window.setTimeout(function () {
  //
  //   if (this.heading != 3*Math.PI/4) {
  //     window.setTimeout(function () {
  //     this.rotateLeft();
  //
  //     }.bind(this), 1000)
  //   }
  //
  // }



  Nemesis.prototype.update = function() {

  }

})();


//ship sprites: 20, 20 start, 40 in between each..
