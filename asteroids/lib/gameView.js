(function (){
  window.Asteroids = window.Asteroids || {};

  var GameView = Asteroids.GameView = function(game, ctx) {
    this.game = game;
    this.ctx = ctx;
  }

  GameView.prototype.start = function () {
    var view = this;
    window.setInterval(function (){
      view.game.draw(view.ctx);
      view.game.step();
    }, 20);
  }

})();
