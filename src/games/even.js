import startGame from '../index.js';
import getRandomIntInclusive from '../utils.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const preparingTheRound = () => {
  const num = getRandomIntInclusive(1, 100);

  const correctAnswer = isEven(num) ? 'yes' : 'no';
  const question = (`${num}`);

  return [question, correctAnswer];
};

export default () => {
  startGame(rule, preparingTheRound);
};
