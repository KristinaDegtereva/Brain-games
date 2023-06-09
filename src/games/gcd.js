import startGame from '../index.js';
import getRandomIntInclusive from '../utils.js';

const rules = 'Find the greatest common divisor of given numbers.';

const calcGcd = (num1, num2) => {
  let result = 0;
  let a = num1;
  let b = num2;

  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
    result = a + b;
  }
  return result;
};

const startRounds = () => {
  const num1 = getRandomIntInclusive(1, 100);
  const num2 = getRandomIntInclusive(1, 100);

  const correctAnswer = String(calcGcd(num1, num2));
  const question = (`${num1} ${num2}`);
  return [question, correctAnswer];
};

export default () => {
  startGame(rules, startRounds);
};
