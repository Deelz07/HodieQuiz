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

let selected = false /* why let? */
let current = null;

function selectOption(option) {
    if (!selected) {
      option.style.backgroundColor = "#c3e3f6"; // Light blue
      selected = true;
      current = option;
    } else {
      option.style.backgroundColor = "#c3e3f6";
      current.style.backgroundColor = "white";
      current = option;
    }
  }


// function submitanswer(this) {
//   if (selected) {
//     if 
//   }
// }

