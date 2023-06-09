import startGame from '../index.js';
import getRandomIntInclusive from '../utils.js';

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const startRounds = () => {
  const num = getRandomIntInclusive(1, 100);

  const correctAnswer = isEven(num);
  const question = (`${num}`);

  return [question, correctAnswer];
};

export default () => {
  startGame(rules, startRounds);
};
