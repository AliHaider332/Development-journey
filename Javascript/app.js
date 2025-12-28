// App state
let state = {
  currentCategory: 'javascript',
  currentTopic: null,
  completedQuestions: JSON.parse(localStorage.getItem('completedQuestions')) || {},
  currentOpenAnswer: null
};

// DOM elements
const topicsListEl = document.getElementById('topicsList');
const questionsContainerEl = document.getElementById('questionsContainer');
const categoryBtns = document.querySelectorAll('.category-btn');
const progressFillEl = document.getElementById('progressFill');
const completedCountEl = document.getElementById('completedCount');
const totalCountEl = document.getElementById('totalCount');

// Initialize app
function init() {
  renderTopics();
  setupEventListeners();
  updateProgress();
}

// Render topics list
function renderTopics() {
  const topics = LEARNING_DATA[state.currentCategory];
  
  topicsListEl.innerHTML = topics.map((topic, index) => {
      const completedCount = getCompletedCount(topic.title);
      const totalCount = topic.questions.length;
      const isActive = state.currentTopic?.title === topic.title;
      
      return `
          <div class="topic-item ${isActive ? 'active' : ''}" data-index="${index}">
              <div class="topic-title">${topic.title}</div>
              <div class="topic-count">${completedCount}/${totalCount} completed</div>
          </div>
      `;
  }).join('');

  // Add click listeners to topics
  document.querySelectorAll('.topic-item').forEach((item, index) => {
      item.addEventListener('click', () => {
          const topic = topics[index];
          selectTopic(topic);
      });
  });
}

// Select a topic
function selectTopic(topic) {
  state.currentTopic = topic;
  
  // Update active topic in list
  document.querySelectorAll('.topic-item').forEach(item => {
      item.classList.remove('active');
  });
  document.querySelector(`.topic-item[data-index="${LEARNING_DATA[state.currentCategory].indexOf(topic)}"]`).classList.add('active');
  
  // Render questions
  renderQuestions();
}

// Render questions for current topic
function renderQuestions() {
  if (!state.currentTopic) return;
  
  const questions = state.currentTopic.questions;
  const topicTitle = state.currentTopic.title;
  
  questionsContainerEl.innerHTML = `
      <div class="topic-header">
          <h2>${topicTitle}</h2>
          <a href="${state.currentTopic.link}" target="_blank" class="topic-link">
              <i class="fas fa-external-link-alt"></i> Reference
          </a>
      </div>
      <div class="questions-list">
          ${questions.map((q, index) => {
              const questionId = `${topicTitle}-${index}`;
              const isCompleted = state.completedQuestions[questionId] || false;
              const isOpen = state.currentOpenAnswer === questionId;
              
              return `
                  <div class="question-card ${isCompleted ? 'completed' : ''}">
                      <div class="question-header">
                          <div class="question-number">${index + 1}</div>
                          <div class="question-text">${q.question}</div>
                          <button class="status-btn ${isCompleted ? 'completed' : ''}" 
                                  data-id="${questionId}">
                              <i class="fas fa-${isCompleted ? 'check-circle' : 'circle'}"></i>
                          </button>
                      </div>
                      <button class="toggle-answer" data-id="${questionId}">
                          <i class="fas fa-${isOpen ? 'eye-slash' : 'eye'}"></i>
                          ${isOpen ? 'Hide Answer' : 'Show Answer'}
                      </button>
                      <div class="answer-content ${isOpen ? 'show' : ''}" id="answer-${questionId}">
                          ${formatAnswer(q.answer)}
                      </div>
                  </div>
              `;
          }).join('')}
      </div>
  `;

  // Add event listeners
  setupQuestionEventListeners();
}

// Format answer text
function formatAnswer(text) {
  // Split by code blocks
  const parts = text.split(/```([\s\S]*?)```/);
  
  return parts.map((part, index) => {
      if (index % 2 === 1) {
          // Code block
          return `<div class="code-block"><code>${part.trim()}</code></div>`;
      } else {
          // Regular text with line breaks
          return `<p>${part.replace(/\n/g, '<br>')}</p>`;
      }
  }).join('');
}

// Setup event listeners
function setupEventListeners() {
  // Category buttons
  categoryBtns.forEach(btn => {
      btn.addEventListener('click', () => {
          // Update active button
          categoryBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          
          // Change category
          state.currentCategory = btn.dataset.category;
          state.currentTopic = null;
          
          // Update UI
          renderTopics();
          showWelcomeMessage();
          updateProgress();
      });
  });
}

// Setup question event listeners
function setupQuestionEventListeners() {
  // Toggle answer buttons
  document.querySelectorAll('.toggle-answer').forEach(btn => {
      btn.addEventListener('click', () => {
          const questionId = btn.dataset.id;
          toggleAnswer(questionId, btn);
      });
  });
  
  // Status buttons (mark as completed)
  document.querySelectorAll('.status-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const questionId = btn.dataset.id;
          toggleQuestionStatus(questionId, btn);
      });
  });
}

// Toggle answer visibility
function toggleAnswer(questionId, button) {
  const answerEl = document.getElementById(`answer-${questionId}`);
  const isOpen = answerEl.classList.contains('show');
  
  // Close previously open answer
  if (state.currentOpenAnswer && state.currentOpenAnswer !== questionId) {
      const prevAnswer = document.getElementById(`answer-${state.currentOpenAnswer}`);
      const prevButton = document.querySelector(`.toggle-answer[data-id="${state.currentOpenAnswer}"]`);
      
      if (prevAnswer) prevAnswer.classList.remove('show');
      if (prevButton) {
          prevButton.innerHTML = '<i class="fas fa-eye"></i> Show Answer';
      }
  }
  
  // Toggle current answer
  if (isOpen) {
      answerEl.classList.remove('show');
      button.innerHTML = '<i class="fas fa-eye"></i> Show Answer';
      state.currentOpenAnswer = null;
  } else {
      answerEl.classList.add('show');
      button.innerHTML = '<i class="fas fa-eye-slash"></i> Hide Answer';
      state.currentOpenAnswer = questionId;
      
      // Scroll to answer
      setTimeout(() => {
          answerEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
  }
}

// Toggle question completion status
function toggleQuestionStatus(questionId, button) {
  const isCompleted = state.completedQuestions[questionId] || false;
  
  // Update state
  state.completedQuestions[questionId] = !isCompleted;
  
  // Update localStorage
  localStorage.setItem('completedQuestions', JSON.stringify(state.completedQuestions));
  
  // Update UI
  button.classList.toggle('completed');
  button.innerHTML = `<i class="fas fa-${!isCompleted ? 'check-circle' : 'circle'}"></i>`;
  
  // Update question card
  const questionCard = button.closest('.question-card');
  questionCard.classList.toggle('completed');
  
  // Update progress
  updateProgress();
  
  // Update topics list
  renderTopics();
}

// Get completed count for a topic
function getCompletedCount(topicTitle) {
  let count = 0;
  const topic = LEARNING_DATA[state.currentCategory].find(t => t.title === topicTitle);
  
  if (topic) {
      topic.questions.forEach((_, index) => {
          const questionId = `${topicTitle}-${index}`;
          if (state.completedQuestions[questionId]) {
              count++;
          }
      });
  }
  
  return count;
}

// Update progress display
function updateProgress() {
  let total = 0;
  let completed = 0;
  
  // Count all questions across all topics in current category
  LEARNING_DATA[state.currentCategory].forEach(topic => {
      total += topic.questions.length;
      completed += getCompletedCount(topic.title);
  });
  
  // Update progress bar
  const percentage = total > 0 ? (completed / total) * 100 : 0;
  progressFillEl.style.width = `${percentage}%`;
  
  // Update counts
  completedCountEl.textContent = completed;
  totalCountEl.textContent = total;
}

// Show welcome message
function showWelcomeMessage() {
  questionsContainerEl.innerHTML = `
      <div class="welcome-message">
          <div class="welcome-icon">
              <i class="fas fa-graduation-cap"></i>
          </div>
          <h3>Welcome to ${state.currentCategory === 'javascript' ? 'JavaScript' : 'React'} Revision!</h3>
          <p>Select a topic from the list to start revising concepts.</p>
          <div class="category-info">
              <p>Total ${LEARNING_DATA[state.currentCategory].length} topics available</p>
          </div>
      </div>
  `;
}

// Initialize the app
document.addEventListener('DOMContentLoaded', init);