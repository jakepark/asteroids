(function (){
  window.Asteroids = window.Asteroids || {};

  var GameView = Asteroids.GameView = function(game, ctx) {
    this.game = game;
    this.ctx = ctx;

    this.keys = {
      thrust: 0,
      turnleft: false,
      turnright: false,
      space: false,
      brake: false
    }
  }

  GameView.prototype.start = function () {
    var view = this;
    this.bindKeyHandlers();

    window.setInterval(function (){
      if (view.game.ship.lives === 0){
        // alert("Game Over")  // alerts. create gameOver
      }
      view.performActions();
      view.game.step();
      view.game.draw(view.ctx);
      view.updateStats();
    }, 25);  // 40 fps
  }

  GameView.prototype.bindKeyHandlers = function() {
    var keys = this.keys;
    var $el = $(document);
    $el.keydown(function (e) {
      
      e.preventDefault();
      // UP
      if (e.keyCode === 38){
        keys.thrust = -1;
        this.game.ship.thrust = -1;
      }
      // DOWN
      if (e.keyCode === 40){
        keys.thrust = 1;
        this.game.ship.thrust = 1;
      }
      // LEFT
      if (e.keyCode === 37){
        keys.turnleft = true;
      }
      // RIGHT
      if (e.keyCode === 39){
        keys.turnright = true;
      }
      // SPACE
      if (e.keyCode === 32){

        keys.space = true;
      }

      // EMERGENCY BRAKE
      if (e.keyCode === 83){
        keys.brake = true;
      }

    }.bind(this))

    $el.keyup(function (e) {
      // UP
      if (e.keyCode === 38){
        keys.thrust = 0;
        this.game.ship.thrust = 0;
      }
      // DOWN
      if (e.keyCode === 40){
        keys.thrust = 0;
        this.game.ship.thrust = 0;
      }
      // LEFT
      if (e.keyCode === 37){
        keys.turnleft = false;
      }
      // RIGHT
      if (e.keyCode === 39){
        keys.turnright = false;
      }
      // SPACE
      if (e.keyCode === 32){
        keys.space = false;
      }

      // EMERGENCY BRAKE
      if (e.keyCode === 83){
        keys.brake = false;
      }
    }.bind(this))
  };

  GameView.prototype.performActions = function() {
    if (this.keys.thrust === -1){

      this.game.ship.power(-1) // thrust
    };
    if (this.keys.thrust === 1){

      this.game.ship.power(1)
    };
    if (this.keys.turnleft === true){
      this.game.ship.rotateLeft()
    };
    if (this.keys.turnright === true){
      this.game.ship.rotateRight()
    };
    if (this.keys.space === true){
      this.game.ship.fireBullet()
    };

    if (this.keys.brake === true){
      this.game.ship.emergencyBrake()
    };


    // this.keys.thrust = 0
    // this.keys.turnleft = false;
    // this.turnright = false;
    // this.fireb = false;

  }


  GameView.prototype.updateStats = function () {
    this.updateShields();
    this.updateLives();
    this.updateRounds();
  };

  GameView.prototype.updateShields = function () {
    var shieldbar = document.getElementById('shield-status')
    shieldbar.max = 3;
    $(shieldbar).val(this.game.ship.shields).css({'background-color':'red'})

    // $("div.shield-status").html(" " + this.game.ship.shields)
  };

  GameView.prototype.updateLives = function () {
    $("div.lives-count").html(" " + this.game.ship.lives)
  };

  GameView.prototype.updateRounds = function () {
    $("div.rounds-count").html(" " + this.game.round)
  };

})();
