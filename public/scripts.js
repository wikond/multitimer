function Timer(startTimeStamp) {
    this.timeStampID = startTimeStamp;
    this.startTimeStamp = startTimeStamp;
    this.pauseTimeStamp = startTimeStamp;
    this.stopTimeStamp = startTimeStamp;
    this.timeStamp = startTimeStamp;
    this.timerInt = null;
    this.status = 0;
    this.displayTimer = () => {
        let mainEl = document.querySelector('#timers');
        let divEl = document.createElement('div');
        let timerEl = document.createElement('div');
        let headerEl = document.createElement('textarea');

        let clockEl = document.getElementById('clock');
        let timeEl = document.createElement('div');
        let dateEl = document.createElement('div');
        let div1El = document.createElement('div');
        let div2El = document.createElement('div');
        let div3El = document.createElement('div');
        let buttDivEl = document.createElement('div');
        let buttStart = document.createElement('button');
        let buttPause = document.createElement('button');
        let buttStop = document.createElement('button');
        let timeDate;

        //dateEl.classList.add('clockBox')
        //dateEl.id = 'date';
        headerEl.classList.add('timerHeader', 'text-center');
        headerEl.placeholder = 'Timer Name';
        headerEl.rows = 1;
        headerEl.cols = 12;
        divEl.classList.add('col-sm-8', 'col-12', 'col-md-4', 'col-lg-4', 'col-xxl-3', 'm-2', 'border', 'rounded', 'align-content-center', 'text-center', 'glow');
        divEl.id = this.timeStampID + 'divBox';
        div1El.classList.add('row', 'm-2', 'mt-3');
        div2El.classList.add('row', 'clockBox', 'mt-3');
        div3El.classList.add('mt-3');
        timeEl.classList.add('display-6', 'col', 'text-center');
        timeEl.id = this.timeStampID;
        buttStart.classList.add('btn', 'btn-primary', 'me-1', 'mb-3');
        buttStart.id = 'buttStart' + this.timeStampID;
        buttPause.classList.add('btn', 'btn-warning', 'me-1', 'mb-3');
        buttPause.id = 'buttPause' + this.timeStampID;
        buttStop.classList.add('btn', 'btn-danger', 'mb-3');
        buttStop.id = 'buttStop' + this.timeStampID;


        divEl.appendChild(div1El);
        divEl.appendChild(div2El);
        divEl.appendChild(div3El);

        //divEl.appendChild(div3El);

        div1El.appendChild(headerEl);
        clockEl.appendChild(timeEl);
        clockEl.appendChild(dateEl);
        mainEl.appendChild(divEl);
        //timerEl.innerText = timerNumbers(timerEl, this.startTimeStamp);
        timerNumbers(this.timeStampID, this.startTimeStamp);
        div2El.appendChild(timeEl);
        divEl.appendChild(buttDivEl);
        div3El.appendChild(buttStart);
        div3El.appendChild(buttPause);
        div3El.appendChild(buttStop);
        buttStart.innerText = 'Start';
        buttPause.innerText = 'Pause';
        buttStop.innerText = 'Stop';
        buttStart.addEventListener('click', this.startTimer);
        buttPause.addEventListener('click', this.pauseTimer);
        buttStop.addEventListener('click', this.stopTimer);
    }
    this.startTimer = () => {
        let timerDate = new Date();
        if (this.status == 0) this.startTimeStamp = timerDate.getTime();
        if (this.status == 2) this.startTimeStamp = timerDate.getTime() - this.pauseTimeStamp;

        if (this.status !== 1) this.timerInt = setInterval(() => {
            this.timeStamp = timerNumbers(this.timeStampID, this.startTimeStamp);
        }, 100);
        this.status = 1;
    }
    this.pauseTimer = () => {
        let timerDate = new Date();
        if (this.status !== 2) this.pauseTimeStamp = timerDate.getTime() - this.startTimeStamp;
        if (this.status !== 0) this.status = 2;
        clearInterval(this.timerInt);
    }
    this.stopTimer = () => {
        this.status = 0;
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
    //divEl.classList.add('col-3');
    timerEl.id = 'timerBox';
    buttStart.classList.add('btn', 'btn-primary');
    buttPause.classList.add('btn', 'btn-secondary');
    buttStop.classList.add('btn', 'btn-danger');

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

const prepareConmtainer = () => {
    let containerEl = document.getElementById('container');
    let containerContent = `    
        <div id="clock" class="row ">
            <div class="col-12  text-end clockBox">
            <span id="date" class="me-2 "></span>
            <span id="time" class="me-4 text-end"></span>
            </div>
        </div>
        <div class="row align-items-center justify-content-center">
            <div class="col text-center">
            <span class="display-4">MULTI-TIMER</span>
            </div>
        </div>

        <div class="row align-items-center justify-content-center" id="buttons">
            <div class="col text-center">
            <button type="button" id="darkLight" class="btn  m-2 btn-secondary "> Dark/Light</button>
            <button type="button" id="addTimer" class="btn  m-2 btn-primary "> Add Timer</button>
            </div>

        </div>
        <div class="row justify-content-center text-center" id="timersRow">
            <div id="siderLeft" class="d-none d-xl-block col-md-2 ">
                <div class="picture">
                    <img class="imgAnimate" src="https://picsum.photos/id/1016/450/1000" alt="">  
                </div>
            </div>
            <div id="timers1" class="col-12 col-xl-8 justify-content-center align-items-center text-center ">
             <div class="row m-2  justify-content-center align-items-center text-center" id="timers">
             </div>
                
            </div>
            <div id="siderRight" class="d-none d-xl-block col-md-2 ">
                <div class="picture">
                    <img class="imgAnimate" src="https://picsum.photos/id/249/450/1000" alt="">  
                </div>
            </div> 
            
            </div>`;
    containerEl.innerHTML = containerContent;
    // clock 175
}

function clockDisplay() {
    let date = new Date();
    let clockHour = date.getHours(); // 0 - 23
    let clockMinute = date.getMinutes(); // 0 - 59
    let clockSecond = date.getSeconds(); // 0 - 59
    let dateYear = date.getFullYear();
    let dateMonth = date.getMonth() + 1;
    let dateDay = date.getUTCDay();


    if (clockHour < 10) clockHour = "0" + clockHour;
    if (clockMinute < 10) clockMinute = "0" + clockMinute;
    if (clockSecond < 10) clockSecond = "0" + clockSecond;
    if (dateDay < 10) dateDay = "0" + dateDay;
    if (dateMonth < 10) dateMonth = "0" + dateMonth;

    let clockTime = clockHour + ":" + clockMinute + ":" + clockSecond + " ";
    let clockDate = dateYear + "/" + dateMonth + "/" + dateDay + "  ";
    document.getElementById("date").innerText = clockDate;
    document.getElementById("time").innerText = clockTime;
    //document.getElementById("clock").textContent = clockDate + clockTime;

    setTimeout(clockDisplay, 1000);
}


const main = () => {
    prepareConmtainer();
    clockDisplay();
    addTimer();
    //displayTimer();
    darkLight()
    prepareDOMElements();
    prepareDOMEvents();
}

document.addEventListener('DOMContentLoaded', main);