//Data class
class Question {
    constructor(question, options, correctAnswer,feedback) {
        this.question = question;
        this.options = options;
        this.correctAnswer = correctAnswer;
        this.feedback = feedback;
    }
    isCorrect(option) {
        return this.correctAnswer == option;
    }
  }

// Initialising Data
let Q1 = new Question("Q1: According to George Miller's study, how many items can the average person hold in their short-term memory?",
  ["A) 4 ± 2","B) 15 ± 2","C) 12 ± 2","D) 7 ± 2"],"D) 7 ± 2",{correct: "Correct!", incorrect: "Incorrect!"}
)

let Q2 = new Question("Q2:What is the term for grouping information into meaningful units to enhance memory capacity?",
  ["A) Categorising","B) Chunking","C) Mapping","D) Clustering",],"B) Chunking",{correct: "Correct!", incorrect: "Incorrect!"})

let Q3 = new Question("Q3: Why does our brain struggle with processing too much information at once? ",
  ["A) It prioritizes unrelated details","B) It has a limited processing capacity.", 
    "C) It focuses on emotional over factual data.", "D) It relies entirely on long-term memory.",],
    "B) It has a limited processing capacity.",{correct: "Correct!", incorrect: "Incorrect!"})

let Q4 = new Question("Q4: Which of these is NOT an example of chunking? ",
    ["A) Grouping phone numbers into sections (e.g., 123-456-7890).", "B) Learning historical dates as part of a timeline.", 
      "C) Memorizing a list of random, unrelated words.","D) Breaking down a speech into key points.",],"C) Memorizing a list of random, unrelated words.",{correct: "Correct!", incorrect: "Incorrect!"})

let Q5 = new Question("Q5:What is a suggested method to manage memory limitations and information overload?",
  ["A) Avoid all distractions", "B) Chunk information into manageable pieces.", "C) Rely solely on long-term memory.", "D) Study continuously without breaks."],"B) Chunk information into manageable pieces.",{correct: "Correct!", incorrect: "Incorrect!"})

//Variable declaration
let questions = [Q1,Q2,Q3,Q4,Q5] //good
let selectedOption = null; //good
let currentindex = 0; //
let options = null;
let ptag = null;
let newtext = null;
const submitButton = document.getElementById('submitButton');
let isAnswerSubmitted = false; //False only when the answer has been submitted 
const originallength = questions.length;
let correctcount = 0;


submitButton.addEventListener('click', ()=>{ 
  if (isAnswerSubmitted) {
    nextQuestion();
  } 
  else {
      submitAnswer();
  }
  });


//Initialised via onlick in the HTML document.
function selectOption(button)  {
  // Deselect the previous option
  if (selectedOption) {
    selectedOption.style.backgroundColor = "" //Set current button back to default colour (Visually unselects it)
  }
  selectedOption = button; //logically selects new button
  selectedOption.style.backgroundColor = '#c3e3f6'; //Visually selects new button
}


function submitAnswer() {
  options = document.querySelectorAll('.option');

  if (selectedOption) {
    // Check if the selected option is correct
    if (questions[currentindex].isCorrect(selectedOption.textContent.trim())) {
      selectedOption.style.backgroundColor = '#32CD32'; // Green for correct
    } else {
      questions.push(questions[currentindex])
      selectedOption.style.backgroundColor = 'rgb(250,10,10)'; // Red for incorrect

      // Loop through all options to check if any other option is correct
      for (let i = 0; i < options.length; i++) {
        if (questions[currentindex].isCorrect(options[i].textContent.trim())) {
          options[i].style.backgroundColor = '#32CD32'; // Highlight correct options
        }
      }
    }

    // Change the button text to "Next"
    submitButton.textContent = "Next";

    // Disable all options after the answer is submitted
    options.forEach(option => option.disabled = true);

    // Change state from submitAnswer to nextQuestion
    isAnswerSubmitted = true;
  }
}

  

function nextQuestion() {
  if (currentindex+1 < questions.length) {
    currentindex += 1;
    if (currentindex==originallength) {
      document.body.style.backgroundColor = "#d5cef1"
    }

    // Reset options to be clickable and change back to default colors
    options.forEach(option => {
      option.disabled = false;
      option.style.backgroundColor = ""; // Reset background color
    });

    // Update the question and options on the page
    for (let i = 0; i < options.length; i++) {
      let newtext = questions[currentindex].options[i];
      let ptag = options[i].querySelector('p');
      ptag.innerHTML = newtext.trim(); // Update option text
    }

    // Reset the button text back to "Submit"

    submitButton.innerHTML = "Submit";

    // Change state back to not submitted state
    isAnswerSubmitted = false;

    // Reset selectedOption for the next question
    selectedOption = null;
    console.log(selectedOption)

    question = document.querySelector('#question-text');
    question.innerHTML = questions[currentindex].question
  }
  //Add else functionality: End of quiz

}

// Extras: Add abiility to redo incorrect questions + add 