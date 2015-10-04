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

      // view.performActions();
      view.game.step();
      view.game.draw(view.ctx);
      view.updateStats();
    }, 25);  // 40 fps
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
  //
  //   var that = this;
  //   key('up', function(event) {
  //     event.preventDefault()
  //     that.thrust = -1 // thrust
  //   });
  //   key('down', function(event) {
  //     event.preventDefault()
  //     that.thrust = 1
  //   });
  //   key('left', function(event) {
  //     event.preventDefault()
  //     that.turnleft = true;
  //   });
  //   key('right', function(event) {
  //     event.preventDefault()
  //     that.turnright = true;
  //   });
  //   key('space', function(event) {
  //     event.preventDefault()
  //     that.fireb = true;
  //   });
  // }

  GameView.prototype.performActions = function() {
    var that = this;
    if (this.thrust === -1){
      that.game.ship.power(-1) // thrust
    };
    if (this.thrust === 1){
      that.game.ship.power(1)
    };
    if (this.turnleft === true){
      that.game.ship.rotateLeft()
    };
    if (this.turnright === true){
      that.game.ship.rotateRight()
    };
    if (this.fireb === true){
      that.game.ship.fireBullet()
    };

    this.thrust = 0
    this.turnleft = false;
    this.turnright = false;
    this.fireb = false;

  }


  GameView.prototype.updateStats = function () {
    this.updateShields();
    this.updateLives();
  };

  GameView.prototype.updateShields = function () {
    $("div.shield-status").html(" " + this.game.ship.shield)
  };
  GameView.prototype.updateLives = function () {
    $("div.lives-count").html(" " + this.game.ship.lives)
  };


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
