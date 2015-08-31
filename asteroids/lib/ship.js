(function (){
  window.Asteroids = window.Asteroids || {};

  var Util = new Asteroids.Util();


  var Ship = Asteroids.Ship = function (game){
    this.pos = game.randomPosition();
    this.vel = [0,0];
    this.radius = Ship.RADIUS;
    this.color = Ship.COLOR;
    this.game = game;

  };

  Util.inherits(Ship, Asteroids.MovingObject);

  Ship.RADIUS = 5
  Ship.COLOR = "#FF0000"




})();
