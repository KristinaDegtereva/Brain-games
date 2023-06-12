import startGame from '../index.js';
import getRandomIntInclusive from '../utils.js';

const isEven = (num) => num % 2 === 0;

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const startRounds = () => {
  const num = getRandomIntInclusive(1, 100);

  const correctAnswer = isEven(num) ? 'yes' : 'no';
  const question = (`${num}`);

  return [question, correctAnswer];
};

export default () => {
  startGame(rules, startRounds);
};
