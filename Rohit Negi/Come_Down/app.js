const start = document.querySelector('#start');
const reset = document.querySelector('#reset');

const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

let timer = null; // store interval ID

start.addEventListener('click', () => {
  const targetDate = document.querySelector('#targetDate');
  if (!targetDate.value) {
    alert('⚠️ Please select the required date');
    return;
  }

  const date = new Date(targetDate.value);
  const current = new Date();

  if (date.getTime() - current.getTime() <= 0) {
    alert('⚠️ Please select a future date');
    return;
  }

  // ✅ clear old timer if running
  if (timer) clearInterval(timer);

  timer = setInterval(() => {
    const now = new Date();
    const time = date.getTime() - now.getTime();

    if (time <= 0) {
      clearInterval(timer);
      days.textContent = hours.textContent = minutes.textContent = seconds.textContent = "00";
      alert("🎉 Time's up!");
      return;
    }

    const d = Math.floor(time / (1000 * 60 * 60 * 24));
    const h = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((time % (1000 * 60)) / 1000);

    days.textContent = d.toString().padStart(2, '0');
    hours.textContent = h.toString().padStart(2, '0');
    minutes.textContent = m.toString().padStart(2, '0');
    seconds.textContent = s.toString().padStart(2, '0');
  }, 1000);
});

reset.addEventListener('click', () => {
  clearInterval(timer);
  days.textContent = hours.textContent = minutes.textContent = seconds.textContent = "00";
});
