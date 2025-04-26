const answers = [
  "Glukoza",
  "Fruktoza",
  "Sachroza",
  "Skrob",
  "Glykogen",
  "Manoza",
  "Riboza",
];
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("ahoj").play();
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
  .set(1, 800)
  .set(2, 700)
  .set(3, 600)
  .set(4, 500)
  .set(5, 400)
  .set(6, 300)
  .set(7, 200)
  .set(8, 100);

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
for (let x = 1; x < 9; x++) {
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

// Wrong answer
const wrongSound = new Audio("sounds/sounds_wrong.mp3");
wrongBtn.addEventListener("click", () => {
  wrongCounter += 1;
  wrongSound.play();
});
