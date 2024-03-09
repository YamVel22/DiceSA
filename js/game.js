//get the players names from the player pages//

// Get elements
let cube = document.getElementById("cube1");
let cube1 = document.getElementById("cube2");
let dice1 = document.getElementById("dice1");
let dice2 = document.getElementById("dice2");
let player1Score = document.getElementById("player1Score");
let player2Score = document.getElementById("player2Score");
let results = document.getElementById("results");

let min = 1;
let max = 24;

let player1TotalScore = 0;
let player2TotalScore = 0;

//Player 1's dice roll
dice1.onclick = function () {
  let xRand = getRandom(max, min);
  let yRand = getRandom(max, min);

  cube.style.webkitTranform =
    "rotateX(" + xRand + "deg) rotateY(" + yRand + "deg)";
  cube.style.transform = "rotateX(" + xRand + "deg) rotateY(" + yRand + "deg)";

  xRand = getRandom(max, min);
  yRand = getRandom(max, min);

  cube2.style.webkitTransform =
    "rotateX(" + xRand + "deg) rotateY(" + yRand + "deg)";
  cube2.style.transform = "rotateX(" + xRand + "deg) rotateY(" + yRand + "deg)";
};

//Player 2's dicce roll
dice2.onclick = function () {
  let xRand = getRandom(max, min);
  let yRand = getRandom(max, min);

  cube.style.webkitTranform =
    "rotateX(" + xRand + "deg) rotateY(" + yRand + "deg)";
  cube.style.transform = "rotateX(" + xRand + "deg) rotateY(" + yRand + "deg)";

  xRand = getRandom(max, min);
  yRand = getRandom(max, min);

  cube2.style.webkitTransform =
    "rotateX(" + xRand + "deg) rotateY(" + yRand + "deg)";
  cube2.style.transform = "rotateX(" + xRand + "deg) rotateY(" + yRand + "deg)";
};

function getRandom(max, min) {
  return (Math.floor(Math.random() * (max - min)) + min) * 90;
}
