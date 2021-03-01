import randomInteger from './random-integer.js';
import colors from './colors.js';

const bodyRef = document.querySelector('body');
const startBtnRef = document.querySelector('button[data-action = start]');
const stopBtnRef = document.querySelector('button[data-action = stop]');

let timerID = null;
let timerIsOn = false;

startBtnRef.addEventListener('click', onStartBtn);
stopBtnRef.addEventListener('click', onStopBtn);

function onStartBtn() {
	if (timerIsOn) return;
	
	timerID = setInterval(changeBgColor, 1000);
	timerIsOn = true;
	startBtnRef.disabled = true;
};

function onStopBtn() {
	clearInterval(timerID);
	timerIsOn = false;
	startBtnRef.disabled = false;
};

function changeBgColor() {
	bodyRef.style.background = getRandomColor(colors);
};

function getRandomColor(colorsArr) {
	const bgColorNumber = randomInteger(0, colorsArr.length - 1);

	return colorsArr[bgColorNumber];
};
