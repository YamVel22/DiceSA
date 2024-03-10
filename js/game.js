const dice1 = document.querySelector("#dice1");
const dice2 = document.querySelector("#dice2");

const player1 = {
  name: localStorage.getItem("player1Name") || "Player One",
  score: 0,
  number: 1,
};

const player2 = {
  name: localStorage.getItem("player2Name") || "Player Two",
  score: 0,
  number: 2,
};

// Function to update the player names on the HTML page
function updatePlayerNames() {
  document.getElementById("name1").innerText = player1.name;
  document.getElementById("name2").innerText = player2.name;
}

// Call the function to update player names initially
updatePlayerNames();

// Add event listener to the button for rolling the dice
document.querySelector("button").addEventListener("click", function () {
  currentFace1 = updateDice(dice1, currentFace1, player1);
  currentFace2 = updateDice(dice2, currentFace2, player2);
});

function showFace(face) {
  face.classList.add("fadeIn");
  setTimeout(function () {
    face.classList.remove("fadeOut");
    face.classList.remove("hidden");
  }, 900);
}

function hideFace(face) {
  face.classList.add("fadeOut");
  setTimeout(function () {
    face.classList.remove("fadeIn");
    face.classList.remove("fadeOut"); // Add this line to remove "fadeOut" class
    face.classList.add("hidden");
  }, 900);
}

function rollDice(diceElement) {
  diceElement.classList.add("roll");
}

function stopRoll(diceElement) {
  diceElement.classList.remove("roll");
}

function generateNum() {
  return Math.floor(Math.random() * 6) + 1;
}

function updateDice(diceElement, currentFace, player) {
  hideFace(currentFace);
  rollDice(diceElement);

  const num1 = generateNum();

  // Ensure a 10% probability of both dice being the same number
  const num2 = Math.random() < 0.01 ? num1 : generateNum();

  switch (num1) {
    case 1:
      currentFace = diceElement.querySelector(".dot");
      break;
    case 2:
      currentFace = diceElement.querySelector(".two");
      break;
    case 3:
      currentFace = diceElement.querySelector(".three");
      break;
    case 4:
      currentFace = diceElement.querySelector(".four");
      break;
    case 5:
      currentFace = diceElement.querySelector(".five");
      break;
    case 6:
      currentFace = diceElement.querySelector(".six");
      break;
  }

  showFace(currentFace);
  setTimeout(function () {
    stopRoll(diceElement);
    updateScore(player, num1 + num2);
  }, 3000);

  return currentFace;
}

function updateScore(player, num) {
  player.score += num;
  document.getElementById(`score${player.number}`).innerText = player.score;
}

// Initialize currentFace variables
let currentFace1 = dice1.querySelector(".six");
let currentFace2 = dice2.querySelector(".six");
