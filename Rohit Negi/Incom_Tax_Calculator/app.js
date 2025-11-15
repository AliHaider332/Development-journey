const calculateBtn = document.querySelector('#calculateBtn');

calculateBtn.addEventListener('click', () => {
  let income = parseFloat(document.querySelector('#income').value);
  let tax = 0;

  if (isNaN(income) || income <= 0) {
    document.getElementById('result').textContent =
      'Please enter a valid income!';
    return;
  }

  // Tax calculation based on progressive slabs
  if (income > 5600000) {
    tax += (income - 5600000) * 0.45;
    income = 5600000;
  }
  if (income > 3200000) {
    tax += (income - 3200000) * 0.4;
    income = 3200000;
  }
  if (income > 1200000) {
    tax += (income - 1200000) * 0.2;
    income = 1200000;
  }
  if (income > 600000) {
    tax += (income - 600000) * 0.15;
    income = 600000;
  }

  // Show results
  document.getElementById(
    'result'
  ).textContent = `💰 Your total income tax is PKR ${tax.toFixed(2)}`;
});
