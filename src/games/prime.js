import startGame from '../index.js';
import randomNum from '../utils.js';

export const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const startRounds = () => {
  const num = randomNum();
  
  const isSimple = () => {
    for (let i = 3; i < num; i += 1) {
        if (num % i === 0 || num % 2 === 0) {
        return;
        } return true;
      }
  };
  const question = (`${num}`);
  const correctAnswer = isSimple(num) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  startGame(rules, startRounds);
};
