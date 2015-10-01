(function (){
  window.Asteroids = window.Asteroids || {};

  var GameView = Asteroids.GameView = function(game, ctx) {
    this.game = game;
    this.ctx = ctx;
  }

  GameView.prototype.start = function () {
    var view = this;
    this.bindKeyHandlers();

    window.setInterval(function (){

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

})();
