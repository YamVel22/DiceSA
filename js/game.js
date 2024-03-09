var dice1, dice2, cube1, cube2;
dice1 = document.getElementById("dice1");
dice2 = document.getElementById("dice2");
cube1 = document.getElementById("cube1");
cube2 = document.getElementById("cube2");

var min = 1;
var max = 24;

var rollsPlayer1 = 0;
var rollsPlayer2 = 0;
var player1Score = 0;
var player2Score = 0;

dice1.onclick = function () {
  rollDice("player1", cube1);
};

dice2.onclick = function () {
  rollDice("player2", cube2);
};

function rollDice(player, cube) {
  if (player === "player1" && rollsPlayer1 < 2) {
    rollsPlayer1++;
    var xRand = getRandom(max, min);
    var yRand = getRandom(max, min);

    cube.style.webkitTransform =
      "rotateX(" + xRand + "deg) rotateY(" + yRand + "deg)";
    cube.style.transform =
      "rotateX(" + xRand + "deg) rotateY(" + yRand + "deg)";

    var total = xRand / 90 + yRand / 90;
    player1Score += total;
    document.getElementById("player1Score").textContent =
      "Score: " + player1Score;
  }

  if (player === "player2" && rollsPlayer2 < 2) {
    rollsPlayer2++;
    var xRand = getRandom(max, min);
    var yRand = getRandom(max, min);

    cube.style.webkitTransform =
      "rotateX(" + xRand + "deg) rotateY(" + yRand + "deg)";
    cube.style.transform =
      "rotateX(" + xRand + "deg) rotateY(" + yRand + "deg)";

    var total = xRand / 90 + yRand / 90;
    player2Score += total;
    document.getElementById("player2Score").textContent =
      "Score: " + player2Score;
  }
}

document.getElementById("calculate").onclick = function () {
  calculateScore();
};

function calculateScore() {
  if (rollsPlayer1 === 2 && rollsPlayer2 === 2) {
    var result = document.getElementById("result");

    if (player1Score > player2Score) {
      result.textContent = "Player 1 is the winner!";
    } else if (player2Score > player1Score) {
      result.textContent = "Player 2 is the winner!";
    } else {
      result.textContent = "It's a tie!";
    }
  }
}

function getRandom(max, min) {
  return (Math.floor(Math.random() * (max - min)) + min) * 90;
}
