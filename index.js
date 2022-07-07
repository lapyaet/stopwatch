

const minute = document.querySelector("#countMin")
const second = document.querySelector("#countSec")
const alarm  = document.getElementById("audioTimer")
alarm.style.display = "none"

let count = 0
let timerId =0
function countingStart () {
    if (timerId !== 0) {
        return;
    }
    timerId =setInterval(function () {
        count++
       updateText(count)
       if(count % 60 === 0) {
        playAlarm();
    }
    },1000)
}

function countingStop () {
    second.innerText = "00" ;
    clearInterval(timerId);
    timerId = 0;
    count = 0;
    updateText(count);
}

function updateText (timer) {
    const min = Math.floor(timer/60) ;
    const sec = timer % 60 ;
    minute.innerText = min <10 ? "0" + min.toString() : min;
    second.innerText = sec <10 ? "0" + sec.toString() : sec;
}

function playAlarm() {
    alarm.play()
}