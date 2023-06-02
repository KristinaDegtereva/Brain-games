import { game, randomNum, answer } from './index.js';

game();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const startRoundsEven = () => {
  const num = randomNum();
  console.log(`Question: ${num}`);

  answer();

  const correctAnswer = num % 2 === 0 ? 'yes' : 'no';

  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  return false;
};

export default startRoundsEven;