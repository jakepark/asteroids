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

  var $shields_p2 = $("<div>").addClass("shields_p2").text("SHIELDS: ");
  var $shieldStatus_p2 = $("<progress>").attr('id', 'shield-status_p2')
    // .data('value', "0").data('max', "3");
  $shields_p2.append($shieldStatus_p2);
  $display.append($shields_p2);




  var $lives = $("<div>").addClass("lives").text("LIVES: ")
  var $livesCount = $("<div>").addClass("lives-count")
  $lives.append($livesCount)
  $display.append($lives);

  var $lives_p2 = $("<div>").addClass("lives_p2").text("LIVES: ")
  var $livesCount_p2 = $("<div>").addClass("lives-count_p2")
  $lives_p2.append($livesCount_p2)
  $display.append($lives_p2);

  var $rounds = $("<div>").addClass("rounds").text("ROUND: ")
  var $roundsCount = $("<div>").addClass("rounds-count")
  $rounds.append($roundsCount)
  $display.append($rounds);


})
