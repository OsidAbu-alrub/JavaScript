const rollBtn = document.querySelector(".roll-btn");
const players = document.getElementsByClassName("player");
const currentPlayer = document.querySelector(".player-turn");
let playerTurn = 0;

rollBtn.addEventListener("click", function () {
  const val = Math.floor(Math.random() * 6) + 1;

  let diceResult = players[playerTurn].querySelector(".dice-result");
  const scoreWrapper = players[playerTurn].querySelector(".score-wrapper");

  diceResult.textContent = val;
  scoreWrapper.textContent = parseInt(scoreWrapper.textContent) + val;
  diceResult.classList.toggle("turn");

  if (parseInt(scoreWrapper.textContent) + val >= 20) {
    console.log("test");
    rollBtn.textContent = playerTurn + 1 + " Wins! 🎉";
    reset();
  } else 
  {
    // switch turns
    if (playerTurn) {
      playerTurn = 0;
    } else {
      playerTurn = 1;
    }
    diceResult = players[playerTurn].querySelector(".dice-result");
    diceResult.classList.toggle("turn");

    currentPlayer.textContent = playerTurn + 1;
  }
});

function reset() {
  playerTurn = 0;
  let diceResult = players[playerTurn].querySelector(".dice-result");
  currentPlayer.textContent = playerTurn + 1;
  diceResult.classList.add("turn");
  rollBtn.textContent = "Roll Dice 🎲";
}
