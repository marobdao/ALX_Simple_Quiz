// calculator.js
// Simple Calculator Application

// Arithmetic functions
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  // Handle division by zero
  return number2 !== 0 ? number1 / number2 : 'Error: Division by zero';
}

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Grab references to inputs and result span
  const num1Input = document.getElementById('number1');
  const num2Input = document.getElementById('number2');
  const resultSpan = document.getElementById('calculation-result');

  // Helper to parse inputs or default to 0
  function getInputs() {
    const n1 = parseFloat(num1Input.value) || 0;
    const n2 = parseFloat(num2Input.value) || 0;
    return { n1, n2 };
  }

  // Attach event listeners for each operation button
  document.getElementById('add').addEventListener('click', () => {
    const { n1, n2 } = getInputs();
    resultSpan.textContent = add(n1, n2);
  });

  document.getElementById('subtract').addEventListener('click', () => {
    const { n1, n2 } = getInputs();
    resultSpan.textContent = subtract(n1, n2);
  });

  document.getElementById('multiply').addEventListener('click', () => {
    const { n1, n2 } = getInputs();
    resultSpan.textContent = multiply(n1, n2);
  });

  document.getElementById('divide').addEventListener('click', () => {
    const { n1, n2 } = getInputs();
    resultSpan.textContent = divide(n1, n2);
  });
});
