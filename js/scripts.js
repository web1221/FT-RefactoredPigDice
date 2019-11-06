// BACK END LOGIC ------------

// PIG-DICE OBJECT:
function PigDice() {
  this.turnCounter = 0,
  this.playerOneScore = 0,
  this.playerTwoScore = 0
}

var diceRun = 0;

PigDice.prototype.switchMod = function(){
  var mod = this.turnCounter % 2
  switch (mod)
  {
    case 0:
    var playerOneScore = this.playerOneScore += diceRun;
    switchTurn()
    break;
    default:
    var playerTwoScore = this.playerTwoScore += diceRun;
    switchTurn()
  }
  this.turnCounter +=1;
}

PigDice.prototype.addDice = function(diceCount){
  if(diceCount === 1){
    switchTurn()
    this.turnCounter +=1;
    diceRun = 0;
    alert("You rolled a 1, Turn over!")
    $(".diceCount").text("")

  }
  else {
    diceRun += diceCount;
  }
  return diceRun;
}

// UI LOGIC ----------
var pigDice = new PigDice();

function switchTurn(){
  $('.playera').toggleClass("player1");
  $('.playerb').toggleClass("player2");
  $('.buttons').toggleClass("buttons2");
  $("#playerOneScore").text(pigDice.playerOneScore);
  $("#playerTwoScore").text(pigDice.playerTwoScore);
}

$(document).ready(function() {

  $("#rollDice").click(function() {
    var diceCount = Math.round(Math.random() * 5)+1
    $(".diceCount").append(diceCount, ", ")
    pigDice.addDice(diceCount);
  });

  $('#holdDice').click(function(){

    pigDice.switchMod();
    diceRun = 0;
    $(".diceCount").text("");

    PigDice.prototype.winner = function(){
      this.turnCounter +=1;
      $(".diceCount").text("");
      diceRun = 0
      this.playerTwoScore = 0;
      this.playerOneScore = 0;
      this.turnCounter = 0;
      this.switchMod();
      $("#playerOneScore").text("");
      $("#playerTwoScore").text("");
      };

    if(pigDice.playerOneScore >= 100){
      alert("Player1 Wins!");
      pigDice.winner();
    } else if (pigDice.playerTwoScore >= 100) {
      alert('player2 Wins!');
      pigDice.winner();
    } else {
      return;
    }
  });
});
