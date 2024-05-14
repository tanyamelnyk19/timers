import '../css/stopwatch.css';

// const refs = {
//     start: document.querySelector('#start'),
//     stop:document.querySelector('#stop'),
//     seconds: document.querySelector('.seconds'),
//     minutes: document.querySelector('.minutes'),
// }

// refs.start.addEventListener('click', onStartBtnClick);
// refs.stop.addEventListener('click', onStopBtnClick);

// let intervalId = null;
// let startDate = null;

// function onStartBtnClick() {
//     startDate = Date.now();
//     intervalId = setInterval(calc, 1000);
// }

// function onStopBtnClick() {
//     console.log('clear');
//     clearInterval(intervalId);
//     refs.seconds.textContent = '00';
// }

// function calc() {
//     const currentDate = Date.now();
//     const deltaInSeconds = (currentDate - startDate) / 1000;
//     const sec = Math.floor(deltaInSeconds % 60);
//     const min = Math.floor(deltaInSeconds / 60);

//     refs.seconds.textContent = sec < 10 ? `0${sec}` : sec;
//     refs.minutes.textContent = min < 10 ? `0${min}` : min;
// }

// на класс
class StopWatch {
    constructor() {
        this.refs = {
            start: document.querySelector('#start'),
            stop:document.querySelector('#stop'),
            seconds: document.querySelector('.seconds'),
            minutes: document.querySelector('.minutes'),
        };

        this.intervalId = null;
        this.startDate = null;

        // либо bind либо переписать на стрелочные функции
        // this.onStartBtnClick = this.onStartBtnClick.bind(this);
        // this.onStopBtnClick = this.onStopBtnClick.bind(this);
    }

    calc = () => {
        const currentDate = Date.now();
        const deltaInSeconds = (currentDate - this.startDate) / 1000;
        const sec = Math.floor(deltaInSeconds % 60);
        const min = Math.floor(deltaInSeconds / 60);

        this.refs.seconds.textContent = sec < 10 ? `0${sec}` : sec;
        this.refs.minutes.textContent = min < 10 ? `0${min}` : min;
    }

    onStartBtnClick = () => {
        console.log('start');
        this.startDate = Date.now();
        this.intervalId = setInterval(this.calc, 1000);
        this.refs.start.disabled = true;
    }

    onStopBtnClick = () => {
        console.log('stop');
        clearInterval(this.intervalId);
        this.refs.seconds.textContent = '00';
        this.refs.start.disabled = false;
    }

    init() {
        this.refs.start.addEventListener('click', this.onStartBtnClick);
        this.refs.stop.addEventListener('click', this.onStopBtnClick);
    }
}

const timer = new StopWatch();
timer.init();