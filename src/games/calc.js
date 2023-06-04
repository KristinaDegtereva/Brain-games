import startGame from '../index.js';
import randomNum from '../utils.js';

export const rules = 'What is the result of the expression?';

export const startRounds = () => {
  const operators = ['+', '-', '*'];
  const num1 = randomNum();
  const num2 = randomNum();
  const randOperator = operators[Math.floor(Math.random() * operators.length)];

  const correctAnswer = () => {
    switch (randOperator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      default:
        return num1 * num2;
    }
  };
  const question = (`${num1} ${randOperator} ${num2}`);
  return [question, correctAnswer()];
};

export default () => {
  startGame(rules, startRounds);
};
