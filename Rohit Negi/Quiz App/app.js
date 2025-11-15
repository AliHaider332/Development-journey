import { cricketQuestions } from "../question.js";

const quizBox = document.querySelector(".quiz-box");
const nextBtn = document.querySelector(".next-btn");
const currentSpan = document.getElementById("current");
const totalSpan = document.getElementById("total");

let currentIndex = 0;
totalSpan.textContent = 10; // show total questions (change if needed)

// Function to render the current question
function renderQuestion(index) {
  const q = cricketQuestions[index];

  quizBox.innerHTML = `
    <h2 class="question">Q${index + 1}: ${q.question}</h2>

    <ul class="options">
      ${q.options
        .map(
          (option, i) => `
        <li>
          <input type="radio" name="q${index}" id="opt${i + 1}">
          <label for="opt${i + 1}">${option}</label>
        </li>
      `
        )
        .join("")}
    </ul>

    <div class="answer-box hidden">
      <p class="answer-text">✅ Correct Answer: 
        <span id="correct-answer">${q.options[q.answer - 1]}</span>
      </p>
    </div>
  `;

  // Update footer
  currentSpan.textContent = index + 1;
}

// Initially show first question
renderQuestion(currentIndex);

// Show correct answer when user selects an option
quizBox.addEventListener("change", (e) => {
  if (e.target.type === "radio") {
    const answerBox = quizBox.querySelector(".answer-box");
    answerBox.classList.remove("hidden");
  }
});

// Handle Next button
nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < 10) {
    renderQuestion(currentIndex);
  } else {
    quizBox.innerHTML = `
      <h2 class="question">🎉 Quiz Completed!</h2>
      <p class="answer-text">You’ve reached the end of the quiz.</p>
    `;
    nextBtn.disabled = true;
    nextBtn.textContent = "Done ✅";
  }
});
