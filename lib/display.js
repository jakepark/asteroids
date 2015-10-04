$(document).ready(function(){

  var $display = $("div.display")

  var $shield = $("<div>").addClass("shield").text("SHIELDS: ");
  var $shieldStatus = $("<div>").addClass("shield-status")
  $shield.append($shieldStatus);
  $display.append($shield);

  var $lives = $("<div>").addClass("lives").text("LIVES: ")
  var $livesCount = $("<div>").addClass("lives-count")
  $lives.append($livesCount)
  $display.append($lives);


})
