
let countEl = document.getElementById("count-el")

let makeZeroEl = document.getElementById("makeZero-btn")
const video = document.querySelector("video")
let count = 0;



function feed() {
  video.currentTime = 0;
    video.play();
    count += 1
    countEl.innerText = count
}

function makeZero() {
  countEl.innerText  = 0
  makeZeroEl = countEl.innerText
  count = 0
}





