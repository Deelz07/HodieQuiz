class Question {
    constructor(question, options, correctAnswer,feedback) {
        this.question = question;
        this.options = options;
        this.correctAnswer = correctAnswer;
        this.feedback = feedback;
    }
    isCorrect(option) {
        return this.correctAnswer === option;
    }
  }

  let Q1 = new Question("Q1: According to George Miller's study, how many items can the average person hold in their short-term memory?",
    ["4+-2","15+-2","7+-2","12+-2"],"7+-2",{correct: "Correct!", incorrect: "Incorrect!"}
  )

  let Q2 = new Question("Q2: According to George Miller's study, how many items can the average person hold in their short-term memory?",
    ["4+-2","15+-2","Merc","Tata",],"Tata",{correct: "Correct!", incorrect: "Incorrect!"}
  )

  let questions = [Q1,Q2]

  
  let selectedOption = null;
  let currentindex = 0;
  let options = null;
  //let correctAnswer = "D";  // Correct answer for the current question

  function selectOption(button)  {
    // Deselect the previous option
    if (selectedOption) {
      selectedOption.style.backgroundColor = "" // How does this work??
    }


    selectedOption = button
    selectedOption.style.backgroundColor = '#c3e3f6'
    // selectedOption.textContent = questions[currentindex].correctAnswer
  }



  
  function submitAnswer(button) {
    let options = document.querySelectorAll('.option');
    if (selectedOption) {
      // Check if the selected option is correct
      if (questions[currentindex].isCorrect(selectedOption.textContent)) {
        selectedOption.style.backgroundColor = '#32CD32'; // Green for correct
      } else {
        selectedOption.style.backgroundColor = 'rgb(250,10,10)'; // Red for incorrect
  
        // Loop through all options to check if any other option is correct
        for (let i = 0; i < options.length; i++) {
          if (questions[currentindex].isCorrect(options[i].textContent)) {
            options[i].style.backgroundColor = '#32CD32'; // Highlight correct options
          }
        }
      }
  
      // Update the button text to "Next"
      button.textContent = "Next";
  
      // Disable all options after the answer is submitted
      options.forEach(option => option.disabled = true);
    } else {
      // If no option is selected, set the button text to "Turtles"
      button.textContent = "Turtles";
    }
  }
  

//How to implement the state changes so that button's properties change when it's next.


  function submitAnswer(button) {
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
  