// quiz.js

/**
 * Checks the user’s selected quiz answer and displays feedback.
 */
function checkAnswer() {
  // 1. Define the correct answer
  const correctAnswer = "4";

  // 2. Grab the checked radio input
  const selected = document.querySelector('input[name="quiz"]:checked');
  const userAnswer = selected ? selected.value : "";

  // 3. Find the feedback element
  const feedbackEl = document.getElementById('feedback');

  // 4. Compare and display appropriate message
  if (userAnswer === correctAnswer) {
    feedbackEl.textContent = "Correct! Well done.";
  } else {
    feedbackEl.textContent = "That's incorrect. Try again!";
  }
}

// 5. Wire up the Submit button to call checkAnswer on click
const submitBtn = document.getElementById('submit-answer');
submitBtn.addEventListener('click', checkAnswer);
