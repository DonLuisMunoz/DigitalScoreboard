let HomeScoreEl = document.getElementById("HomeScore")
let Timer = document.getElementById("Timer")
let AwayScoreEl = document.getElementById("AwayScore")
let Start = document.getElementById("GameStart")
let Stop = document.getElementById("GameStop")
let Reset = document.getElementById("GameReset")



let HomeScore = 0
let AwayScore = 0

// ------- Home Functions -------

function HomeIncrement1() {
    HomeScore += 1
    HomeScoreEl.textContent = HomeScore
}


function HomeIncrement2() {
    HomeScore += 2
    HomeScoreEl.textContent = HomeScore
}

function HomeIncrement3() {
    HomeScore += 3
    HomeScoreEl.textContent = HomeScore
}


//----- Away Functions ------



function AwayIncrement1() {
    AwayScore += 1
    AwayScoreEl.textContent = AwayScore
}

function AwayIncrement2() {
    AwayScore += 2
    AwayScoreEl.textContent = AwayScore
}

function AwayIncrement3() {
    AwayScore += 3
    AwayScoreEl.textContent = AwayScore
}


// -------Timer Functions-----

function GameReset() {
    // Reset the variables
    HomeScore = 0
    AwayScore = 0

    // Update the screen
    HomeScoreEl.textContent = "000"
    AwayScoreEl.textContent = "000"
}

let timerInterval;

function GameStart() {
    // make sure we dont start multiple timers at once
    clearInterval(timerInterval)



    const display = document.getElementById("Timer-Display")
    let duration = 60 * 15 // 15 minutes in seconds
    let timer = duration, minutes, seconds;

    timerInterval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        // Adding leading zeros of minutes/seconds are less than 10

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        display.textContent = minutes + ':' + seconds;

        if (--timer < 0) {
            clearInterval(timerInterval); // stops teh timer when it reaches zero
            display.textContent - "Time's up!";
            alert("Time's up!");
        }
    }, 1000); // Runs every 1 second
}

function GameStop() {
    clearInterval(timerInterval); // this pauses the timer
}