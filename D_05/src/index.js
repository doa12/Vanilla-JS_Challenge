import "./styles.css";

const title = document.querySelector("h2");
const bg = document.querySelector("body");
const ACTIVE = "active";

// purple ver.
// function activator() {
//   const width = window.innerWidth;
//   if (width >= 720) {
//     title.classList.add(ACTIVE);
//     title.style.color = "#FFFFFF";
//     bg.style.backgroundColor = "#642EFE";
//   } else if (width < 720 && width >= 620) {
//     title.classList.add(ACTIVE);
//     title.style.color = "#FFFFFF";
//     bg.style.backgroundColor = "#8258FA";
//   } else if (width < 620 && width >= 520) {
//     title.classList.add(ACTIVE);
//     title.style.color = "#FFFFFF";
//     bg.style.backgroundColor = "#9F81F7";
//   } else {
//     title.classList.add(ACTIVE);
//     title.style.color = "#FFFFFF";
//     bg.style.backgroundColor = "#BCA9F5";
//   }
// }

// window.addEventListener("resize", activator);

// rainbow ver.
function rainbow() {
  const width = window.innerWidth;
  if (width >= 870) {
    title.classList.add(ACTIVE);
    title.style.color = "#FFFFFF";
    bg.style.backgroundColor = "#FE2E2E";
  } else if (width < 870 && width >= 800) {
    title.classList.add(ACTIVE);
    title.style.color = "#FFFFFF";
    bg.style.backgroundColor = "#FE9A2E";
  } else if (width < 800 && width >= 730) {
    title.classList.add(ACTIVE);
    title.style.color = "#FFFFFF";
    bg.style.backgroundColor = "#FACC2E";
  } else if (width < 730 && width >= 660) {
    title.classList.add(ACTIVE);
    title.style.color = "#FFFFFF";
    bg.style.backgroundColor = "#A5DF00";
  } else if (width < 660 && width >= 590) {
    title.classList.add(ACTIVE);
    title.style.color = "#FFFFFF";
    bg.style.backgroundColor = "#2E9AFE";
  } else if (width < 590 && width >= 520) {
    title.classList.add(ACTIVE);
    title.style.color = "#FFFFFF";
    bg.style.backgroundColor = "#2E2EFE";
  } else {
    title.classList.add(ACTIVE);
    title.style.color = "#FFFFFF";
    bg.style.backgroundColor = "#642EFE";
  }
}

window.addEventListener("resize", rainbow);
