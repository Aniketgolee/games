const game = () => {
  let player = 0;
  let Computer = 0;
  let heading = 0;
};
const playGame = () => {
  const rockBtn = document.querySelector(".ock");
  const paperBtn = document.querySelector(".paper");
  const scissorBtn = document.querySelector("scissors");
  const playerOptions = [rockBtn, paperBtn, scissorBtn];
  const computerOptions = ["rock", "paper", "scissors"];
};

playerOptions.forEach((option) => {
  option.addEventListener("click", function () {
    const moveleft = document.querySelector(".moveleft");
    moves++;
    moveleft.innerText = `Moves Left:${10 - moves}`;

    const choiseNumber = Math.floor(Math.random() * 3);
    const computerChoice = computerOptions[choiseNumber];
  });
});
