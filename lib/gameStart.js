function page1() {
  el = document.getElementById('page1');
  el.style.visibility = 'hidden';
  el = document.getElementById('page2');
  el.style.visibility = 'visible';
}

function page2() {
  el = document.getElementById('page2');
  el.style.visibility = 'hidden';
  el = document.getElementById('page3');
  el.style.visibility = 'visible';
}

function page3() {
  el = document.getElementById('page3');
  el.style.visibility = 'hidden';
  el = document.getElementById('startGame');
  el.style.visibility = 'visible';
}

function soloLaunch() {
  el = document.getElementById('startGame');
  el.style.visibility = 'hidden';
  gameSetup(1);
  // el.style.visibility = (el.style.visibility == 'visible') ? 'hidden' : 'visible';
}

function pvpLaunch() {
  el = document.getElementById('startGame');
  el.style.visibility = 'hidden';
  gameSetup(2);
  // el.style.visibility = (el.style.visibility == 'visible') ? 'hidden' : 'visible';
}
// window.onload = overlay;

function gameSetup(numPlayers){
  if (numPlayers === 1){
    var player2 = false;
  } else if (numPlayers === 2) {
    var player2 = true;
  }

  canvasEl = document.getElementById("game-canvas");

  game = new Asteroids.Game();
  ctx = canvasEl.getContext("2d");

  game.gamedone = false
  game.ship.safe = true
  game.nemesis.safe = true
  game.safety = true
  window.setTimeout(function () {
    game.ship.safe = false
    game.nemesis.safe = false
    game.safety = false
  }, 3000);


  var img_background = new Image();
  img_background.src = './img/space_blue.jpg'
  img_background.onload = function () {
    ctx.drawImage(img_background, 0, 0);
  };


  gameViewStart(game, ctx, player2)

}


function gameViewStart(game, ctx, player2){
  gameView = new Asteroids.GameView(game, ctx, player2);
  gameView.start();
}

function restart(){
  // var reset = document.getElementsByClassName('reset');
  // debugger
  // reset.style.visibility = 'hidden';

  var el = document.getElementById('gameOver');
  el.style.visibility = 'hidden';
  var el = document.getElementById('ending');
  el.style.visibility = 'hidden';
  var el = document.getElementById('winner-player');
  el.style.visibility = 'hidden';
  var el = document.getElementById('winner-nemesis');
  el.style.visibility = 'hidden';

  $(".player_stats").empty()


  delete game;
  delete gameView;

  // gameViewStart();
  var el = document.getElementById('page1');
  el.style.visibility = 'visible';


}
//
//
// (function (){
//   window.Asteroids = window.Asteroids || {};
//
//   var GameView = Asteroids.GameView = function(game, ctx) {
//     this.game = game;
//     this.ctx = ctx;
//
//     this.keys = {
//       thrust: 0,
//       turnleft: false,
//       turnright: false,
//       fire: false,
//       brake: false
//     }
//
//   }
// }
// // GameView.prototype.bindKeyHandlers = function() {
// bindKeyHandlers = function() {
//   var keys = this.keys;
//
//   var $el = $(document);
//   $el.keydown(function (e) {
//
//     // UP
//     if (e.keyCode === 38){
//       e.preventDefault();
//       keys.thrust = -1;
//     }
//     // DOWN
//     if (e.keyCode === 40){
//       e.preventDefault();
//       keys.thrust = 1;
//     }
//     // LEFT
//     if (e.keyCode === 37){
//       e.preventDefault();
//       keys.turnleft = true;
//     }
//     // RIGHT
//     if (e.keyCode === 39){
//       e.preventDefault();
//       keys.turnright = true;
//     }
//     // FIRE (SPACEBAR)
//     if (e.keyCode === 32){
//       e.preventDefault();
//       keys.fire = true;
//     }
//
//   }.bind(this))
//
//
// };
