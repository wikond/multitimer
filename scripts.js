function Timer(startTimeStamp) {
    this.timeStampID = startTimeStamp;
    this.startTimeStamp = startTimeStamp;
    this.pauseTimeStamp = startTimeStamp;
    this.stopTimeStamp = startTimeStamp;
    this.timerInt = null;
    this.status = 0;
    this.displayTimer = () => {
        let mainEl = document.querySelector('#timers');
        let divEl = document.createElement('div');
        let timerEl = document.createElement('div');
        let clockEl = document.getElementById('clock');
        let timeEl = document.createElement('div');
        let dateEl = document.createElement('div');
        let buttDivEl = document.createElement('div');
        let buttStart = document.createElement('button');
        let buttPause = document.createElement('button');
        let buttStop = document.createElement('button');
        let timeDate;

        timeEl.classList.add('clockBox')
        //dateEl.classList.add('clockBox')
        //dateEl.id = 'date';
        divEl.classList.add('divBox', 'col-2', 'm-2','align-self-center');
        divEl.id = this.timeStampID + 'divBox';
        timeEl.id = this.timeStampID;
        buttStart.classList.add('btn',  'btn-secondary','m-2');
        buttStart.id = 'buttStart' + this.timeStampID;
        buttPause.classList.add('btn',  'btn-secondary','m-2');
        buttPause.id = 'buttPause' + this.timeStampID;
        buttStop.classList.add('btn',  'btn-secondary','m-2');
        buttStop.id = 'buttStop' + this.timeStampID;

        clockEl.appendChild(timeEl);
        clockEl.appendChild(dateEl);
        mainEl.appendChild(divEl);
        divEl.innerText = "Timer";
        //timerEl.innerText = timerNumbers(timerEl, this.startTimeStamp);
        timerNumbers(this.timeStampID, this.startTimeStamp);
        divEl.appendChild(timeEl);
        divEl.appendChild(buttDivEl);
        buttDivEl.appendChild(buttStart);
        //buttDivEl.appendChild(buttPause); //to be programmed
        buttDivEl.appendChild(buttStop);
        buttStart.innerText = 'Start';
        buttPause.innerText = 'Pause';
        buttStop.innerText = 'Stop';
        buttStart.addEventListener('click', this.startTimer);
        buttPause.addEventListener('click', this.pauseTimer);
        buttStop.addEventListener('click', this.stopTimer);
    }
    this.startTimer = () => {
        let timerDate = new Date();
        console.log('start');
        if (this.status == 0) this.startTimeStamp = timerDate.getTime();
        if (this.status !== 1) this.timerInt = setInterval(() => {
            this.pauseTimeStamp = timerNumbers(this.timeStampID, this.startTimeStamp);
        }, 100);
        this.status = 1;
    }
    this.pauseTimer = () => {
        this.status = 2;
        console.log('pause');
        clearInterval(this.timerInt);
    }
    this.stopTimer = () => {
        this.status = 0;
        console.log('stop');
        clearInterval(this.timerInt);
    }

}
const $timers = []; // array of timers

const timerNumbers = (divID, startTime) => {
    let currentDate = new Date();
    let timeStamp = currentDate.getTime()
    let timerTimeSpan = timeStamp - startTime;
    let timerHour = 0;
    let timerMinute = 0;
    let timerSecond = 0;

    let timerSeconds = Math.floor(timerTimeSpan / 1000);
    timerSecond = timerSeconds % 60;

    let timerMinutes = Math.floor(timerSeconds / 60);
    timerMinute = (timerMinutes) % (60);

    let timerHours = Math.floor(timerMinutes / 60);
    timerHour = (timerHours) % (60);

    if (timerHour < 10) timerHour = "0" + timerHour;
    if (timerMinute < 10) timerMinute = "0" + timerMinute;
    if (timerSecond < 10) timerSecond = "0" + timerSecond;

    let timerTime = timerHour + ":" + timerMinute + ":" + timerSecond + " ";
    //document.getElementById("time").innerText = timerTime;
    let divEl = document.getElementById(divID);
    //document.getElementById('clock').textContent = clockDate + clockTime;
    divEl.textContent = timerTime;
    //setTimeout(timer, 1000);
    return timeStamp;
}

const displayTimer = () => {
    let mainEl = document.querySelector('#container');
    let divEl = document.createElement('div');
    let timerEl = document.createElement('div');
    let clockEl = document.getElementById('clock');
    let timeEl = document.createElement('div');
    let dateEl = document.createElement('div');
    let buttDivEl = document.createElement('div');
    let buttStart = document.createElement('button');
    let buttPause = document.createElement('button');
    let buttStop = document.createElement('button');
    let timeDate;

    timeEl.classList.add('clockBox')
    dateEl.classList.add('clockBox')
    timeEl.id = 'time';
    dateEl.id = 'date';
    divEl.classList.add('divBox');
    timerEl.id = 'timerBox';
    buttStart.classList.add('buttBox');
    buttPause.classList.add('buttBox');
    buttStop.classList.add('buttBox');

    clockEl.appendChild(timeEl);
    clockEl.appendChild(dateEl);
    mainEl.appendChild(divEl);
    divEl.innerText = "Timer";
    timerEl.innerText = timerNumbers();
    divEl.appendChild(timerEl);
    divEl.appendChild(buttDivEl);
    buttDivEl.appendChild(buttStart);
    buttDivEl.appendChild(buttPause);
    buttDivEl.appendChild(buttStop);
    buttStart.innerText = 'Start';
    buttPause.innerText = 'Pause';
    buttStop.innerText = 'Stop';

}

function darkLight() {
    containerBox = document.querySelector('body');
    if (containerBox.classList.contains('darkMode')) {
        containerBox.classList.remove('darkMode');
        document.documentElement.style.setProperty('--color', 'black');
        document.documentElement.style.setProperty('--background-color', 'white');
    }
    else {
        containerBox.classList.add('darkMode');
        document.documentElement.style.setProperty('--color', 'white');
        document.documentElement.style.setProperty('--background-color', ' rgb(44, 44, 44)');
    }
}

const addTimer = (e) => {
    currentDate = new Date();
    newTimer = new Timer(currentDate.getTime());
    $timers.push(newTimer);
    console.log($timers)
    $timers[$timers.length - 1].displayTimer();
}

const prepareDOMElements = () => {
    $taskBoxes = document.getElementsByClassName('taskBox');
    //console.log($taskBoxes);
}

const prepareDOMEvents = () => {
    let darkLightBtn = document.querySelector('#darkLight');
    darkLightBtn.addEventListener('click', darkLight);
    let newTimer = document.querySelector('#addTimer');
    newTimer.addEventListener('click', addTimer);
}

const main = () => {
    addTimer();
    //displayTimer();
    darkLight()
    prepareDOMElements();
    prepareDOMEvents();
}

document.addEventListener('DOMContentLoaded', main);