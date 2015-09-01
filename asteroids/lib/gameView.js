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
    key('up', function() {
      that.game.ship.power([0, -1])
    });
    key('down', function() {
      that.game.ship.power([0, 1])
    });
    key('left', function() {
      that.game.ship.power([-1, 0])
    });
    key('right', function() {
      that.game.ship.power([1, 0])
    });
    key('space', function() {
      that.game.ship.fireBullet();
    })
  }

})();
