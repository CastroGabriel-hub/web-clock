const content = document.querySelector('.content');
const stopBtn = document.querySelector('#stop');
const clockBtn = document.querySelector('#clock');
const timerBtn = document.querySelector('#timer');
const buttons = document.querySelectorAll('.button');

//Event listeners
window.addEventListener('load', buildClock);
stopBtn.addEventListener('click', buildStop);
clockBtn.addEventListener('click', buildClock);
timerBtn.addEventListener('click', buildTimer);

//Clock functions
function buildClock(){
    clear();
    clockBtn.setAttribute('class', 'selected');

    titleSection = document.createElement('h2');
    hoursSection = document.createElement('h1');

    titleSection.setAttribute('class', 'title');
    hoursSection.setAttribute('class', 'hours');

    content.append(titleSection);
    content.append(hoursSection);

    showTime();
}

function showTime(){
    
    let date = new Date();

    titleSection.innerText = 'Today is ' + date.toLocaleString('default', { month: 'long' }) + ' ' + date.getDate() + ' of ' + date.getFullYear();
    hoursSection.innerText = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

    setTimeout(showTime, 1000);
}

//StopWatch functions
function buildStop(){
    clear();
    stopBtn.setAttribute('class', 'selected');

    var seconds = document.createElement('p');
    var minutes = document.createElement('p');
    var hours = document.createElement('p');
    const watch = document.createElement('h1');
    const btnDiv = document.createElement('div');
    const start = document.createElement('button');
    const stop = document.createElement('button');
    const reset = document.createElement('button');
    
    seconds = 00;
    minutes = 00;
    hours = 00;
    start.innerText = 'start';
    stop.innerText = 'stop';
    reset.innerText = 'reset';

    start.addEventListener('click', startWatch);
    btnDiv.setAttribute('class', 'stopWatchBtnDiv');

    watch.innerText = '0' + hours + ':0' + minutes + ':0' + seconds;
    btnDiv.append(stop);
    btnDiv.append(start);
    btnDiv.append(reset);
    content.append(watch);
    content.append(btnDiv);

    function startWatch(){
        setInterval(function(){
            seconds++;
            if(seconds <= 9 ){
                watch.innerText = '0' + hours + ':0' + minutes + ':0' + seconds;
            }

            if(seconds > 9){
                watch.innerText = '0' + hours + ':0' + minutes + ':' + seconds;
            }

            if (seconds >= 60) {
                minutes++;
                seconds = 0;
                watch.innerText = '0' + hours + ':0' + minutes + ':0' + seconds;
            }

            if(minutes > 9){
                watch.innerText = '0' + hours + ':' + minutes + ':' + seconds;
            }

            if(minutes >= 60){
                hours++;
                minutes = 0;
                watch.innerText = '0' + hours + ':0' + minutes + ':0' + seconds;
            }

            if(hours > 9){
                watch.innerText = hours + ':' + minutes + ':' + seconds;
            }

        }, 1000)
    
    }
}



//Timer functions
function buildTimer(){
    clear();
    timerBtn.setAttribute('class', 'selected');
}

//Clears the screan removing the current application
function clear(){
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].removeAttribute('class');
        buttons[i].setAttribute('class', 'button');
    }

    while(content.lastChild){
        content.removeChild(content.lastChild);
        console.log('removed');
    }
}