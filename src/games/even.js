import startGame from '../index.js';
import randomNum from '../utils.js';

const isEven = (num) => num % 2 === 0;
export const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const startRounds = () => {
  const num = randomNum();
  const question = (`${num}`);
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  startGame(rules, startRounds);
};
