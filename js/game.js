// Get elements
let cube = document.getElementById("cube1");
let cube1 = document.getElementById("cube2");
let dice1 = document.getElementById("dice1");
let dice2 = document.getElementById("dice2");
let player1Score = document.getElementById("player1Score"); // Make sure this element exists in your HTML
let player2Score = document.getElementById("player2Score"); // Make sure this element exists in your HTML

let min = 1;
let max = 89;

// Fetch player names from local storage
const player1Name = localStorage.getItem("player1Name") || "Player 1";
const player2Name = localStorage.getItem("player2Name") || "Player 2";

// Display player names
document.getElementById("player1").querySelector("h2").textContent =
  player1Name;
document.getElementById("player2").querySelector("h2").textContent =
  player2Name;

// Player 1's dice roll
dice1.onclick = function () {
  rollDice(cube);
};

// Player 2's dice roll
dice2.onclick = function () {
  rollDice(cube1);
};

function rollDice(cubeElement) {
  let currentDice = getRandom(max, min);

  // Adjust probability of both dice having the same number to %
  const shouldHaveSameNumber = Math.random() <= 0.1;

  while (shouldHaveSameNumber && currentDice === cubeElement.previousDice) {
    currentDice = getRandom(max, min);
  }

  let xRand = currentDice;
  let yRand = getRandom(max, min);

  cubeElement.style.webkitTransform = `rotateX(${xRand}deg) rotateY(${yRand}deg)`;
  cubeElement.style.transform = `rotateX(${xRand}deg) rotateY(${yRand}deg)`;

  cubeElement.previousDice = currentDice;
}

function getRandom(max, min) {
  return (Math.floor(Math.random() * (max - min)) + min) * 90;
}
