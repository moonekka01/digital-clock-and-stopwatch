/* ===================================================
   1. DIGITAL CLOCK LOGIC
   =================================================== */
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    const am_pm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; 

    // Add leading zeros
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds} ${am_pm}`;
}

// Start clock immediately and update every second
updateClock();
setInterval(updateClock, 1000);


/* ===================================================
   2. STOPWATCH LOGIC
   =================================================== */
let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function startStopwatch() {
    clearInterval(timerInterval); 
    
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function updateTime() {
        elapsedTime = Date.now() - startTime;
        
        let hours = Math.floor(elapsedTime / 3600000);
        let minutes = Math.floor((elapsedTime % 3600000) / 60000);
        let seconds = Math.floor((elapsedTime % 60000) / 1000);
        let milliseconds = Math.floor((elapsedTime % 1000) / 10); 

        hours = String(hours).padStart(2, '0');
        minutes = String(minutes).padStart(2, '0');
        seconds = String(seconds).padStart(2, '0');
        milliseconds = String(milliseconds).padStart(2, '0');

        document.getElementById('stopwatch').textContent = `${hours}:${minutes}:${seconds}.${milliseconds}`;
    }, 10); 
}

function stopStopwatch() {
    clearInterval(timerInterval);
}

function resetStopwatch() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    document.getElementById('stopwatch').textContent = "00:00:00.00";
}