(function (){
  window.Asteroids = window.Asteroids || {};

  var Game = Asteroids.Game = function () {

    this.dim_x = Game.DIM_X;
    this.dim_y = Game.DIM_Y;
    this.num_asteroids = Game.NUM_ASTEROIDS;
    this.asteroids = [];
    this.ship = new Asteroids.Ship(this);
    this.addAsteroids();
    this.bullets = [];
    this.explosions = [];
    this.enemies = [];

    this.round = 1;
    this.cleared = false;
    this.nemesis;
    this.safety = true;

    this.addNemesis();
  };

  Game.DIM_X = 800;
  Game.DIM_Y = 400;
  Game.NUM_ASTEROIDS = 0;


  Game.prototype.addNemesis = function () {
    nemesis = new Asteroids.Nemesis(this);
    this.nemesis = nemesis;
    this.add(nemesis);
  };
  // Spawn enemies in the 'Kiuper Belt' beyond visual range.
  Game.prototype.addAsteroids = function () {
    this.ship.safe = true;
    for (var i = 0; i < this.num_asteroids; i++){
      var randRadius = Math.floor(getRandomArbitrary(15, 30));
      // var randRadius = 25;  // For collision testing purposes
      var a = new Asteroids.Asteroid(this.randomPosition(), this, randRadius);


      var collisionFree = false
      while (collisionFree === false){
        collisionFree = true
        if (this.asteroids.length > 0) {
          this.asteroids.forEach(function (asteroid) {
            if (asteroid.isCollidedWith(a) || asteroid.isCollidedWith(this.ship)){
              collisionFree = false;
              a = new Asteroids.Asteroid(this.randomPosition(), this, randRadius);
            }
          }.bind(this))
        }
      }

      this.add(a);
    };


  };

  Game.prototype.add = function (obj) {

    if (obj instanceof Asteroids.Asteroid){
      this.asteroids.push(obj);
    } else if (obj instanceof Asteroids.Bullet){
      this.bullets.push(obj);
    } else if (obj instanceof Asteroids.Explosion){
      this.explosions.push(obj);
    } else if (obj instanceof Asteroids.Nemesis){ // Nemesis
      this.enemies.push(obj);
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

  Game.prototype.randomLeft = function(){
    var x = Math.random() * this.dim_x/2;
    var y = Math.random() * this.dim_y;
    return [x, y];
  };

  Game.prototype.randomRight = function(){
    var x = Math.random() * (this.dim_x - this.dim_x/2) + (this.dim_x/2);
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

  Game.prototype.updateObject = function() {
    // window.setTimeout(function () {
    // }.bind(this), 500)
      this.nemesis.update(this.nemesis.locatePlayer())


  };

  Game.prototype.step = function() {
    this.updateObject();
    this.moveObjects();
    this.checkCollisions();
    if (this.cleared === true){
      this.round++;
      this.cleared = false;
      setTimeout(function(){
        this.addAsteroids();
      }.bind(this), 3000);
      setTimeout(function () {
        this.ship.safe = false
      }.bind(this), 6000)
    }

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
    } else if (obj instanceof Asteroids.Explosion){
      var indexToDelete = this.explosions.indexOf(obj);
      if (indexToDelete !== -1){
        this.explosions.splice(indexToDelete, 1);
      }
    }
  }

  Game.prototype.allObjects = function () {
    return this.asteroids.concat(this.bullets).concat(this.explosions)
      .concat(this.enemies).concat([this.ship]);
  }


  Game.prototype.wait = function (callback) {
    window.setInterval(function (callback) {}, 3000);
  }

})();
