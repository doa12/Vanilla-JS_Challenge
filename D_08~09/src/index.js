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
    document.querySelector("#result").innerText = "You win!";
  } else {
    document.querySelector("#result").innerText = "You lose!";
  }
}

guessNum.addEventListener("input", userNum);
// guessNum의 이벤트를 click으로 설정하면 제대로 실행이 안 되는 경우가 있음!
randomGame.addEventListener("submit", submitInput);

// Math.round : 반올림
// Math.ceil : 올림
// Math.floor : 버림

// complete!