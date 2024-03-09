const dice1 = document.querySelector("#dice1");
const dice2 = document.querySelector("#dice2");

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

function updateDice(diceElement, currentFace) {
  hideFace(currentFace);
  rollDice(diceElement);
  const num = generateNum();

  switch (num) {
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
  }, 3000);

  return currentFace;
}

dice1.addEventListener("click", function () {
  currentFace1 = updateDice(dice1, currentFace1);
});

dice2.addEventListener("click", function () {
  currentFace2 = updateDice(dice2, currentFace2);
});

// Initialize currentFace variables
let currentFace1 = dice1.querySelector(".six");
let currentFace2 = dice2.querySelector(".six");
