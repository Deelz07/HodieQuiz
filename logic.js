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

let selectedOption = null;
let correctAnswer = "D";  // Correct answer for the current question

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
  if (selectedOption)
  // Check if an option is selected
  // Get the selected option's text
  {const selectedAnswer = selectedOption.textContent.trim().split(')')[0];
  
  // Provide feedback and style the options
  const options = document.querySelectorAll('.option');
  let feedbackMessage = '';
  
  // Check if the selected answer is correct or not
  options.forEach(option => {
    const optionText = option.textContent.trim().split(')')[0];
    
    // Apply styles based on whether the answer is correct or incorrect
    if (optionText === correctAnswer) {
      option.style.backgroundColor = '#32CD32';  // Correct answer turns green
    } else if (option === selectedOption && optionText !== correctAnswer) {
      option.style.backgroundColor = 'rgb(250,10,10)';  // Incorrect answer turns red
    } else {
      option.style.backgroundColor = '';  // Reset other options to default
    }
  });

  // Provide feedback
  if (selectedAnswer === correctAnswer) {
    feedbackMessage = "Correct! The average person can hold 7 ± 2 items in their short-term memory.";
  } else {
    feedbackMessage = `Incorrect. The correct answer is D) 7 ± 2.`;
  }
  
  // Display feedback
  document.getElementById('feedback').innerHTML = feedbackMessage;
  
  // Disable further selections
  options.forEach(option => option.disabled = true);

  // Change the submit button to 'Next' after submission
  const submitButton = document.querySelector('.transition p');
  submitButton.textContent = 'Next';
  submitButton.onclick = nextQuestion;}
  }
  
  


function nextQuestion() {
  // Hide feedback and reset the options
  document.getElementById('feedback').innerHTML = '';
  const options = document.querySelectorAll('.option');
  options.forEach(option => option.disabled = false);  // Enable options again
  selectedOption = null;  // Reset the selected option

  // Update the question and options for the next question (you can update with real data)
  document.getElementById('question-text').textContent = "Q2: Your next question goes here.";
  
  // Reset styles
  options.forEach(option => option.style.backgroundColor = '');
  
  // Reset submit button for the next question
  const submitButton = document.querySelector('.transition p');
  submitButton.textContent = 'Submit';
  submitButton.onclick = submitAnswer;
}
