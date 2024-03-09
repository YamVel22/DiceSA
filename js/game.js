var dice1, dice2, cube1, cube2;
dice1 = document.getElementById("dice1");
dice2 = document.getElementById("dice2");
cube1 = document.getElementById("cube1");
cube2 = document.getElementById("cube2");

var min = 1;
var max = 24;

dice1.onclick = function () {
  rollDice("player1", cube1);
};

dice2.onclick = function () {
  rollDice("player2", cube2);
};

function rollDice(player, cube) {
  var xRand = getRandom(max, min);
  var yRand = getRandom(max, min);

  cube.style.webkitTransform =
    "rotateX(" + xRand + "deg) rotateY(" + yRand + "deg)";
  cube.style.transform = "rotateX(" + xRand + "deg) rotateY(" + yRand + "deg)";

  var total = xRand / 90 + yRand / 90;
  showResult(player, total);
}

function showResult(player, total) {
  var result = document.getElementById("result");
  var currentPlayer = document
    .getElementById(player)
    .getElementsByTagName("h2")[0].textContent;

  result.textContent = currentPlayer + " scored " + total + " points.";

  // Compare scores to determine the winner
  var previousScore = parseFloat(result.dataset.score);
  if (isNaN(previousScore) || total > previousScore) {
    result.dataset.score = total;
    result.textContent += " You are the current leader!";
  } else if (total === previousScore) {
    result.textContent += " It's a tie!";
  } else {
    result.textContent += " Maybe next time!";
  }
}

function getRandom(max, min) {
  return (Math.floor(Math.random() * (max - min)) + min) * 90;
}
