(function (){
  window.Asteroids = window.Asteroids || {};

  var Game = Asteroids.Game = function () {
    this.dim_x = Game.DIM_X;
    this.dim_y = Game.DIM_Y;
    this.num_asteroids = Game.NUM_ASTEROIDS;
    this.asteroids = [];
    this.addAsteroids();
    this.ship = new Asteroids.Ship(this);
    this.bullets = [];
  };

  Game.DIM_X = 800;
  Game.DIM_Y = 600;
  Game.NUM_ASTEROIDS = 4;

  Game.prototype.addAsteroids = function () {
    for (var i = 0; i < this.num_asteroids; i++){
      a = new Asteroids.Asteroid(this.randomPosition(), this);
      this.asteroids.push(a);
    };
  };

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, this.dim_x, this.dim_y);
    this.allObjects().forEach(function(obj) {
      obj.draw(ctx);
    });
  };

  Game.prototype.randomPosition = function(){
    var x = Math.random() * this.dim_x;
    var y = Math.random() * this.dim_y;
    return [x, y];
  };

  Game.prototype.moveObjects = function() {
    this.allObjects().forEach(function(obj) {
      obj.move();
    });
  };

  Game.prototype.wrap = function(pos) {
    if (pos[0] > this.dim_x) {
      pos[0] = 0;
    };
    if (pos[0] < 0) {
      pos[0] = this.dim_x;
    };
    if (pos[1] > this.dim_y) {
      pos[1] = 0;
    };
    if (pos[1] < 0) {
      pos[1] = this.dim_y;
    };
    // return pos;
  };

  Game.prototype.checkCollisions = function() {
    var objs = this.allObjects();
    for (var i = 0; i < objs.length - 1; i++) {
      for (var j = i+1; j < objs.length; j++) {
        if (objs[i].isCollidedWith(objs[j])) {
          // alert("COLLISION");
          objs[i].collideWith(objs[j])
        };
      };
    };
  };

  Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
  };

  // Game.prototype.addObj = function(obj) {
  //
  // };

  Game.prototype.remove = function(asteroid) {
    var indexToDelete = this.asteroids.indexOf(asteroid);
    if (indexToDelete !== -1){
      this.asteroids.splice(indexToDelete, 1)
    };
  }

  Game.prototype.addBullet = function(bullet) {
    this.bullets.push(bullet);
  }

  Game.prototype.allObjects = function () {
    return this.bullets.concat(this.asteroids).concat([this.ship]);
  }

})();
