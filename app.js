if(!localStorage.getItem('counter')) {
    localStorage.setItem('counter', 0);
}

const counter = localStorage.getItem('counter');
const $counter = document.querySelector("#contador");
const $increment = document.querySelector("#increment");
const $clear = document.querySelector("#clear");

function incrementCounter() {
    const tempCounter = localStorage.getItem('counter');
    const incrementedCounter = parseInt(tempCounter, 10) + 1;
    localStorage.setItem('counter', incrementedCounter)
    writeCounter(incrementedCounter);
}

function writeCounter(incrementedCounter) {
    $counter.innerHTML = `${incrementedCounter}`;
}

function clearCounter() {
    localStorage.setItem('counter', 0);
    writeCounter(0)
}

$clear.addEventListener("click", clearCounter);
$increment.addEventListener("click", incrementCounter);

window.onload = () => writeCounter(counter);
