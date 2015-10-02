(function (){
  window.Asteroids = window.Asteroids || {};

  var GameView = Asteroids.GameView = function(game, ctx) {
    this.game = game;
    this.ctx = ctx;

    this.thrust = 0
    this.turnleft = false;
    this.turnright = false;
    this.fireb = false;

    

  }

  GameView.prototype.start = function () {
    var view = this;
    this.bindKeyHandlers();

    window.setInterval(function (){

      // this.gameView.performActions();
      view.game.draw(view.ctx);
      view.game.step();
    }, 20);
  }

  GameView.prototype.bindKeyHandlers = function() {

    var that = this;
    key('up', function(event) {
      event.preventDefault()
      that.game.ship.power(-1) // thrust
    });
    key('down', function(event) {
      event.preventDefault()
      that.game.ship.power(1)
    });
    key('left', function(event) {
      event.preventDefault()
      that.game.ship.rotateLeft()
    });
    key('right', function(event) {
      event.preventDefault()
      that.game.ship.rotateRight()
    });
    key('space', function(event) {
      event.preventDefault()
      that.game.ship.fireBullet()
    });
  }


  // GameView.prototype.bindKeyHandlers = function() {
  //   key('up', function(event) {
  //     event.preventDefault()
  //     this.thrust = -1
  //   });
  //   key('down', function(event) {
  //     event.preventDefault()
  //     this.thrust = 1
  //   });
  //   key('left', function(event) {
  //     event.preventDefault()
  //     this.turnleft = true;
  //   });
  //   key('right', function(event) {
  //     event.preventDefault()
  //     this.turnright = true;
  //   });
  //   key('space', function(event) {
  //     event.preventDefault()
  //     this.fireb = true;
  //   });
  //
  //
  //
  // }
  //
  // GameView.prototype.performActions = function () {
  //
  //   this.game.ship.power(this.thrust)
  //   if (this.turnleft == true){
  //     this.game.ship.rotateLeft()
  //   }
  //   if (this.turnright == true){
  //     this.game.ship.rotateRight()
  //   }
  //   if (this.fireb == true){
  //     this.game.ship.fireBullet()
  //   }
  //
  // }

})();


// GameView.prototype.bindKeyHandlers = function() {
//
//   var that = this;
//   key('up', function(event) {
//     event.preventDefault()
//     that.game.ship.power(-1) // thrust
//   });
//   key('down', function(event) {
//     event.preventDefault()
//     that.game.ship.power(1)
//   });
//   key('left', function(event) {
//     event.preventDefault()
//     that.game.ship.rotateLeft()
//   });
//   key('right', function(event) {
//     event.preventDefault()
//     that.game.ship.rotateRight()
//   });
//   key('space', function(event) {
//     event.preventDefault()
//     that.game.ship.fireBullet()
//   });
// }
