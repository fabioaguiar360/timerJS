const timerDisplay = document.querySelector('#timer-display');
const startTimerBtn = document.querySelector('#startTimerBtn');
const pauseTimerBtn = document.querySelector('#pauseTimerBtn');
const clearTimerBtn = document.querySelector('#clearTimerBtn');
let seconds = 0;
let timer;
let interval;

function getTimeFromSeconds(seconds){
    // Date receve like paramenter miliseconds

    const dateTimer = new Date(seconds * 1000);
    return dateTimer.toLocaleTimeString('PT', { 
        hour12: false, 
        timeZone: 'UTC'
    });

}

function startTimer(){
    timer = setInterval(function(){ 
        seconds++;
        timerDisplay.innerHTML = getTimeFromSeconds(seconds);
    },1000);
}

startTimerBtn.addEventListener('click', function(event){
    clearInterval(timer);
    timerDisplay.className = '';
    startTimer();
});

pauseTimerBtn.addEventListener('click', function(event){
    timerDisplay.className = 'timer-pause';
    clearInterval(timer);
});

clearTimerBtn.addEventListener('click', function(event){
    timerDisplay.className = '';
    seconds = 0;
    clearInterval(timer);
    const zeroTimer = getTimeFromSeconds(seconds);
    timerDisplay.innerHTML = zeroTimer;

});