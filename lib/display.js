$(document).ready(function(){

  var $display = $("div.display")

  // var $shields = $("<div>").addClass("shields").text("SHIELDS: ");
  // var $shieldStatus = $("<div>").addClass("shield-status")
  // $shields.append($shieldStatus);
  // $display.append($shields);


  var $shields = $("<div>").addClass("shields").text("SHIELDS: ");
  var $shieldStatus = $("<progress>").attr('id', 'shield-status')
    // .data('value', "0").data('max', "3");

  $shields.append($shieldStatus);
  $display.append($shields);


  var $lives = $("<div>").addClass("lives").text("LIVES: ")
  var $livesCount = $("<div>").addClass("lives-count")
  $lives.append($livesCount)
  $display.append($lives);

  var $rounds = $("<div>").addClass("rounds").text("ROUND: ")
  var $roundsCount = $("<div>").addClass("rounds-count")
  $rounds.append($roundsCount)
  $display.append($rounds);


})
