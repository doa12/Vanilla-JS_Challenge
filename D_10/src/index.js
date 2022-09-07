import "./style.css";

const clock = document.querySelector("h2#clock");

function dCounter() {
  const today = new Date();
  const dDay = new Date("2022-12-25 00:00");
  // 시간을 지정하지 않으면 해당 날짜의 현재 시각까지로 카운트됨
  const counter = dDay - today;

  const gDay = Math.floor(counter / (1000 * 60 * 60 * 24));
  const gHrs = Math.floor((counter / (1000 * 60 * 60)) % 24);
  const gMin = Math.floor((counter / (1000 * 60)) % 60);
  const gSec = Math.floor((counter / 1000) % 60);
  clock.innerText = `${gDay}d ${gHrs}h ${gMin}m ${gSec}s`;
}

dCounter();
setInterval(dCounter, 1000);

// today 대신 date로 간단하게 써도 됨
// today.getDate();
// today.getDay();
// today.getFullYear();
// today.getHours();
// today.getMinutes();
// today.getSeconds();

// .padStart, .padEnd는 String에서만 적용 가능한 속성
// "1".padStart(2, "0") : 1이 2자리 수가 아니므로 앞에 0을 붙여라 -> 01
// 이미 2자리인 수는 0이 붙지 않음
// "1".padEnd(2, "0") : 1이 2자리 수가 아니므로 뒤에 0을 붙여라 -> 10

// const day = String(today.getDay()).padStart(2, "0");
// const hrs = String(today.getHours()).padStart(2, "0");
// const mins = String(today.getMinutes()).padStart(2, "0");
// const secs = String(today.getSeconds()).padStart(2, "0");
// clock.innerText = `${day}d ${hrs}h ${mins}m ${secs}s`;
