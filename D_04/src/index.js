// <⚠️ DONT DELETE THIS ⚠️>
import "./style.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const title = document.querySelector("h2");

const superEventHandler = {
  handleEnter: function () {
    title.innerText = "Here it is!";
    title.style.color = colors[0];
  },
  handleLeave: function () {
    title.innerText = "Where are you?";
    title.style.color = colors[4];
  },
  handleResize: function () {
    title.innerText = "Window was resized!";
    title.style.color = colors[1];
  },
  handleRight: function () {
    title.innerText = "Contextmenu means right click?";
    title.style.color = colors[3];
  }
};

title.addEventListener("mouseenter", superEventHandler.handleEnter);
title.addEventListener("mouseleave", superEventHandler.handleLeave);
window.addEventListener("resize", superEventHandler.handleResize);
window.addEventListener("contextmenu", superEventHandler.handleRight);

// complete!