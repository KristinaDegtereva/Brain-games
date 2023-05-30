import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const randomNum = () => Math.floor(Math.random() * 100);

const startRounds = () => {
  const num = randomNum();
  console.log(`Question: ${num}`);

  const answer = readlineSync.question('Your answer: ');

  const correctAnswer = num % 2 === 0 ? 'yes' : 'no';

  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  return false;
};

const countRound = 3;
const startGame = () => {
  for (let i = 0; i < countRound; i += 1) {
    const isCorrect = startRounds();

    if (isCorrect === false) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
