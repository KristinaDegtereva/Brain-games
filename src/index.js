import readlineSync from 'readline-sync';

const countRound = 3;

const startGame = (rules, startRounds) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);

  for (let i = 0; i < countRound; i += 1) {
    const round = startRounds();
    console.log(`Question: ${round[0]}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === String(round[1])) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${round[1]}'\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
