
const timer = document.getElementById("timer");
let timerInterval=null;
let timeCounter = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let miliseconds = 0;


function updateTimer(){
    miliseconds++;

    if(miliseconds == 100) {
        seconds++;
        miliseconds = 0;
    }
    
    if(seconds == 60) {
        minutes++;
        seconds=0;
    }

    if(minutes == 60) {
        hours++;
        minutes=0;
        seconds=0;
    }

    timer.innerHTML = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${miliseconds.toString().padStart(2, "0")}`;
    timeCounter += 10;
};

function startTimer(){
    if(timerInterval == null){
        timerInterval = setInterval(updateTimer, 10);
    }
};

function stopTimer(){
    clearInterval(timerInterval);
    timerInterval = null;
};

function resetTimer(){
    stopTimer();
    timeCounter = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    miliseconds = 0;
    timer.innerHTML = "00:00:00";

};

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
