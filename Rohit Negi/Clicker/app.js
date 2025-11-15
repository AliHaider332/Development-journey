const body = document.querySelector('body');

const arr = ['red', 'green', 'blue', 'white', 'gray'];

body.addEventListener('click', (e) => {
  const circle = document.createElement('div');
  const n = Math.floor(Math.random() * 5);
  circle.classList.add('circle');
  circle.style.backgroundColor = arr[n];
  circle.style.left = `${e.clientX}px`;
  circle.style.top = `${e.clientY}px`;

  body.appendChild(circle);

  // remove the circle after animation ends
  setTimeout(() => {
    circle.remove();
  }, 800); // same as animation duration
});
