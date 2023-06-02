import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('What is the result of the expression?');

const randomNum = () => Math.floor(Math.random() * 100);

const startRounds = () => {
  const operators = ['+', '-', '*'];
  const num1 = randomNum();
  const num2 = randomNum();
  const randOperator = operators[Math.floor(Math.random() * operators.length)];
  console.log(`Question: ${num1} ${randOperator} ${num2}`);

  const answer = readlineSync.question('Your answer: ');

  const correctAnswer = () => {
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
