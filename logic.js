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

const submitButton = document.getElementById('submitButton');
let isSubmitState = true; //True if an answer has not been chosen yet.

//Using states to create two different functionalities for the same button.
submitButton.addEventListener('click', ()=>{ 
    if (isSubmitState) {
        submitAnswer();
    } 
    else {
        nextQuestion();
    }
    });

