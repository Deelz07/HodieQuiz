// Quiz data
// Declared as a constnat to avoid reassignment
const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Rome"],
      correct: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      correct: "Mars"
    },
    {
      question: "What is 5 + 3?",
      options: ["5", "8", "10", "15"],
      correct: "8"
    }
  ];
  
  let currentQuestionIndex = 0;
  //hello
  // DOM Elements
  const questionTitle = document.getElementById("question-title");
  const questionText = document.getElementById("question-text");
  const optionsContainer = document.getElementById("options");
  const nextButton = document.getElementById("next-button");
  
  // Load Question
  function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionTitle.textContent = `Question ${currentQuestionIndex + 1}`;
    questionText.textContent = currentQuestion.question;
  
    // Clear previous options
    optionsContainer.innerHTML = "";
  
    // Create new options
    currentQuestion.options.forEach(option => {
      const button = document.createElement("button");
      button.classList.add("option-button");
      button.textContent = option;
      button.addEventListener("click", () => handleOptionClick(option));
      optionsContainer.appendChild(button);
    });
  
    nextButton.style.display = "none"; // Hide Next button initially
  }
  
  // Handle Option Click
  function handleOptionClick(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
  
    // Highlight correct/incorrect options
    const buttons = document.querySelectorAll(".option-button");
    buttons.forEach(button => {
      if (button.textContent === currentQuestion.correct) {
        button.style.backgroundColor = "green";
      } else if (button.textContent === selectedOption) {
        button.style.backgroundColor = "red";
      }
      button.disabled = true; // Disable all buttons after selection
    });
  
    nextButton.style.display = "block"; // Show Next button
  }
  
  // Move to Next Question
  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
  
    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
    } else {
      // Quiz End
      questionTitle.textContent = "Quiz Completed!";
      questionText.textContent = `You answered ${quizData.length} questions.`;
      optionsContainer.innerHTML = ""; // Clear options
      nextButton.style.display = "none"; // Hide Next button
    }
  });
  
  // Initialize Quiz
  loadQuestion();
  