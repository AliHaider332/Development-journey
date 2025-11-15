const button = document.querySelector('button');
button.addEventListener('click', () => {
  const name1Input = document.getElementById('name1');
  const name2Input = document.getElementById('name2');
  const result = document.getElementById('result');
  const loader = document.getElementById('loader');

  const name1 = name1Input.value.trim();
  const name2 = name2Input.value.trim();

  if (name1 === '' || name2 === '') {
    result.textContent = 'Please enter both names!';
    return;
  }

  result.textContent = '';
  loader.style.display = 'block'; // Show loader

  // Simulate calculation delay
  setTimeout(() => {
    loader.style.display = 'none'; // Hide loader

    const temp = name1.length * name2.length;
    const loveScore = temp % 101;

    result.textContent = `${name1} ❤️ ${name2} = ${loveScore}% Love Match!`;

    // ✅ Correctly clear input fields
    name1Input.value = '';
    name2Input.value = '';
  }, 2000);
});
