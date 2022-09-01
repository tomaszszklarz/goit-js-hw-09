function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
let colorMix = null;

startButton.addEventListener('click', () => {
    startButton.disabled = true;
    stopButton.disabled = false;
    colorMix = setInterval(() => {
        const color = getRandomHexColor();
        body.style.background = color;
    }, 1000)
});

stopButton.addEventListener('click', () => {
    stopButton.disabled = true;
    startButton.disabled = false;
    clearInterval(colorMix);
})
