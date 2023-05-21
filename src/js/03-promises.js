import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notify.init({
  width: '280px',
  position: 'right-top',
  distance: '10px',
  success: {
    background: '#32c682',
    textColor: '#fff',
  },

  failure: {
    background: '#ff5549',
    textColor: '#fff',
  },
});

const refs = {
  formEl: document.querySelector('.form'),
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

refs.formEl.addEventListener('submit', handleSubmit);

function handleSubmit(evt) {
  evt.preventDefault();

  const { delay, step, amount } = event.target.elements;
  let delayEl = parseInt(delay.value);
  let stepEl = parseInt(step.value);

  for (let i = 0; i <= amount.value; i++) {
    createPromise(i, delayEl)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delayEl += stepEl;
  }
}
