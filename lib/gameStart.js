function gameViewStart(){
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

  gameView = new Asteroids.GameView(game, ctx);
  gameView.start();
}

function page1() {
el = document.getElementById('page1');
el.style.visibility = 'hidden';
el = document.getElementById('page2');
el.style.visibility = 'visible';
}

function page2() {
el = document.getElementById('page2');
el.style.visibility = 'hidden';
el = document.getElementById('startGame');
el.style.visibility = 'visible';
}


function launchGame() {
el = document.getElementById('startGame');
el.style.visibility = 'hidden';
gameViewStart();
// el.style.visibility = (el.style.visibility == 'visible') ? 'hidden' : 'visible';
}
// window.onload = overlay;


function restart(){
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

gameViewStart();
}
