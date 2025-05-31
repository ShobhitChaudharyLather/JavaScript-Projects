const form = document.getElementById('bmi-form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const results = document.getElementById('results');

  results.innerHTML = '';

  if (!height || height <= 0 || isNaN(height)) {
    results.innerHTML = `<p class="error">Please enter a valid height in cm.</p>`;
    return;
  }

  if (!weight || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `<p class="error">Please enter a valid weight in kg.</p>`;
    return;
  }

  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  let category = '';
  let categoryClass = '';

  if (bmi < 18.6) {
    category = 'Underweight';
    categoryClass = 'underweight';
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    category = 'Normal';
    categoryClass = 'normal';
  } else {
    category = 'Overweight';
    categoryClass = 'overweight';
  }

  results.innerHTML = `
    <p>Your BMI is <strong>${bmi}</strong> — 
    <span class="category ${categoryClass}">${category}</span></p>
  `;
});
