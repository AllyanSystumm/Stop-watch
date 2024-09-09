let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');
let display = document.getElementById('display');

let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let running = false;

function updateDisplay() {
    let sec = seconds < 10 ? '0' + seconds : seconds;
    let min = minutes < 10 ? '0' + minutes : minutes;
    let hour = hours < 10 ? '0' + hours : hours;
    display.textContent = `${hour}:${min}:${sec}`;
}

function startTimer() {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            seconds++;
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
                if (minutes >= 60) {
                    minutes = 0;
                    hours++;
                }
            }
            updateDisplay();
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    running = false;
}

function resetTimer() {
    clearInterval(timer);
    running = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
