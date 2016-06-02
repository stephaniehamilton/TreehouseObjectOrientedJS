function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
/*Check if user's answer is correct.
The question should be the only object that determines if an
answer is correct or not.*/

Question.prototype.isCorrectAnswer = function (choice) {
  return this.answer === choice;
}
