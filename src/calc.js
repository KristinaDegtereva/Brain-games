import { game, randomNum, answer } from './index.js';

game ();
console.log('What is the result of the expression?');

const startRoundsCalc = () => {
  const operators = ['+', '-', '*'];
  const num1 = randomNum();
  const num2 = randomNum();
  const randOperator = operators[Math.floor(Math.random() * operators.length)];
  console.log(`Question: ${num1} ${randOperator} ${num2}`);

  answer();

  const isCalc = () => {
    switch (randOperator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      default:
        return num1 * num2;
    }
  };

  if (Number(answer) === correctAnswer()) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer()}'`);
  return false;
};

export default startRoundsCalc;