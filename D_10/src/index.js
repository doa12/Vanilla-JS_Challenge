import "./style.css";

const clock = document.querySelector("h2#clock");

function counter() {
  const today = new Date();
  const dDay = new Date("2022-12-25 00:00");

  const calc = dDay - today;
  const gDay = Math.floor(calc / (1000 * 60 * 60 * 24));
  const gHrs = Math.floor((calc / (1000 * 60 * 60)) % 24);
  const gMin = Math.floor((calc / (1000 * 60)) % 60);
  const gSec = Math.floor((calc / 1000) % 60);

  // same as padStart
  const dStr = `${gDay < 10 ? `0${gDay}` : gDay}d`;
  const hStr = `${gHrs < 10 ? `0${gHrs}` : gHrs}h`;
  const mStr = `${gMin < 10 ? `0${gMin}` : gMin}m `;
  const sStr = `${gSec < 10 ? `0${gSec}` : gSec}s`;

  clock.innerText = `${dStr} ${hStr} ${mStr} ${sStr}`;
}

counter();
setInterval(counter, 1000);