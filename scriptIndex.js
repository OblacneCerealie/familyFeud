// JS file pre prepinanie medzi oknami -- iba na displayovanie skore -- mozno neskor spravim iba ako inline kod

let scoreA = localStorage.getItem("teamAScore");
let scoreB = localStorage.getItem("teamBScore");

const scoreTeamAIndex = document.getElementById("scoreATeam");
const scoreTeamBIndex = document.getElementById("scoreBTeam");

scoreTeamAIndex.textContent = `${localStorage.getItem("teamAName")} : ${
  scoreA || 0
}`;
scoreTeamBIndex.textContent = `${localStorage.getItem("teamBName")} : ${
  scoreB || 0
}`;
