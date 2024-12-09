class Question {
    constructor(question, options, correctAnswer) {
        this.question = question;
        this.options = options;
        this.correctAnswer = correctAnswer;
    }
    isCorrect(option) {
        return this.correctAnswer === option;
    }
  }
  
  // Example questions
  const questions = [
    new Question("Q1: According to George Miller's study, how many items can the average person hold in their short-term memory??", ["A) 4 ± 2", "B) 15 ± 2", "C) 12 ± 2", "D) 7 ± 2"], "D) 7 ± 2"),
    new Question("Q2: Which planet is known as the Red Planet?", ["A) Earth", "B) Mars", "C) Jupiter", "D) Venus"], "B) Mars"),
    new Question("Q3: What is 5 + 3?", ["A) 5", "B) 8", "C) 10", "D) 15"], "B) 8")
  ];
  
  let currentQuestionIndex = 0;
  let selectedOption = null;
  
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question-text').textContent = currentQuestion.question;
    
    const options = document.querySelectorAll('.option p');
    options.forEach((option, index) => {
      option.textContent = currentQuestion.options[index];
    });
  }
  
  function selectOption(button) {
    // Deselect the previous option if any
    if (selectedOption) {
      selectedOption.style.backgroundColor = '';  // Reset previous selected option style
    }
    
    // Highlight the selected option
    selectedOption = button;
    selectedOption.style.backgroundColor = '#c3e3f6';  // Change to a selected style
  }
  
  function submitAnswer() {
    // Check if an option is selected
    if (!selectedOption) {
      alert("Please select an answer.");
      return;
    }
    
    // Get the selected option's text
    const selectedAnswer = selectedOption.textContent.trim();
    const currentQuestion = questions[currentQuestionIndex];
    
    // Provide feedback and style the options
    const options = document.querySelectorAll('.option');
    let feedbackMessage = '';
    
    // Check if the selected answer is correct or not
    options.forEach(option => {
      const optionText = option.textContent.trim();
      
      // Apply styles based on whether the answer is correct or incorrect
      if (currentQuestion.isCorrect(optionText)) {
        option.style.backgroundColor = '#32CD32';  // Correct answer turns green
      } else if (option === selectedOption && !currentQuestion.isCorrect(optionText)) {
        option.style.backgroundColor = 'rgb(250,10,10)';  // Incorrect answer turns red
      } else {
        option.style.backgroundColor = '';  // Reset other options to default
      }
    });
  
    // Provide feedback
    if (currentQuestion.isCorrect(selectedAnswer)) {
      feedbackMessage = "Correct!";
    } else {
      feedbackMessage = `Incorrect. The correct answer is ${currentQuestion.correctAnswer}.`;
    }
    
    // Display feedback
    document.getElementById('feedback').innerHTML = feedbackMessage;
    
    // Disable further selections
    options.forEach(option => option.disabled = true);
  
    // Change the submit button to 'Next' after submission
    const submitButton = document.querySelector('.transition p');
    submitButton.textContent = 'Next';
    submitButton.onclick = nextQuestion;
  }
  
  function nextQuestion() {
    // Hide feedback and reset the options
    document.getElementById('feedback').innerHTML = '';
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.disabled = false);  // Enable options again
    selectedOption = null;  // Reset the selected option
  
    // Move to the next question
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      alert("Quiz completed!");
      // Optionally, you can reset the quiz or show final results here
    }
    
    // Reset styles
    options.forEach(option => option.style.backgroundColor = '');
    
    // Reset submit button for the next question
    const submitButton = document.querySelector('.transition p');
    submitButton.textContent = 'Submit';
    submitButton.onclick = submitAnswer;
  }
  
  // Initialize the first question
  document.addEventListener("DOMContentLoaded", loadQuestion);