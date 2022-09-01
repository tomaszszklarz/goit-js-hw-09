function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
let colorMix = null;

const colorStart = () => {
    startButton.disabled = true;
    stopButton.disabled = false;
    colorMix = setInterval(() => {
        const color = getRandomHexColor();
        body.style.background = color;
    }, 1000)
};
const colorStop = () => {
    stopButton.disabled = true;
    startButton.disabled = false;
    clearInterval(colorMix);
};

startButton.addEventListener('click', colorStart);
stopButton.addEventListener('click', colorStop);
