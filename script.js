const currGame = parseInt(localStorage.getItem("currentGame"));
let answers;
if (currGame === 1) {
  answers = [
    "Glucose",
    "Fructose",
    "Sucrose",
    "Starch",
    "Glycogen",
    "Mannose",
    "Ribose",
  ];
} else if (currGame === 2) {
  answers = [
    "Source of energy",
    "Storing energy",
    "Structural function",
    "Immune function",
  ];
} else if (currGame === 3) {
  answers = [
    "Honey",
    "Fruit",
    "Potatoes",
    "Bread/Pastry",
    "Rise",
    "Rolled oats",
    "Chocolate",
  ];
} else if (currGame === 4) {
  answers = ["Sweetener", "Beer production", "Perservative", "Lactose in milk"];
} else if (currGame === 5) {
  answers = [
    "Pastry - white bread",
    "Watermelon",
    "Potatoes",
    "White rice",
    "Cornflakes",
    "Candy",
    "Soft drinks",
  ];
} else if (currGame === 6) {
  answers = [
    "Subcutaneous fatty tissue",
    "Liver",
    "Muscles",
    "Your belly", // WTF uvidime ci toto este
  ];
} else if (currGame === 7) {
  answers = [
    "Cell wall of plants",
    "Vegetables",
    "Paper",
    "Textile",
    "Cotton wool",
  ];
} else if (currGame === 8) {
  answers = [
    "Diabetes",
    "Obesity",
    "Lactose intolerance",
    "Tooth decay",
    "Overeating",
  ];
} else if (currGame === 9) {
  answers = [
    "Solubility",
    "Solidness",
    "Optical activity",
    "Fragility",
    "Colourless",
    "Crystalline",
    "Sweet taste",
  ];
} else if (currGame === 10) {
  answers = ["Gluconic acid", "Glucuronic acid", "Glucitol", "Glucaric acid"];
} else {
  throw new Error("Nieco sa posralo");
}

// TOTO NEFUNGUJE A HADZE TO ERRORY DO KONZOLY ALE NEMAM TERAZ MENTALNU KAPACITU NA TO ABY SO TO RIESIL
window.addEventListener("DOMContentLoaded", () => {
  const soundPlay = document.getElementById("ahoj");
  soundPlay.play();
});

document.querySelectorAll(".flip-card").forEach((currElement, index) => {
  const button = currElement.querySelector(".front");
  const back = currElement.querySelector(".back");
  if (answers[index]) {
    button.addEventListener("click", () => {
      if (!currElement.classList.contains("flipped")) {
        // playing the audio
        new Audio("sounds/prompt_with_correct.mp3").play();

        const answer = answers[index] || "ERROR ERROR ERRROR KURVA";
        back.textContent = answer;
        currElement.classList.add("flipped");
      }
    });
  } else {
    button.classList.add("hidden");
  }
});

// Scoring System
const scoring = new Map();
scoring
  .set(1, 700)
  .set(2, 600)
  .set(3, 500)
  .set(4, 400)
  .set(5, 300)
  .set(6, 200)
  .set(7, 100);

let tempPoints = 0;
let scoreA = parseInt(localStorage.getItem("teamAScore")) || 0;
let scoreB = parseInt(localStorage.getItem("teamBScore")) || 0;
let wrongCounter = 0;

const wrongBtn = document.getElementById("wrong");
const pointBox = document.getElementById("point-box");
const teamA = document.getElementById("team-a");
const teamB = document.getElementById("team-b");

function updatePointBox() {
  pointBox.textContent = `Points: ${tempPoints}`;
}

teamA.textContent = `${localStorage.getItem("teamAName")} : ${scoreA}`;
teamB.textContent = `${localStorage.getItem("teamBName")} : ${scoreB}`;

// Selectovanie elementov na otazkach a pripocitavanie bodov timom za otazky
for (let x = 1; x < 8; x++) {
  const odpovedBtn = document.getElementById(String(x));
  if (odpovedBtn) {
    odpovedBtn.addEventListener("click", function () {
      tempPoints += scoring.get(x);
      updatePointBox();
    });
  }
}

document.getElementById("btn-left").addEventListener("click", () => {
  scoreA += tempPoints;
  teamA.textContent = `${localStorage.getItem("teamAName")} : ${scoreA}`;
  tempPoints = 0;
  updatePointBox();
});

document.getElementById("btn-right").addEventListener("click", () => {
  scoreB += tempPoints;
  teamB.textContent = `${localStorage.getItem("teamBName")} : ${scoreB}`;
  tempPoints = 0;
  updatePointBox();
});

// storaging score after clicking the back button
document.getElementById("back").addEventListener("click", () => {
  localStorage.setItem("teamAScore", scoreA);
  localStorage.setItem("teamBScore", scoreB);
});

// Wrong answer -- Treba este nejaky counter ci co !!!
const wrongSound = new Audio("sounds/sounds_wrong.mp3");
wrongBtn.addEventListener("click", () => {
  wrongCounter += 1;
  wrongSound.play();
});
