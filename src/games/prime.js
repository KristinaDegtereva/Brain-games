import startGame from '../index.js';
import getRandomIntInclusive from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const sqrt = Math.sqrt(num);

  if (num < 2) {
    return 'no';
  }

  for (let i = 2; i < sqrt; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const startRounds = () => {
  const num = getRandomIntInclusive(1, 100);

  const question = (`${num}`);
  const correctAnswer = isPrime(num);

  return [question, correctAnswer];
};

export default () => {
  startGame(rules, startRounds);
};
