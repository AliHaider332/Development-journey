// Sample data for the JavaScript topics
const NOTES = [
  {
    title: 'How the Internet and Websites Work',
    link: 'https://www.notion.so/Web-Development-Course-25b3a78e0e2280919c1ed15f0878fa15',
    questions: [
      'What happens when you type a URL in the browser?',
      'Explain the difference between HTTP and HTTPS.',
      'What is DNS and how does it work?',
      'Describe the client-server model.',
      'What are the main components of a web page?',
      'Explain the role of browsers in web development.',
      'What is a web server and how does it work?',
      'Describe the request-response cycle.',
      'What are cookies and how are they used?',
      'Explain the concept of web hosting.',
    ],
  },
  {
    title: 'Introduction to JavaScript & How JS Executes',
    link: 'https://www.notion.so/Introduction-to-Javascript-2763a78e0e22809db99af584c1c5c6ec',
    questions: [
      'What is JavaScript and what is it used for?',
      'Explain how JavaScript code is executed in a browser.',
      'What is the difference between JavaScript and Java?',
      'What is a JavaScript engine? Name a few.',
      'Explain the role of the JavaScript runtime environment.',
      'What are the different ways to include JavaScript in HTML?',
      'What is the difference between client-side and server-side JavaScript?',
      'Explain the concept of Just-In-Time (JIT) compilation.',
      'What are the basic data types in JavaScript?',
      'How does JavaScript handle asynchronous operations?',
    ],
  },
  {
    title: 'JavaScript Variables & Data Types (var, let, const, Mutable)',
    link: 'https://www.notion.so/Lecture-02-Data-Type-2773a78e0e228042ba55df0265e78c6b',
    questions: [
      'What are the differences between var, let, and const?',
      'Explain variable hoisting in JavaScript.',
      'What are the primitive data types in JavaScript?',
      'What is the difference between primitive and reference types?',
      'Explain the concept of mutability in JavaScript.',
      'How does JavaScript handle type coercion?',
      'What is the typeof operator and how is it used?',
      'Explain the concept of variable scope in JavaScript.',
      'What is the Temporal Dead Zone?',
      'How do you check if a variable is an array?',
    ],
  },
  {
    title: 'JavaScript Memory Management: Stack vs Heap',
    link: 'https://www.notion.so/Lecture-03-V8-Engine-Memory-Allocation-27a3a78e0e228017963adec0533f0d78',
    questions: [
      'Explain the difference between stack and heap memory.',
      'How does JavaScript manage memory allocation?',
      'What is garbage collection in JavaScript?',
      'Explain memory leaks and how to prevent them.',
      'What is the mark-and-sweep algorithm?',
      'How are primitive and reference types stored in memory?',
      'What is the call stack and how does it work?',
      'Explain the concept of memory lifecycle in programming.',
      'What are the common causes of memory leaks in JavaScript?',
      'How does the V8 engine optimize memory usage?',
    ],
  },
  {
    title: 'Conditionals, Loops & Operators in JavaScript',
    link: 'https://www.notion.so/Lecture-04-27b3a78e0e228099a515cf3dd04dd9ac?source=copy_link',
    questions: [
      'What are the different types of conditional statements in JavaScript?',
      'Explain the difference between == and === operators.',
      'What are the different types of loops in JavaScript?',
      'How does the ternary operator work?',
      'What is short-circuit evaluation?',
      'Explain the difference between for...in and for...of loops.',
      'What are logical operators in JavaScript?',
      'How does the switch statement work?',
      'What is the difference between break and continue statements?',
      'Explain the concept of truthy and falsy values.',
    ],
  },
  {
    title: 'JavaScript Numbers & Math Object (Random Number Generation)',
    link: 'https://www.notion.so/Lecture-05-Number-Math-and-String-27d3a78e0e2280c8a606ceb93c369d1b',
    questions: [
      'How does JavaScript handle numbers?',
      'What is the Math object and what are its common methods?',
      'How do you generate random numbers in JavaScript?',
      'Explain the difference between parseInt() and parseFloat().',
      'What is NaN and how do you check for it?',
      'How do you round numbers in JavaScript?',
      'What is the maximum safe integer in JavaScript?',
      'Explain the concept of floating point precision issues.',
      'How do you convert numbers to different bases?',
      'What is the difference between Math.floor() and Math.ceil()?',
    ],
  },
  {
    title: 'JavaScript Strings & Dates (In-Depth)',
    link: 'https://www.notion.so/Lecture-06-String-and-Date-27e3a78e0e22803ca796f1eef30bc86b',
    questions: [
      'What are the different ways to create strings in JavaScript?',
      'Explain common string methods in JavaScript.',
      'How do you work with template literals?',
      'What is the Date object and how is it used?',
      'How do you format dates in JavaScript?',
      'Explain the difference between getTime() and valueOf() for dates.',
      'How do you compare two dates?',
      'What is the Internationalization API for dates?',
      'How do you extract parts of a string?',
      'What are regular expressions and how are they used with strings?',
    ],
  },
  {
    title: 'JavaScript Arrays (In-Depth)',
    link: 'https://www.notion.so/Lecture-07-Array-in-javascript-2803a78e0e228002bcb2dffd112b7c4c',
    questions: [
      'What are arrays in JavaScript and how are they created?',
      'Explain common array methods (push, pop, shift, unshift).',
      'What is the difference between slice() and splice()?',
      'How do you iterate over arrays?',
      'Explain the map(), filter(), and reduce() methods.',
      'What are sparse arrays?',
      'How do you check if an object is an array?',
      'What is the difference between forEach() and map()?',
      'How do you flatten a nested array?',
      'What are array-like objects?',
    ],
  },
  {
    title: 'JavaScript Objects (In-Depth)',
    link: 'https://www.notion.so/Lecture-08-Objects-in-Javascript-2833a78e0e2280109358ee39b2b35e4f',
    questions: [
      'What are objects in JavaScript and how are they created?',
      'Explain the difference between dot notation and bracket notation.',
      'How do you iterate over object properties?',
      'What is object destructuring?',
      'Explain the concept of object references.',
      'How do you clone an object?',
      'What are getters and setters in objects?',
      'Explain the Object.keys(), Object.values(), and Object.entries() methods.',
      'What is the difference between shallow copy and deep copy?',
      'How does property enumeration work in JavaScript?',
    ],
  },
  {
    title: 'JavaScript Functions (In-Depth)',
    link: 'https://www.notion.so/Lecture-09-Function-in-javascript-2843a78e0e2280aeb47fd280307b1a38',
    questions: [
      'What are the different ways to define functions in JavaScript?',
      'Explain the difference between function declarations and function expressions.',
      'What are arrow functions and how do they differ from regular functions?',
      'Explain the concept of higher-order functions.',
      'What are callback functions?',
      'How do default parameters work in functions?',
      'What is the arguments object?',
      'Explain the concept of function currying.',
      'What are IIFEs and why are they used?',
      'How does the return statement work in functions?',
    ],
  },
  {
    title: 'How JavaScript Code Executes & Hoisting',
    link: 'https://www.notion.so/Lecture-10-JS-Code-Execution-2853a78e0e2280a8a3c2e21a712ebd43',
    questions: [
      'Explain the JavaScript execution context.',
      'What is hoisting and how does it work?',
      'Explain the difference between function and variable hoisting.',
      'What is the call stack?',
      'How does JavaScript handle synchronous and asynchronous code?',
      'Explain the creation and execution phases in JavaScript.',
      'What is the Temporal Dead Zone?',
      'How are let and const variables hoisted?',
      'What is the scope chain?',
      'Explain the concept of lexical scoping.',
    ],
  },
  {
    title: 'Closures, Scope & Higher-Order Functions',
    link: 'https://www.notion.so/Lecture-11-Scope-and-Closures-2873a78e0e228059a849d06ad3267ed9',
    questions: [
      'What is a closure in JavaScript?',
      'Explain lexical scoping.',
      'How are closures used in practical applications?',
      'What is the scope chain?',
      'Explain the concept of higher-order functions.',
      'How do closures help with data encapsulation?',
      'What is a common mistake with closures in loops?',
      'How do closures relate to memory management?',
      'What is the module pattern and how does it use closures?',
      'Explain the difference between global and local scope.',
    ],
  },
  {
    title: 'Map, Filter, Reduce, Set & Map in JavaScript',
    link: 'https://www.notion.so/Lecture-12-filter-set-reducer-map-and-set-2873a78e0e2280e192bfc88fa8d0bea7',
    questions: [
      'Explain the map() method and how it works.',
      'What is the filter() method and when would you use it?',
      'How does the reduce() method work?',
      'What is the difference between forEach() and map()?',
      'Explain the Set object and its use cases.',
      'What is the Map object and how is it different from regular objects?',
      'How do you convert an array to a Set and vice versa?',
      'What are the advantages of using Map over objects?',
      'How do you chain array methods?',
      'Explain the concept of immutability in relation to these methods.',
    ],
  },
  {
    title: 'DOM Manipulation in JavaScript (Document Object Model)',
    link: 'https://www.notion.so/Lecture-13-Introduction-to-DOM-28b3a78e0e2280be9dbbf32ae46773b6',
    questions: [
      'What is the DOM?',
      'Explain the difference between the DOM and HTML.',
      'How do you select elements in the DOM?',
      'What is the difference between getElementById and querySelector?',
      'How do you create and add new elements to the DOM?',
      'Explain the concept of event delegation.',
      'What is the difference between innerHTML and textContent?',
      'How do you traverse the DOM tree?',
      'What is the difference between attributes and properties?',
      'How do you remove elements from the DOM?',
    ],
  },
  {
    title: 'CRUD Operations in the DOM',
    link: 'https://www.notion.so/Lecture-14-DOM-Manipulation-28c3a78e0e22802482ffcc9e423d3db0',
    questions: [
      'How do you create elements in the DOM?',
      'Explain different methods to add elements to the DOM.',
      'How do you update element content and attributes?',
      'What are the different ways to remove elements from the DOM?',
      'How do you replace elements in the DOM?',
      'Explain the difference between append() and appendChild().',
      'How do you clone elements in the DOM?',
      'What is the DocumentFragment and why is it useful?',
      'How do you handle dynamic content creation?',
      'What are the performance considerations for DOM manipulation?',
    ],
  },
  {
    title: 'Events & Event Handling in JavaScript',
    link: 'https://www.notion.so/Lecture-15-Event-Listener-and-Handler-28e3a78e0e2280b6a720c5387d057dae',
    questions: [
      'What is event propagation?',
      'Explain the difference between event capturing and bubbling.',
      'How do you add and remove event listeners?',
      'What is the event object and what information does it contain?',
      'How do you prevent default behavior in events?',
      'What is event delegation and why is it useful?',
      'How do you create custom events?',
      'Explain the different types of mouse and keyboard events.',
      'What is the difference between target and currentTarget?',
      'How do you handle asynchronous events?',
    ],
  },
  {
    title: 'Event Loop in JavaScript (Why JS is Single-Threaded)',
    link: 'https://www.notion.so/Lecture-17-Event-Loop-in-JS-2943a78e0e22801582e6c6f4a83ecd9f',
    questions: [
      'What is the event loop in JavaScript?',
      'Explain the call stack, callback queue, and microtask queue.',
      'Why is JavaScript single-threaded?',
      'How does JavaScript handle asynchronous operations?',
      'What is the difference between microtasks and macrotasks?',
      'Explain the concept of non-blocking I/O.',
      'How does setTimeout() work with the event loop?',
      'What is the role of Web APIs in the browser?',
      'How does Promise resolution relate to the event loop?',
      'What are the potential issues with blocking the event loop?',
    ],
  },
  {
    title: 'Callback Hell & Async Programming',
    link: 'https://www.notion.so/Lecture-17-Event-Loop-in-JS-2943a78e0e22801582e6c6f4a83ecd9f',
    questions: [
      'What is callback hell?',
      'How does callback hell affect code readability and maintenance?',
      'What are the alternatives to callback hell?',
      'Explain the concept of error handling in callbacks.',
      'How do you handle multiple asynchronous operations with callbacks?',
      'What is the "Pyramid of Doom" in JavaScript?',
      'How do promises help avoid callback hell?',
      'How does async/await help with callback hell?',
      'What are the best practices for working with callbacks?',
      'Explain the concept of inversion of control with callbacks.',
    ],
  },
  {
    title: 'Promises in JavaScript | JSON vs JS Object',
    link: 'https://www.notion.so/Lecture-19-Promise-in-JS-2993a78e0e228091a900ff5fa583094a',
    questions: [
      'What is a Promise in JavaScript?',
      'Explain the states of a Promise.',
      'How do you create and consume Promises?',
      'What is the difference between Promise.all() and Promise.race()?',
      'How do you handle errors in Promises?',
      'What is the difference between JSON and JavaScript objects?',
      'How do you convert between JSON and JavaScript objects?',
      'Explain Promise chaining.',
      'What are async functions and how do they relate to Promises?',
      'How do you cancel a Promise?',
    ],
  },
  {
    title: 'Async/Await in JavaScript',
    link: 'https://www.notion.so/Lecture-20-Async-Await-in-Javascript-2a73a78e0e228063b899c85279911c35',
    questions: [
      'What are async functions?',
      'How does the await keyword work?',
      'What is the difference between async/await and Promises?',
      'How do you handle errors in async/await?',
      'Can you use await outside of an async function?',
      'How does async/await work with parallel operations?',
      'What is the return type of an async function?',
      'How do you convert existing Promise-based code to async/await?',
      'What are the performance implications of async/await?',
      'How do you handle multiple async operations with async/await?',
    ],
  },
  {
    title: 'Prototypes & Classes in JavaScript',
    link: 'https://www.notion.so/Lecture-21-Prototype-and-Class-in-javascript-2a73a78e0e2280f9a76ad7141e3bd3b6',
    questions: [
      'What is prototypal inheritance?',
      'Explain the prototype chain.',
      'What is the difference between __proto__ and prototype?',
      'How do classes work in JavaScript?',
      'What is the difference between classical and prototypal inheritance?',
      'How do you create objects using constructor functions?',
      'Explain the super() keyword in classes.',
      'What are static methods in classes?',
      'How do you implement inheritance using classes?',
      'What is the Object.create() method?',
    ],
  },
  {
    title: 'JavaScript "this" Keyword | call(), apply(), bind()',
    link: 'https://www.notion.so/Lecture-22-This-Keyword-in-javascript-2aa3a78e0e22802aa703dfcdce606b37',
    questions: [
      'What is the "this" keyword in JavaScript?',
      'How is the value of "this" determined?',
      'Explain the different ways "this" can be bound.',
      'What is the difference between call(), apply(), and bind()?',
      'How does "this" work in arrow functions?',
      'What is the value of "this" in global scope?',
      'How does "this" work in event handlers?',
      'Explain the concept of method borrowing.',
      'How do you fix "this" context issues?',
      'What is the new binding for "this"?',
    ],
  },
];

// Icons for different topics
const topicIcons = [
  'fa-globe',
  'fa-code',
  'fa-cube',
  'fa-microchip',
  'fa-sync-alt',
  'fa-calculator',
  'fa-font',
  'fa-layer-group',
  'fa-cubes',
  'fa-cogs',
  'fa-arrow-up',
  'fa-link',
  'fa-filter',
  'fa-sitemap',
  'fa-edit',
  'fa-calendar-alt',
  'fa-infinity',
  'fa-hourglass-half',
  'fa-handshake',
  'fa-bolt',
  'fa-users',
  'fa-key',
];

// DOM elements
/// DOM Elements
const topicsList = document.getElementById('topicsList');
const currentTopicTitle = document.getElementById('currentTopicTitle');
const topicLink = document.getElementById('topicLink');
const questionsContainer = document.getElementById('questionsContainer');
const welcomeMessage = document.getElementById('welcomeMessage');
const searchInput = document.getElementById('searchInput');
const progressFill = document.getElementById('progressFill');
const completedCount = document.getElementById('completedCount');
const totalCount = document.getElementById('totalCount');

// Chatbot elements
const chatbotWidget = document.getElementById('chatbotWidget');
const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotLauncher = document.getElementById('chatbotLauncher');
const chatbotMessages = document.getElementById('chatbotMessages');
const chatbotInput = document.getElementById('chatbotInput');
const sendMessage = document.getElementById('sendMessage');

// Store user progress
let userProgress = JSON.parse(localStorage.getItem('jsLearningProgress')) || {};

// Store AI answers for questions
let aiAnswers = JSON.parse(localStorage.getItem('jsLearningAIAnswers')) || {};

// Request limiting
let lastRequestTime = 0;
const MIN_REQUEST_INTERVAL = 2000; // 2 seconds between requests

// Initialize the application
function init() {
  renderTopicsList();
  setupEventListeners();
  updateProgress();

  // Load saved progress
  loadProgress();
}

// Render the topics list in the sidebar
function renderTopicsList(filteredTopics = NOTES) {
  topicsList.innerHTML = '';

  filteredTopics.forEach((topic, index) => {
    const topicItem = document.createElement('li');
    topicItem.className = 'topic-item';

    // Check if topic has progress
    const topicProgress = userProgress[topic.title] || {};
    const completedQuestions =
      Object.values(topicProgress).filter(Boolean).length;
    const totalQuestions = topic.questions.length;

    topicItem.innerHTML = `
      <i class="fas ${topicIcons[index % topicIcons.length]} topic-icon"></i>
      <span class="topic-title">${topic.title}</span>
      ${
        totalQuestions > 0
          ? `<span class="topic-progress">${completedQuestions}/${totalQuestions}</span>`
          : ''
      }
    `;

    topicItem.addEventListener('click', () => {
      selectTopic(topic, index);
    });

    topicsList.appendChild(topicItem);
  });
}

// Set up event listeners
function setupEventListeners() {
  // Search functionality
  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredTopics = NOTES.filter((topic) =>
      topic.title.toLowerCase().includes(searchTerm)
    );
    renderTopicsList(filteredTopics);
  });

  // Chatbot functionality
  chatbotLauncher.addEventListener('click', () => {
    chatbotWidget.classList.add('active');
  });

  chatbotToggle.addEventListener('click', () => {
    chatbotWidget.classList.remove('active');
  });

  sendMessage.addEventListener('click', sendUserMessage);

  chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendUserMessage();
    }
  });
}

// Select a topic and display its questions
function selectTopic(topic, index) {
  // Update active state in sidebar
  document.querySelectorAll('.topic-item').forEach((item) => {
    item.classList.remove('active');
  });
  document.querySelectorAll('.topic-item')[index].classList.add('active');

  // Update main content
  currentTopicTitle.textContent = topic.title;
  topicLink.href = topic.link;
  topicLink.style.display = 'inline-flex';

  // Hide welcome message and show questions
  welcomeMessage.style.display = 'none';

  // Render questions
  renderQuestions(topic.questions, topic.title);

  // Update progress stats
  updateProgress();
}

// Render questions for the selected topic
function renderQuestions(questions, topicTitle) {
  questionsContainer.innerHTML = '';

  // Initialize topic progress if not exists
  if (!userProgress[topicTitle]) {
    userProgress[topicTitle] = {};
  }

  questions.forEach((question, index) => {
    const isCompleted = userProgress[topicTitle][question] || false;
    const hasAIAnswer = aiAnswers[question] || false;

    const questionCard = document.createElement('div');
    questionCard.className = `question-card ${isCompleted ? 'completed' : ''}`;
    questionCard.innerHTML = `
      <div class="question-header">
        <div class="question-text">${index + 1}. ${question}</div>
        <div class="question-status">
          <i class="fas fa-${
            isCompleted ? 'check-circle' : 'circle'
          } status-icon ${isCompleted ? 'completed' : ''}"></i>
        </div>
      </div>
      <button class="answer-btn" data-question="${question}">
        <i class="fas fa-lightbulb"></i> ${
          hasAIAnswer ? 'Show Answer' : 'Get AI Answer'
        }
      </button>
      <div class="answer-content" id="answer-${index}" style="display: none;">
        ${
          hasAIAnswer
            ? `
          <div class="ai-answer">
            <div class="ai-answer-header">
              <i class="fas fa-robot"></i>
              <span>AI Explanation</span>
            </div>
            <div class="ai-answer-content">
              ${formatAIResponse(aiAnswers[question])}
            </div>
          </div>
        `
            : `
          <div class="answer-placeholder">
            <i class="fas fa-robot"></i>
            <p>Click "Get AI Answer" to generate an explanation</p>
          </div>
        `
        }
        <div class="answer-actions">
          <button class="action-btn mark-understood" data-question="${question}">
            <i class="fas fa-check"></i> Mark as Understood
          </button>
          <button class="action-btn ask-ai" data-question="${question}">
            <i class="fas fa-robot"></i> Ask AI for More Details
          </button>
        </div>
      </div>
    `;

    questionsContainer.appendChild(questionCard);
  });

  // Add event listeners to answer buttons
  document.querySelectorAll('.answer-btn').forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      const question = e.target.getAttribute('data-question');
      const topicTitle = currentTopicTitle.textContent;
      const questionCard = e.target.closest('.question-card');
      const answerContent = questionCard.querySelector('.answer-content');
      const answerBtn = questionCard.querySelector('.answer-btn');

      // If answer already exists, just toggle display
      if (aiAnswers[question]) {
        if (answerContent.style.display === 'block') {
          answerContent.style.display = 'none';
          answerBtn.innerHTML = '<i class="fas fa-lightbulb"></i> Show Answer';
        } else {
          answerContent.style.display = 'block';
          answerBtn.innerHTML = '<i class="fas fa-eye-slash"></i> Hide Answer';
        }
      } else {
        // Generate AI answer
        answerBtn.disabled = true;
        answerBtn.innerHTML =
          '<i class="fas fa-spinner fa-spin"></i> Generating...';

        try {
          const aiAnswer = await generateAIAnswer(question);
          aiAnswers[question] = aiAnswer;
          localStorage.setItem(
            'jsLearningAIAnswers',
            JSON.stringify(aiAnswers)
          );

          // Update the answer content with formatted response
          answerContent.innerHTML = `
            <div class="ai-answer">
              <div class="ai-answer-header">
                <i class="fas fa-robot"></i>
                <span>AI Explanation</span>
              </div>
              <div class="ai-answer-content">
                ${formatAIResponse(aiAnswer)}
              </div>
            </div>
            <div class="answer-actions">
              <button class="action-btn mark-understood" data-question="${question}">
                <i class="fas fa-check"></i> Mark as Understood
              </button>
              <button class="action-btn ask-ai" data-question="${question}">
                <i class="fas fa-robot"></i> Ask AI for More Details
              </button>
            </div>
          `;

          // Apply syntax highlighting to code blocks
          applySyntaxHighlightingToAnswer(answerContent);

          answerContent.style.display = 'block';
          answerBtn.innerHTML = '<i class="fas fa-eye-slash"></i> Hide Answer';

          // Reattach event listeners for the new buttons
          reattachAnswerEventListeners(questionCard, question, topicTitle);
        } catch (error) {
          console.error('Error generating AI answer:', error);
          answerBtn.innerHTML =
            '<i class="fas fa-exclamation-triangle"></i> Try Again';
          setTimeout(() => {
            answerBtn.innerHTML =
              '<i class="fas fa-lightbulb"></i> Get AI Answer';
            answerBtn.disabled = false;
          }, 2000);
        }
      }
    });
  });

  // Add event listeners for action buttons
  reattachAllEventListeners();
}

// Apply syntax highlighting to answer content
function applySyntaxHighlightingToAnswer(container) {
  const codeBlocks = container.querySelectorAll('pre code');
  codeBlocks.forEach((block) => {
    const code = block.textContent;

    let highlighted = code
      .replace(/(\/\/.*$)/gm, '<span class="code-comment">$1</span>')
      .replace(/(\/\*[\s\S]*?\*\/)/gm, '<span class="code-comment">$1</span>')
      .replace(
        /\b(function|return|const|let|var|if|else|for|while|switch|case|break|continue|class|extends|super|this|new|typeof|instanceof|void|delete|in|of|async|await|export|import|default|from|as)\b/g,
        '<span class="code-keyword">$1</span>'
      )
      .replace(
        /\b(true|false|null|undefined|NaN|Infinity)\b/g,
        '<span class="code-constant">$1</span>'
      )
      .replace(
        /\b(\d+\.?\d*|0x[\da-fA-F]+)\b/g,
        '<span class="code-number">$1</span>'
      )
      .replace(/(["'`](.*?)["'`])/g, '<span class="code-string">$1</span>')
      .replace(/(\w+)(?=\s*\()/g, '<span class="code-function">$1</span>');

    block.innerHTML = highlighted;
  });
}

// Reattach event listeners for all action buttons
function reattachAllEventListeners() {
  document.querySelectorAll('.mark-understood').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const question = e.target.getAttribute('data-question');
      const topicTitle = currentTopicTitle.textContent;
      markQuestionAsCompleted(topicTitle, question);
    });
  });

  document.querySelectorAll('.ask-ai').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const question = e.target.getAttribute('data-question');
      askAIAboutQuestion(question);
    });
  });
}

// Reattach event listeners for a specific question card
function reattachAnswerEventListeners(questionCard, question, topicTitle) {
  const markBtn = questionCard.querySelector('.mark-understood');
  const askBtn = questionCard.querySelector('.ask-ai');

  if (markBtn) {
    markBtn.addEventListener('click', () => {
      markQuestionAsCompleted(topicTitle, question);
    });
  }

  if (askBtn) {
    askBtn.addEventListener('click', () => {
      askAIAboutQuestion(question);
    });
  }
}

// Generate AI answer for a question
async function generateAIAnswer(question) {
  // Prevent rapid requests
  const now = Date.now();
  if (now - lastRequestTime < MIN_REQUEST_INTERVAL) {
    throw new Error('Rate limit exceeded');
  }
  lastRequestTime = now;

  try {
    // Use real backend API
    const response = await getAIResponse(
      `Provide a comprehensive explanation for this JavaScript concept: "${question}". 
      Please include:
      1. Clear definition and purpose
      2. Simple code examples
      3. Common use cases
      4. Best practices
      
      Format the response with clear sections and code formatting where appropriate.`
    );
    return response;
  } catch (error) {
    console.error('AI answer generation failed:', error);
    // Return a fallback answer
    return getFallbackAnswer(question);
  }
}

// Get fallback answer when AI is unavailable
function getFallbackAnswer(question) {
  const lowerQuestion = question.toLowerCase();

  // Comprehensive fallback answers with proper formatting
  const fallbackAnswers = {
    'javascript features': `**JavaScript Key Features**

JavaScript is a versatile, high-level programming language primarily used for web development.

**🎯 Key Features:**

• **Dynamic Typing**: Variables can hold any data type without explicit declaration
• **Prototype-based OOP**: Objects inherit directly from other objects  
• **First-class Functions**: Functions are treated as values that can be assigned to variables
• **Event-driven**: Handles user interactions asynchronously
• **Single-threaded**: Uses event loop for concurrency

\`\`\`javascript
// Dynamic typing demonstration
let variable = "hello";     // String
console.log(typeof variable); // "string"

variable = 42;              // Now it's a number
console.log(typeof variable); // "number"

variable = true;            // Now it's a boolean  
console.log(typeof variable); // "boolean"

variable = { name: "John" }; // Now it's an object
console.log(typeof variable); // "object"
\`\`\``,

    'data types': `**JavaScript Data Types**

JavaScript has two main categories of data types: **Primitive** and **Reference** types.

**📊 Primitive Data Types:**

• **String**: Text data like "Hello World"
• **Number**: Integer & floating-point numbers (42, 3.14)
• **Boolean**: true or false values
• **Undefined**: Variable declared but not assigned
• **Null**: Intentional absence of value
• **Symbol**: Unique, immutable identifiers
• **BigInt**: Large integers beyond Number limit

**🔗 Reference Data Types:**

• **Object**: Key-value collections \`{name: "John"}\`
• **Array**: Ordered lists \`[1, 2, 3]\`
• **Function**: Callable objects \`function() {}\`
• **Date**: Date and time information

\`\`\`javascript
// Primitive Types Examples
const name = "John";              // String
const age = 30;                   // Number  
const isStudent = false;          // Boolean
let unknown;                      // Undefined
const empty = null;               // Null
const id = Symbol("id");          // Symbol
const bigNumber = 12345678901234567890n; // BigInt

// Reference Types Examples
const person = {                  // Object
  name: "John",
  age: 30
};
const numbers = [1, 2, 3];        // Array
function greet() {                // Function
  return "Hello!";
}
const today = new Date();         // Date
\`\`\``,

    'let const var': `**let vs const vs var**

JavaScript provides three ways to declare variables, each with different scoping and behavior rules.

**📋 Comparison Table:**

| Feature | var | let | const |
|---------|-----|-----|-------|
| **Scope** | Function or Global | Block (\{\}) | Block (\{\}) |
| **Hoisting** | Hoisted & initialized (undefined) | Hoisted but not initialized (TDZ) | Hoisted but not initialized (TDZ) |
| **Redeclaration** | ✅ Allowed | ❌ Not allowed | ❌ Not allowed |
| **Reassignment** | ✅ Allowed | ✅ Allowed | ❌ Not allowed |

\`\`\`javascript
// ✅ var - function scoped, can be redeclared
var x = 1;
var x = 2; // Allowed - redeclaration
console.log(x); // 2

// ✅ let - block scoped, cannot be redeclared
let y = 1;
// let y = 2; // ❌ SyntaxError - cannot redeclare
y = 2; // ✅ Allowed - reassignment

// ✅ const - block scoped, must be initialized
const z = 1;
// z = 2; // ❌ TypeError - cannot reassign

// const with objects
const person = { name: "John" };
person.name = "Jane"; // ✅ Allowed - modifying property
// person = { name: "Jane" }; // ❌ Not allowed - reassignment

// Block scope demonstration
{
  let blockScoped = "I'm inside block";
  const alsoBlockScoped = "Me too";
  var functionScoped = "I escape the block";
}
// console.log(blockScoped); // ❌ ReferenceError
// console.log(alsoBlockScoped); // ❌ ReferenceError  
console.log(functionScoped); // ✅ "I escape the block"
\`\`\`

**💡 Best Practices:**
• Use \`const\` by default
• Use \`let\` when you need to reassign
• Avoid \`var\` in modern code
• Use descriptive variable names`,

    hoisting: `**JavaScript Hoisting**

Hoisting is JavaScript's behavior of moving declarations to the top of their scope during compilation.

**🚀 How Hoisting Works:**

• **Function Declarations**: Fully hoisted - can be called before declaration
• **var Variables**: Hoisted but initialized as undefined  
• **let/const Variables**: Hoisted but not initialized (Temporal Dead Zone)

\`\`\`javascript
// ✅ Function Hoisting - WORKS
sayHello(); // "Hello, World!"
function sayHello() {
  console.log("Hello, World!");
}

// ⚠️ var Hoisting - partially works
console.log(a); // undefined (not ReferenceError)
var a = 5;
console.log(a); // 5

// ❌ let/const Hoisting - doesn't work
// console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
let b = 10;

// console.log(c); // ❌ ReferenceError: Cannot access 'c' before initialization  
const c = 15;

// Function expression (assigned to var) - behaves like var
// sayHi(); // ❌ TypeError: sayHi is not a function
var sayHi = function() {
  console.log("Hi!");
};
\`\`\`

**⏰ Temporal Dead Zone (TDZ):**
The TDZ is the time between variable creation and initialization where the variable cannot be accessed.

\`\`\`javascript
// Temporal Dead Zone example
{
  // TDZ for 'name' starts here
  console.log(typeof name); // ❌ ReferenceError
  // TDZ ends when declaration is encountered
  let name = "John";
  console.log(name); // ✅ "John"
}
\`\`\`

**💡 Best Practices:**
• Declare variables at the top of their scope
• Use \`let\` and \`const\` instead of \`var\`
• Declare functions before using them for clarity
• Be aware of TDZ when using \`let\` and \`const\``,

    closures: `**JavaScript Closures**

A closure is a function that remembers its lexical scope even when executed outside that scope.

**🎯 Key Characteristics:**

• **Lexical Scoping**: Access to variables from outer function scope
• **Memory Preservation**: Variables are preserved between function calls
• **Function Factories**: Create specialized functions with preset values
• **Data Privacy**: Create private variables and methods

\`\`\`javascript
// Basic Closure Example
function createCounter() {
  let count = 0; // Private variable - "closed over"
  
  return function() {
    count++; // Still has access to count variable
    return count;
  };
}

// Create counter instances
const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3

console.log(counter2()); // 1 (independent instance)
console.log(counter2()); // 2
\`\`\`

**📝 Practical Closure Examples:**

\`\`\`javascript
// Example 1: Private variables
function createBankAccount(initialBalance) {
  let balance = initialBalance; // Private variable
  
  return {
    deposit: function(amount) {
      balance += amount;
      return balance;
    },
    withdraw: function(amount) {
      if (amount <= balance) {
        balance -= amount;
        return balance;
      }
      return "Insufficient funds";
    },
    getBalance: function() {
      return balance;
    }
  };
}

const account = createBankAccount(1000);
console.log(account.getBalance()); // 1000
console.log(account.deposit(500)); // 1500
console.log(account.withdraw(200)); // 1300
// console.log(balance); // ❌ Error - balance is private

// Example 2: Function factory
function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
\`\`\`

**🚀 Common Use Cases:**
• **Data Encapsulation**: Create private variables
• **Function Factories**: Generate specialized functions  
• **Event Handlers**: Preserve state between events
• **Modular Pattern**: Create self-contained modules
• **Memoization**: Cache function results`,
  };

  // Find the most relevant fallback answer
  for (const [keyword, answer] of Object.entries(fallbackAnswers)) {
    if (lowerQuestion.includes(keyword)) {
      return answer;
    }
  }

  // Generic fallback answer with proper formatting
  return `**Explanation for: ${question}**

This concept is an important part of JavaScript programming. While I'm currently experiencing high demand, here's what you should know:

**💡 What to Do Next:**
• This is a fundamental JavaScript concept worth mastering
• Practice with code examples to better understand it
• Review MDN documentation for detailed information
• Try implementing this in small projects to solidify your understanding
• Ask specific follow-up questions for clarification

**🔄 For a more detailed AI-generated explanation:** Please try the "Get AI Answer" button again in a few moments.`;
}

// Mark question as completed
function markQuestionAsCompleted(topicTitle, question) {
  if (!userProgress[topicTitle]) {
    userProgress[topicTitle] = {};
  }

  userProgress[topicTitle][question] = true;
  saveProgress();
  updateProgress();

  // Update UI
  const questionCards = document.querySelectorAll('.question-card');
  questionCards.forEach((card) => {
    const questionText = card
      .querySelector('.question-text')
      .textContent.replace(/^\d+\.\s/, '');
    if (questionText === question) {
      card.classList.add('completed');
      card.querySelector('.status-icon').className =
        'fas fa-check-circle status-icon completed';

      // Update button text if answer exists
      const answerBtn = card.querySelector('.answer-btn');
      if (aiAnswers[question]) {
        answerBtn.innerHTML = '<i class="fas fa-lightbulb"></i> Show Answer';
      }
    }
  });
}

// Ask AI about a question
function askAIAboutQuestion(question) {
  chatbotWidget.classList.add('active');
  chatbotInput.value = `Can you provide more detailed explanation with examples for: ${question}`;
  sendUserMessage();
}

// Update progress bar and stats
function updateProgress() {
  let totalQuestions = 0;
  let completedQuestions = 0;

  // Calculate overall progress
  NOTES.forEach((topic) => {
    const topicQuestions = topic.questions || [];
    totalQuestions += topicQuestions.length;

    const topicProgress = userProgress[topic.title] || {};
    completedQuestions += Object.values(topicProgress).filter(Boolean).length;
  });

  if (totalQuestions > 0) {
    const progressPercentage = (completedQuestions / totalQuestions) * 100;
    progressFill.style.width = `${progressPercentage}%`;
    completedCount.textContent = completedQuestions;
    totalCount.textContent = totalQuestions;
  } else {
    progressFill.style.width = '0%';
    completedCount.textContent = '0';
    totalCount.textContent = '0';
  }
}

// Save progress to localStorage
function saveProgress() {
  localStorage.setItem('jsLearningProgress', JSON.stringify(userProgress));
}

// Load progress from localStorage
function loadProgress() {
  const savedProgress = localStorage.getItem('jsLearningProgress');
  if (savedProgress) {
    userProgress = JSON.parse(savedProgress);
    updateProgress();
  }

  const savedAIAnswers = localStorage.getItem('jsLearningAIAnswers');
  if (savedAIAnswers) {
    aiAnswers = JSON.parse(savedAIAnswers);
  }
}

// Enhanced AI response function with better error handling
async function getAIResponse(message) {
  try {
    const response = await fetch(
      'https://development-journey.vercel.app/api/chat',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        throw new Error('rate limit exceeded');
      } else if (response.status === 500) {
        throw new Error('server error');
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    }

    const data = await response.json();

    if (data.error) {
      throw new Error(data.error);
    }

    return data.response;
  } catch (error) {
    console.error('Backend API failed:', error);
    throw error; // Re-throw to be handled by caller
  }
}

// Format AI response with proper styling (used for both chat and answers)
function formatAIResponse(text) {
  if (!text) return '';

  let formattedText = text;

  // Convert markdown-style bold **text** to HTML
  formattedText = formattedText.replace(
    /\*\*(.*?)\*\*/g,
    '<strong class="highlight-text">$1</strong>'
  );

  // Convert markdown-style italic *text* to HTML
  formattedText = formattedText.replace(
    /\*(.*?)\*/g,
    '<em class="italic-text">$1</em>'
  );

  // Convert markdown-style code blocks ```code``` to formatted blocks
  formattedText = formattedText.replace(
    /```(\w+)?\n?([\s\S]*?)```/g,
    function (match, language, code) {
      const langClass = language ? `language-${language}` : '';
      return `<div class="code-block">
        <div class="code-header">${
          language ? language.toUpperCase() + ' Code' : 'Code'
        }</div>
        <pre><code class="${langClass}">${code.trim()}</code></pre>
      </div>`;
    }
  );

  // Convert inline code `code` to styled spans
  formattedText = formattedText.replace(
    /`([^`]+)`/g,
    '<code class="inline-code">$1</code>'
  );

  // Convert bullet points and lists
  formattedText = formattedText.replace(
    /\n\s*[-•*]\s+(.*)/g,
    '\n<div class="list-item">• $1</div>'
  );

  // Convert numbered lists
  formattedText = formattedText.replace(
    /\n\s*(\d+)\.\s+(.*)/g,
    '\n<div class="list-item numbered">$1. $2</div>'
  );

  // Convert headers
  formattedText = formattedText.replace(
    /\n#\s+(.*)/g,
    '\n<h4 class="response-header">$1</h4>'
  );

  // Convert line breaks and paragraphs
  formattedText = formattedText.replace(/\n\n/g, '</p><p>');
  formattedText = formattedText.replace(/\n/g, '<br>');

  // Wrap in paragraph if no other formatting
  if (!formattedText.includes('<') && !formattedText.includes('</')) {
    formattedText = `<p>${formattedText}</p>`;
  }

  return formattedText;
}

// Add message to chatbot
function addMessage(content, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${sender}-message`;

  const avatar = document.createElement('div');
  avatar.className = 'message-avatar';
  avatar.innerHTML = `<i class="fas fa-${
    sender === 'user' ? 'user' : 'robot'
  }"></i>`;

  const messageContent = document.createElement('div');
  messageContent.className = 'message-content';

  if (
    sender === 'bot' &&
    typeof content === 'string' &&
    content.includes('<')
  ) {
    messageContent.innerHTML = content;
  } else {
    const textNode = document.createElement('p');
    textNode.textContent = content;
    messageContent.appendChild(textNode);
  }

  messageDiv.appendChild(avatar);
  messageDiv.appendChild(messageContent);

  chatbotMessages.appendChild(messageDiv);

  // Apply syntax highlighting
  applySyntaxHighlighting();

  // Scroll to bottom
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Apply syntax highlighting
function applySyntaxHighlighting() {
  const codeBlocks = chatbotMessages.querySelectorAll('pre code');
  codeBlocks.forEach((block) => {
    const code = block.textContent;

    let highlighted = code
      .replace(/(\/\/.*$)/gm, '<span class="code-comment">$1</span>')
      .replace(/(\/\*[\s\S]*?\*\/)/gm, '<span class="code-comment">$1</span>')
      .replace(
        /\b(function|return|const|let|var|if|else|for|while|switch|case|break|continue|class|extends|super|this|new|typeof|instanceof|void|delete|in|of|async|await|export|import|default|from|as)\b/g,
        '<span class="code-keyword">$1</span>'
      )
      .replace(
        /\b(true|false|null|undefined|NaN|Infinity)\b/g,
        '<span class="code-constant">$1</span>'
      )
      .replace(
        /\b(\d+\.?\d*|0x[\da-fA-F]+)\b/g,
        '<span class="code-number">$1</span>'
      )
      .replace(/(["'`](.*?)["'`])/g, '<span class="code-string">$1</span>')
      .replace(/(\w+)(?=\s*\()/g, '<span class="code-function">$1</span>');

    block.innerHTML = highlighted;
  });
}

// Send user message to chatbot
async function sendUserMessage() {
  const message = chatbotInput.value.trim();
  if (!message) return;

  // Prevent rapid requests
  const now = Date.now();
  if (now - lastRequestTime < MIN_REQUEST_INTERVAL) {
    addMessage('Please wait a moment before sending another message.', 'bot');
    return;
  }
  lastRequestTime = now;

  // Add user message to chat
  addMessage(message, 'user');
  chatbotInput.value = '';

  // Show typing indicator
  showTypingIndicator();

  try {
    const response = await getAIResponse(message);
    removeTypingIndicator();
    const formattedResponse = formatAIResponse(response);
    addMessage(formattedResponse, 'bot');
  } catch (error) {
    removeTypingIndicator();
    console.error('Chat error:', error);

    if (error.message.includes('rate limit') || error.message.includes('429')) {
      addMessage(getRateLimitMessage(), 'bot');
    } else {
      addMessage(getFallbackResponse(message), 'bot');
    }
  }
}

// Show typing indicator
function showTypingIndicator() {
  const typingDiv = document.createElement('div');
  typingDiv.className = 'message bot-message';
  typingDiv.id = 'typingIndicator';

  const avatar = document.createElement('div');
  avatar.className = 'message-avatar';
  avatar.innerHTML = '<i class="fas fa-robot"></i>';

  const content = document.createElement('div');
  content.className = 'message-content';
  content.innerHTML = `
    <div class="typing-indicator">
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    </div>
  `;

  typingDiv.appendChild(avatar);
  typingDiv.appendChild(content);

  chatbotMessages.appendChild(typingDiv);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Remove typing indicator
function removeTypingIndicator() {
  const typingIndicator = document.getElementById('typingIndicator');
  if (typingIndicator) {
    typingIndicator.remove();
  }
}

// Fallback responses for chatbot
function getFallbackResponse(message) {
  return `I'd be happy to help you learn JavaScript! Currently, I'm experiencing high demand, but here are some topics I can help with:

**📚 Available Topics:**
• Arrays and array methods
• Functions and closures  
• Objects and prototypes
• DOM manipulation
• Events and event handling
• ES6+ features
• Async programming

**💡 Try asking about:**
• "How do closures work in JavaScript?"
• "What are the different array methods?"
• "Explain promises and async/await"

Please try again in a few moments for detailed AI explanations!`;
}

// Rate limit message
function getRateLimitMessage() {
  return `**⚠️ Rate Limit Reached**

I've reached the maximum number of requests I can process right now. This is a temporary limitation.

**🔄 What you can do:**
• Wait 1-2 minutes and try again
• Continue exploring the JavaScript questions in the sidebar
• Practice with the code examples provided
• Check back in a few moments

The AI service should be available again shortly. Thank you for your patience!`;
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
