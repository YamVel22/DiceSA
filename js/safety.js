//author Yamkelani
// patched logic
//do not change name
//this JS is linked to the game.html

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

function updatePlayerNames() {
  document.getElementById("name1").innerText = player1.name;
  document.getElementById("name2").innerText = player2.name;
}

updatePlayerNames();

let turns = 0;
let isRolling = false;

document.querySelector("button").addEventListener("click", function () {
  if (!isRolling && turns < 6) {
    isRolling = true;
    currentFace1 = updateDice(dice1, currentFace1, player1);
    currentFace2 = updateDice(dice2, currentFace2, player2);
    turns++;
  } else if (!isRolling) {
    endGame();
  }
});

function endGame() {
  let winner;
  if (player1.score > player2.score) {
    winner = player1;
  } else if (player2.score > player1.score) {
    winner = player2;
  }

  const resultElement = document.getElementById("result");
  if (winner) {
    resultElement.innerText = `Awe🇿🇦, ${winner.name}! You are the top dawg!`;
  } else {
    resultElement.innerText =
      "That's tough👀, both of you are standing on business!";
  }

  let countdown = 7;
  const countdownElement = document.getElementById("countdown");

  const countdownInterval = setInterval(() => {
    countdownElement.innerText = `Mandela effect in ${countdown} seconds...`;
    countdown--;

    if (countdown < 0) {
      clearInterval(countdownInterval);

      turns = 0;
      player1.score = 0;
      player2.score = 0;
      updateScore(player1, 0);
      updateScore(player2, 0);
      resultElement.innerText = "";
      countdownElement.innerText = "";
      isRolling = false;
    }
  }, 1000);
}

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
    face.classList.remove("fadeOut");
    face.classList.add("hidden");
  }, 900);
}

function rollDice(diceElement) {
  diceElement.classList.add("roll");
}

function stopRoll(diceElement) {
  diceElement.classList.remove("roll");
}

function updateDice(diceElement, currentFace, player) {
  hideFace(currentFace);
  rollDice(diceElement); // Add rolling animation class here

  const roll = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6

  switch (roll) {
    case 1:
      currentFace = diceElement.querySelector(".dot");
      console.log("Dice landed on: 1");
      break;
    case 2:
      currentFace = diceElement.querySelector(".two");
      console.log("Dice landed on: 2");
      break;
    case 3:
      currentFace = diceElement.querySelector(".three");
      console.log("Dice landed on: 3");
      break;
    case 4:
      currentFace = diceElement.querySelector(".four");
      console.log("Dice landed on: 4");
      break;
    case 5:
      currentFace = diceElement.querySelector(".five");
      console.log("Dice landed on: 5");
      break;
    case 6:
      currentFace = diceElement.querySelector(".six");
      console.log("Dice landed on: 6");
      break;
  }

  showFace(currentFace);
  setTimeout(function () {
    stopRoll(diceElement); // Remove rolling animation class after delay
    updateScore(player, roll); // Update score with the random roll
    isRolling = false;
  }, 3000);

  return currentFace;
}

function updateScore(player, num) {
  player.score += num;
  document.getElementById(`score${player.number}`).innerText = player.score;
}

let currentFace1 = dice1.querySelector(".six");
let currentFace2 = dice2.querySelector(".six");

function quitPage() {
  window.location.replace("https://youtu.be/dXEVs32KHuo?si=7ygkSLpMHe3CbF3j");
}

function goBack() {
  window.location.href = "rules.html";
}
