let secondIntervalId;
let nanoIntervalId;
let picoIntervalId;
let minuteIntervalId;
let hourIntervalId;
let timePico = 0;
let timeNano = 0;
let timeSec = 0;
let timeMin = 0;
let timeHour = 0;

function start() {
    picoIntervalId = setInterval(() => {
        let t = ++timePico;
        if(Math.abs(t) < 10) {
            document.getElementById("pico").innerHTML = "0" + t;
        } else {
            document.getElementById("pico").innerHTML = t;
        }
        if(timePico === 100) {
            timePico = 0;
        }
    }, 0.9);
    nanoIntervalId = setInterval(() => {
        let t = ++timeNano;
        if(Math.abs(t) < 10) {
            document.getElementById("nano").innerHTML = "0" + t;
        } else {
            document.getElementById("nano").innerHTML = t;
        }
        if(timeNano === 10) {
            timeNano = 0;
        }
    }, 100);
    secondIntervalId = setInterval(() => {
        let t = ++timeSec;
        if(Math.abs(t) < 10) {
            document.getElementById("second").innerHTML = "0" + t;
        } else {
            document.getElementById("second").innerHTML = t;
        }
        if(timeSec === 60) {
            timeSec = 0;
        }
    }, 1000);
    minuteIntervalId = setInterval(() => {
        let t = ++timeMin;
        if(Math.abs(t) < 10) {
            document.getElementById("minute").innerHTML = "0" + t;
        }else {
            document.getElementById("minute").innerHTML = t;
        }
        if(timeMin === 60) {
            timeMin = 0;
        }
    }, 60000);
    hourIntervalId = setInterval(() => {
        let t = ++timeHour;
        if(Math.abs(t) < 10) {
            document.getElementById("hour").innerHTML = "0" + t;
        } else {
            document.getElementById("hour").innerHTML = t
        }
        
        if(timeHour === 24) {
            timeHour = 0;
        }
    }, 3600000);
}

function stop() {
    clearInterval(picoIntervalId);
    clearInterval(nanoIntervalId);
    clearInterval(secondIntervalId);
    clearInterval(minuteIntervalId);
    clearInterval(hourIntervalId);
    console.log("Clicked stop button")
}