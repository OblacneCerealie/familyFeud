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
document.getElementById("ready").addEventListener("click", () => {
  document.getElementById("teamOne");
});
