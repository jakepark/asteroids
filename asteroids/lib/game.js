(function (){
  window.Asteroids = window.Asteroids || {};

  var Game = Asteroids.Game = function () {
    this.dim_x = Game.DIM_X;
    this.dim_y = Game.DIM_Y;
    this.num_asteroids = Game.NUM_ASTEROIDS;
    this.asteroids = [];
    this.addAsteroids();
  };

  Game.DIM_X = 600;
  Game.DIM_Y = 600;
  Game.NUM_ASTEROIDS = 10;

  Game.prototype.addAsteroids = function () {
    for (var i = 0; i < this.num_asteroids; i++){
      a = new Asteroids.Asteroid(this.randomPosition());
      this.asteroids.push(a);
    };
  };

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, this.dim_x, this.dim_y);
    this.asteroids.forEach(function(ast) {
      ast.draw(ctx);
    });
  };

  Game.prototype.randomPosition = function(){
    var x = Math.random() * this.dim_x;
    var y = Math.random() * this.dim_y;
    return [x, y];
  };

  Game.prototype.moveObjects = function() {
    this.asteroids.forEach(function(ast) {
      ast.move();
    });
  };

  Game.prototype.wrap = function(pos) {
    if (pos[0] > this.dim_x) {
      pos[0] = 0;
    }
    if (pos[0] < 0) {
      pos[0] = this.dim_x;
    }
    if (pos[1] > this.dim_y) {
      pos[1] = 0;
    }
    if (pos[1] < 0) {
      pos[1] = this.dim_y;
    }
    return pos;
  }

})();
