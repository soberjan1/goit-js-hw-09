import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  inputEl: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  timerDiv: document.querySelector('.timer'),
  dataDays: document.querySelector('[data-days]'),
  dataHours: document.querySelector('[data-hours]'),
  dataMinutes: document.querySelector('[data-minutes]'),
  dataSeconds: document.querySelector('[data-seconds]'),
};

// БИБЛИОТЕКА //
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    validDate();
  },
};

const datePicker = flatpickr(refs.inputEl, options);
let isActive = false;
refs.startBtn.disabled = true;

function validDate() {
  const now = new Date();
  if (datePicker.selectedDates[0] < now) {
    alert('Please choose a date in the future');
    refs.startBtn.disabled = true;
  }
  refs.startBtn.disabled = false;
  return;
}

refs.startBtn.addEventListener('click', () => {
  if (isActive === true) {
    return;
  }

  const intervalId = setInterval(() => {
    isActive = true;
    let kakoytoTime = datePicker.selectedDates[0] - Date.now();
    const timeComponents = convertMs(kakoytoTime);
    updateTimer(timeComponents);

    if (kakoytoTime <= 1000) {
      clearInterval(intervalId);
      refs.timerDiv.textContent = '00:00:00:00';
      return;
    }
  }, 1000);
});

// ФУНКЦИЯ ОТСЧЕТ ВРЕМЕНИ //
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

// ФУНКЦИЯ PAD //
function pad(value) {
  return String(value).padStart(2, '0');
}

/////
function updateTimer({ days, hours, minutes, seconds }) {
  refs.timerDiv.textContent = `${days}:${hours}:${minutes}:${seconds}`;
}
