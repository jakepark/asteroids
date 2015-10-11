(function (){
  window.Asteroids = window.Asteroids || {};

  var GameView = Asteroids.GameView = function(game, ctx) {
    this.game = game;
    this.ctx = ctx;

    this.keys = {
      thrust: 0,
      turnleft: false,
      turnright: false,
      fire: false,
      brake: false
    }

    this.player2 = {
      thrust: 0,
      turnleft: false,
      turnright: false,
      fire: false,
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

      view.game.isGameOver();
      if (view.game.gamedone === true){
        debugger
        var divOver = document.getElementById("gameOver")
        divOver.style.visibility = 'visible';

      } else {
        view.game.step();
      }

      view.game.draw(view.ctx);
      view.updateStats();
    }, 25);  // 40 fps
  }



  GameView.prototype.bindKeyHandlers = function() {
    var keys = this.keys;
    var player2 = this.player2;

    var $el = $(document);
    $el.keydown(function (e) {


      // UP
      if (e.keyCode === 38){
        e.preventDefault();
        keys.thrust = -1;
        this.game.ship.thrust = -1;
      }
      // DOWN
      if (e.keyCode === 40){
        e.preventDefault();
        keys.thrust = 1;
        this.game.ship.thrust = 1;
      }
      // LEFT
      if (e.keyCode === 37){
        e.preventDefault();
        keys.turnleft = true;
      }
      // RIGHT
      if (e.keyCode === 39){
        e.preventDefault();
        keys.turnright = true;
      }
      // FIRE
      if (e.keyCode === 32){
        e.preventDefault();
        keys.fire = true;
      }
      // EMERGENCY BRAKE (l ctrl)
      if (e.keyCode === 17){
        keys.brake = true;
      }

      // UP (w)
      if (e.keyCode === 87){
        e.preventDefault();
        player2.thrust = -1;
        this.game.nemesis.thrust = -1;
      }
      // DOWN (s)
      if (e.keyCode === 83){
        e.preventDefault();
        player2.thrust = 1;
        this.game.nemesis.thrust = 1;
      }
      // LEFT (a)
      if (e.keyCode === 65){
        e.preventDefault();
        player2.turnleft = true;
      }
      // RIGHT (d)
      if (e.keyCode === 68){
        e.preventDefault();
        player2.turnright = true;
      }
      // FIRE (f)
      if (e.keyCode === 70){
        e.preventDefault();
        player2.fire = true;
      }
      // EMERGENCY BRAKE (q)
      if (e.keyCode === 81){
        player2.brake = true;
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
      // FIRE
      if (e.keyCode === 32){
        keys.fire = false;
      }

      // EMERGENCY BRAKE
      if (e.keyCode === 17){
        keys.brake = false;
      }


      // UP (w)
      if (e.keyCode === 87){
        e.preventDefault();
        player2.thrust = 0;
        this.game.nemesis.thrust = 0;
      }
      // DOWN (s)
      if (e.keyCode === 83){
        e.preventDefault();
        player2.thrust = 0;
        this.game.nemesis.thrust = 0;
      }
      // LEFT (a)
      if (e.keyCode === 65){
        e.preventDefault();
        player2.turnleft = false;
      }
      // RIGHT (d)
      if (e.keyCode === 68){
        e.preventDefault();
        player2.turnright = false;
      }
      // FIRE (f)
      if (e.keyCode === 70){
        e.preventDefault();
        player2.fire = false;
      }
      // EMERGENCY BRAKE (q)
      if (e.keyCode === 81){
        player2.brake = false;
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
    if (this.keys.fire === true){
      this.game.ship.fireBullet()
    };

    if (this.keys.brake === true){
      this.game.ship.emergencyBrake()
    };


    if (this.player2.thrust === -1){

      this.game.nemesis.power(-1) // thrust
    };
    if (this.player2.thrust === 1){

      this.game.nemesis.power(1)
    };
    if (this.player2.turnleft === true){

      this.game.nemesis.rotateLeft()
    };
    if (this.player2.turnright === true){
      this.game.nemesis.rotateRight()
    };
    if (this.player2.fire === true){
      this.game.nemesis.fireBullet()
    };

    if (this.player2.brake === true){
      this.game.nemesis.emergencyBrake()
    };



  }


  GameView.prototype.updateStats = function () {
    this.updatePlayer1();
    this.updatePlayer2();
    // this.updateLives();
    this.updateRounds();
  };

  GameView.prototype.updatePlayer1 = function () {
    var shieldbar = document.getElementById('shield-status')
    shieldbar.max = 3;
    $(shieldbar).val(this.game.ship.shields).css({'background-color':'red'})

    $("div.lives-count").html(" " + this.game.ship.lives)
    // $("div.shield-status").html(" " + this.game.ship.shields)
  };

  GameView.prototype.updatePlayer2 = function () {
    var shieldbar = document.getElementById('shield-status_p2')
    shieldbar.max = 3;
    $(shieldbar).val(this.game.nemesis.shields).css({'background-color':'red'})
    $("div.lives-count_p2").html(" " + this.game.nemesis.lives)
    // $("div.shield-status").html(" " + this.game.ship.shields)
  };

  // GameView.prototype.updateLives = function () {
  //   $("div.lives-count").html(" " + this.game.ship.lives)
  // };

  GameView.prototype.updateRounds = function () {
    $("div.rounds-count").html(" " + this.game.round)
  };

})();
