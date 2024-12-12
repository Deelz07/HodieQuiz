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
let questions = [Q1,Q2,Q3,Q4,Q5]


let selectedOption = null;
let currentindex = 0;
let options = null;
let ptag = null;
let newtext = null;
let newsubmit = null;
const submitButton = document.getElementById('submitButton');
let isSubmitState = true;
const originallength = questions.length;
let correctcount = 0;

console.log(submitButton)

submitButton.addEventListener('click', (event)=>{ // Don't understand event parameter here??????
  if (isSubmitState) {
    submitAnswer(event);
  } else {
    nextQuestion();
  }
});

function normalisetext(text) {
  return text.trim();
}

function selectOption(button)  {
  // Deselect the previous option
  console.log(selectedOption)
  if (selectedOption) {
    selectedOption.style.backgroundColor = "" // How does this work??
  }
  selectedOption = button;
  selectedOption.style.backgroundColor = '#c3e3f6';
}




function submitAnswer(event) {

  console.log(event)



  options = document.querySelectorAll('.option');
  newsubmit = event.target;
  console.log(newsubmit)

  if (selectedOption) {
    // Check if the selected option is correct
    if (questions[currentindex].isCorrect(normalisetext(selectedOption.textContent))) {
      selectedOption.style.backgroundColor = '#32CD32'; // Green for correct
    } else {
      console.log(questions.length)
      questions.push(questions[currentindex])
      console.log(questions.length)
      selectedOption.style.backgroundColor = 'rgb(250,10,10)'; // Red for incorrect

      // Loop through all options to check if any other option is correct
      for (let i = 0; i < options.length; i++) {
        if (questions[currentindex].isCorrect(normalisetext(options[i].textContent))) {
          options[i].style.backgroundColor = '#32CD32'; // Highlight correct options
        }
      }
    }

    // Change the button text to "Next"
    // ptag = newsubmit.querySelector('p');
    // console.log(ptag)
    newsubmit.textContent = "Next";

    // Disable all options after the answer is submitted
    options.forEach(option => option.disabled = true);

    // Change state from submitAnswer to nextQuestion
    isSubmitState = false;
  }

  
}

  

function nextQuestion() {
  console.log(currentindex+1,questions.length)
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
      ptag.innerHTML = normalisetext(newtext); // Update option text
    }

    // Reset the button text back to "Submit"
    newsubmit = document.getElementById('submitButton');
    console.log(newsubmit)

    console.log(newsubmit);
    newsubmit.innerHTML = "Submit";

    // Change state back to the submit state
    isSubmitState = true;

    // Reset selectedOption for the next question
    selectedOption = null;
    console.log(selectedOption)

    question = document.querySelector('#question-text');
    question.innerHTML = questions[currentindex].question
  }
  //Add else functionality: End of quiz

}

// Extras: Add abiility to redo incorrect questions + add 