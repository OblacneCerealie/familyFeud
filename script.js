const answers = [
  "Survey says: Pizza!",
  "Survey says: Vacation!",
  "Survey says: Ice Cream!",
  "Survey says: Family Time!",
  "Survey says: Road Trip!",
  "Survey says: Beach!",
  "Survey says: Movies!",
  "Survey says: Laughter!",
];

document.querySelectorAll(".flip-card").forEach((card, index) => {
  const button = card.querySelector(".front");
  const back = card.querySelector(".back");

  button.addEventListener("click", () => {
    if (!card.classList.contains("flipped")) {
      const randomAnswer = answers[index] || "Survey says: ???";
      back.textContent = randomAnswer;
      card.classList.add("flipped");
    }
  });
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
let currTeam = 1;
let team1Score = parseInt(localStorage.getItem("teamOneScore"));
let team2Score = parseInt(localStorage.getItem("teamTwoScore"));

// Selectovanie elementov na otazkach a pripocitavanie bodov timom za otazky
for (let x = 1; x < 9; x++) {
  const odpovedBtn = document.getElementById(String(x));
  if (odpovedBtn) {
    odpovedBtn.addEventListener("click", function () {
      console.log("CLICK");
      if (currTeam === 1) {
        team1Score += scoring.get(x);
      } else {
        team2Score += scoring.get(x);
      }
    });
  }
}
document.getElementById("back").addEventListener("click", () => {
  localStorage.setItem("teamOneScore", team1Score);
  localStorage.setItem("teamTwoScore", team2Score);
});
