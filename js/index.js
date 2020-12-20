
const refs = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
  targetDate: new Date ('Dec 31, 2020'),
}

const timer = {
  start() {
    const targetDate = refs.targetDate;
    setInterval(() => {
      const currentDate = Date.now();
      const time = targetDate - currentDate;
      updateClockFace(time);
    }, 1000)
  }
}

timer.start();

function updateClockFace(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.mins.textContent = mins;
  refs.secs.textContent = secs;
}

function pad(value) {
  return String(value).padStart(2, '0');
}

// new CountdownTimer({
// selector: '#timer-1',
// targetDate: new Date('Jul 17, 2021'),
// });