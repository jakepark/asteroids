(function (){
  window.Asteroids = window.Asteroids || {};

  var Util = new Asteroids.Util();

  var Nemesis = Asteroids.Nemesis = function (game){
    this.game = game;
    this.pos = this.game.randomRight();
    // this.pos = [400, 250]
    this.vel = [0,0];

    this.mass = 30000;
    this.color = Nemesis.COLOR;
    this.bulletspeed = Nemesis.BULLETSPEED;
    this.bulletcounter = 0;
    this.speedlimit = Nemesis.SPEEDLIMIT;

    this.heading = 3*Math.PI/2;
    this.thrust = 0;
    this.speed = 0;
    this.shields = 3;

    if (this.shields > 0){
      this.radius = Nemesis.RADIUS + 10
    } else {
      this.radius = Nemesis.RADIUS
    }

    this.lives = 7;

    this.safe = true;
    this.alive = true;
    this.counter = 0;
    this.kills = 0;

    this.hits = 0;
    this.spammed = 0;

    this.theta;

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

  };

  Util.inherits(Nemesis, Asteroids.Ship);

  Nemesis.RADIUS = 10;
  Nemesis.COLOR = "#007bb5";
  Nemesis.BULLETSPEED = 5;
  Nemesis.SPEEDLIMIT = 7;

  Nemesis.prototype.locatePlayer = function() {

    var origin = this.pos
      var x1 = origin[0]
      var y1 = -origin[1]
    var target = this.game.ship.pos
      var x2 = target[0]
      var y2 = -target[1]

    var theta;

    if (x1 === x2){
      if (y1 > y2){
        theta = 0
      } else {
        theta = Math.PI
      }
    } else if (y1 === y2) {
      if (x1 > x2){
        theta = 3*Math.PI/2
      } else {
        theta = Math.PI/2
      }
    } else if ((x1 > x2) && (y1 > y2)) {  // case 1
      theta = ((Math.PI/2)+Math.atan((y1-y2)/(x1-x2)))
    } else if ((x1 < x2) && (y1 > y2)) { // case 2
      theta = (Math.PI+Math.atan((x2-x1)/(y1-y2)))
    } else if ((x1 > x2) && (y1 < y2)) { // case 3
      theta = ((Math.PI/2)-Math.atan((y2-y1)/(x1-x2)))
    } else {
      theta = 2*(Math.PI)-((Math.PI/2)-Math.atan((y2-y1)/(x2-x1)))
    }

    this.theta = theta
    return theta;

  }

  Nemesis.prototype.update = function (theta) {
    window.setTimeout(function () {
      if (this.heading >= 2*Math.PI ) {
        this.heading = this.heading % (2*Math.PI)

      } else if (this.heading < 0) {
        this.heading = (this.heading + (2*Math.PI)) % (2 * Math.PI)
      }



      // DO NOT TOUCH THE FOLLOWING CODE
      if ((this.heading > theta + 0.05) || (this.heading < theta - 0.05)) { // If nemesis is outside of tolerance of facing theta
        // RIGHT SIDE OK
        if (theta < this.heading ) {
          if (theta > (this.heading - Math.PI)){
            this.rotateRight();
          } else {
            this.rotateLeft();
          }

        } else if ((theta - this.heading) < Math.PI){
        // } else if ((theta - this.heading) < Math.PI){

          this.rotateLeft();
        } else  if (theta > this.heading ) {
          if (theta < (this.heading + (Math.PI - this.heading))){

            this.rotateLeft();
          } else {

            this.rotateRight();
          }
        } else {

        }

      }


      if (this.game.safety === false){
        this.fireBullet();
        var dieroll = Math.floor(Math.random() * (6) + 1);
        if (dieroll <= 2){
          this.power(-1)
        }
      }



    }.bind(this), 250)

  }

})();

  // working
  // Nemesis.prototype.update = function (theta) {
  //   // window.setTimeout(function () {
  //     if (this.heading >= 2*Math.PI ) {
  //       this.heading = this.heading % (2*Math.PI)
  //       console.log("heading reset to zero")
  //     } else if (this.heading < 0) {
  //       this.heading = (this.heading + (2*Math.PI)) % (2 * Math.PI)
  //     }
  //
  //
  //
  //
  //     if ((this.heading > theta + 0.05) || (this.heading < theta - 0.05)) { // If nemesis is outside of tolerance of facing theta
  //
  //
  //         console.log("theta: " + theta)
  //           console.log("heading: " + this.heading)
  //
  //       // RIGHT SIDE OK
  //       if (theta < this.heading ) {
  //         if (theta > (this.heading - Math.PI)){
  //         console.log("1 right")
  //           this.rotateRight();
  //         } else {
  //           this.rotateLeft();
  //         }
  //
  //       } else if ((theta - this.heading) < Math.PI){
  //       // } else if ((theta - this.heading) < Math.PI){
  //         console.log("1 left")
  //         this.rotateLeft();
  //       } else  if (theta > this.heading ) {
  //         if (theta < (this.heading + (Math.PI - this.heading))){
  //           console.log("2 left")
  //           this.rotateLeft();
  //         } else {
  //           console.log("2 right")
  //           this.rotateRight();
  //         }
  //       } else {
  //         console.log("misc")
  //       }
  //
  //
  //       //
  //       //   if (theta > (Math.PI - this.heading ){
  //       //     this.rotateRight();
  //       //   }
  //       // }
  //       // else if ((theta - this.heading) < Math.PI){
  //       //
  //       //   this.rotateLeft();
  //       // }
  //
  //     }
  //   // }.bind(this), 1000)
  // }


  // almost there
  // Nemesis.prototype.update = function (theta) {
  //   // window.setTimeout(function () {
  //     if (this.heading > 2*Math.PI ) {
  //       this.heading = this.heading % (2*Math.PI)
  //     } else if (this.heading < 0) {
  //       this.heading = (this.heading + (2*Math.PI)) % (2 * Math.PI)
  //     }
  //
  //
  //
  //
  //     if ((this.heading > theta + 0.05) || (this.heading < theta - 0.05)) { // If nemesis is outside of tolerance of facing theta
  //
  //       if (theta < this.heading ) {
  //         if (theta > (this.heading - Math.PI)){
  //           this.rotateRight();
  //         }
  //       } else if ((theta - this.heading) < Math.PI){
  //
  //         this.rotateLeft();
  //       }
  //
  //       if (theta > this.heading ) {
  //         if (theta > (Math.PI - this.heading )){
  //           this.rotateRight();
  //         }
  //
  //       }
  //
  //     }
  //   // }.bind(this), 1000)
  // }



// 2015-10-07
// Nemesis.prototype.update = function (theta) {
//   window.setTimeout(function () {
//     if (this.heading > 2*Math.PI ) {
//       this.heading = this.heading % (2*Math.PI)
//     } else if (this.heading < 0) {
//       this.heading = (this.heading + (2*Math.PI)) % (2 * Math.PI)
//     }
//
//     if ((this.heading > theta + 0.05) || (this.heading < theta - 0.05)) {
//         if (theta <= Math.PI){
//           this.rotateLeft();
//         } else if (theta < 2* Math.PI) {
//           this.rotateRight();
//         }
//       }
//   }.bind(this), 1000)
// }


//ship sprites: 20, 20 start, 40 in between each..


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
