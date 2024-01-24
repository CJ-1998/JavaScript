const appendTens = document.getElementById("tens")
const appendSeconds = document.getElementById("seconds")
const buttonStart = document.getElementById('button-start');
const buttonStop = document.getElementById('button-stop');
const buttonReset = document.getElementById('button-reset');
let seconds = 0;
let tens = 0;
let Interval;

buttonStart.onclick = function () {
    // 기존에 있던 setInterval 없애고 
    clearInterval(Interval);
    // 다시 setInterval 시작
    Interval = setInterval(startTimer, 10);
}

buttonStop.onclick = function () {
    clearInterval(Interval);
}

buttonReset.onclick = function () {
    // 기존에 있던 setInterval 없애고 
    clearInterval(Interval);
    // tens seconds appendTens appendSeconds 초기화
    tens = 0;
    seconds = 0;
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
}

function startTimer() {
    tens++;

    // tens가 9보다 작거나 같을 때 1씩 appendTens 올리기
    if (tens <= 9) {
        appendTens.innerHTML = tens;
    }

    // tens가 9보다 클 때도 1씩 appendTens 올리기
    if (tens > 9) {
        appendTens.innerHTML = tens;
    }

    // tens가 100이 될 때 
    if (tens > 99) {
        console.log("seconds");
        // seconds 1 올리고 
        seconds++;
        // appendSeconds에도 반영하기
        appendSeconds.innerHTML = seconds;
        // ten와 appendTens는 0으로
        tens = 0;
        appendTens.innerHTML = 0;
    }
}
