(function (){
  window.Asteroids = window.Asteroids || {};

  var Game = Asteroids.Game = function () {

    this.dim_x = Game.DIM_X;
    this.dim_y = Game.DIM_Y;
    this.num_asteroids = Game.NUM_ASTEROIDS;
    this.asteroids = [];
    this.addAsteroids();
    this.bullets = [];


    this.ship = new Asteroids.Ship(this);

  };

  Game.DIM_X = 400;
  Game.DIM_Y = 400;
  Game.NUM_ASTEROIDS = 4;

  // Game.prototype.addAsteroids = function () {
  //   for (var i = 0; i < this.num_asteroids; i++){
  //     a = new Asteroids.Asteroid(this.randomPosition(), this);
  //     this.asteroids.push(a);
  //   };
  // };

  Game.prototype.addAsteroids = function () {
    for (var i = 0; i < this.num_asteroids; i++){
      a = new Asteroids.Asteroid(this.randomPosition(), this);
      this.add(a);
    };
  };

  Game.prototype.add = function (obj) {

    if (obj instanceof Asteroids.Asteroid){
      this.asteroids.push(obj);
    } else if (obj instanceof Asteroids.Bullet){
      this.bullets.push(obj);
    }
  };

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, this.dim_x, this.dim_y);

    ctx.drawImage(img_background, 0, 0);

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
    // return pos;
  }

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
  }

  Game.prototype.remove = function(obj) {
    if (obj instanceof Asteroids.Asteroid){
      var indexToDelete = this.asteroids.indexOf(obj);
      if (indexToDelete !== -1){
        this.asteroids.splice(indexToDelete, 1);
      }
    } else if (obj instanceof Asteroids.Bullet){
      var indexToDelete = this.bullets.indexOf(obj);
      if (indexToDelete !== -1){
        this.bullets.splice(indexToDelete, 1);
      }
    };
  }

  Game.prototype.allObjects = function () {
    return this.asteroids.concat(this.bullets).concat([this.ship]);
  }

})();




  // Game.prototype.draw = function (ctx) {
  //   ctx.clearRect(0, 0, this.dim_x, this.dim_y);
  //
  //   var img_ship = new Image();
  //   img_ship.src = './img/ship.png';
  //
  //   ctx.drawImage(img_background, 0, 0);
  //
  //   this.allObjects().forEach(function(obj) {
  //     if (obj instanceof Asteroids.Ship){
  //
  //       // ctx.translate(obj.pos[0], obj.pos[1])
  //       // ctx.rotate(obj.heading)
  //       ctx.save();
  //       ctx.translate(obj.pos[0], obj.pos[1]);
  //       ctx.rotate(-obj.heading);
  //       ctx.drawImage(img_ship, -20, -20)
  //       ctx.restore();
  //
  //       // ctx.drawImage(img_ship,
  //       //   0, 0, 40, 40, // source x, y, width, height
  //       //   obj.pos[0], obj.pos[1], 40, 40) // destin x, y, width, height
  //
  //     } else {
  //       obj.draw(ctx);
  //     }
  //   });
  // };
