const refs = {
  bodyColor: document.querySelector('body'),
  startBtn: document.querySelector('button[data-start]'),
  stoptBtn: document.querySelector('button[data-stop]'),
};

let intervalId = null;
const PROMPT_DELAY = 1000;
const colorChangeFn = function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

refs.startBtn.addEventListener('click', () => {
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = colorChangeFn();
  }, PROMPT_DELAY);

  if (intervalId) {
    refs.startBtn.disabled = true;
  }
});

refs.stoptBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  refs.startBtn.disabled = false;
});
