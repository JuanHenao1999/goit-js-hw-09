import '../css/common.css';

const body1 = document.querySelector('body');
const start1 = document.querySelector('button[data-start]');
const stop1 = document.querySelector('button[data-stop]');
stop1.disabled = true;
let intervalID = null;

const randomBodyColorGenerator = {
  DELAY: 1000,

  getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).toString(16).padStart(6, 0)}`;
  },

  interval() {
    intervalID = setInterval(() => {
      changeBgColorRandom();
    }, this.DELAY);
    stop1.disabled = false;
  },

  start() {
    start1.addEventListener('click', () => {
      this.interval();
      start1.disabled = true;
      stop1.disabled = false;
    });
    stop1.addEventListener('click', this.stop);
  },

  stop() {
    clearInterval(intervalID);
    stop1.disabled = true;
    start1.disabled = false;
  },
};

function changeBgColorRandom() {
  body1.style.backgroundColor = `${randomBodyColorGenerator.getRandomHexColor()}`;
}

randomBodyColorGenerator.start();
