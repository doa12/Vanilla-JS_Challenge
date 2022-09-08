import "./style.css";

const randomGame = document.querySelector("#randomGame");
const setRange = document.querySelector("#setRange");
const guessNum = document.querySelector("#guessNum");

function userNum(event) {
  event.preventDefault();
  const noRange = setRange.value;
  guessNum.max = noRange;
}

function submitInput(event) {
  event.preventDefault();
  const guessN = guessNum.value;
  const maxNum = guessNum.max;
  const machineNum = Math.floor(Math.random() * maxNum + 1);
  document.querySelector(
    "#numStat"
  ).innerText = `You choose: ${guessN}, the machine chose: ${machineNum}`;
  if (parseInt(guessN) === machineNum) {
    document.querySelector("#result").innerText = "You Won!";
  } else {
    document.querySelector("#result").innerText = "You Lost!";
  }
}

guessNum.addEventListener("input", userNum);
randomGame.addEventListener("submit", submitInput);
