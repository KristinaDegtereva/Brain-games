import readlineSync from 'readline-sync';

const countRound = 3;
export const randomNum = () => Math.floor(Math.random() * 100);
export const answer = () => readlineSync.question('Your answer: ');

export const game = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

const startGame = () => {
    for (let i = 0; i < countRound; i += 1) {
      const isCorrect = correctAnswer();
  
      if (isCorrect === false) {
        console.log(`Let's try again, ${userName}!`);
        return;
      }
    }
    console.log(`Congratulations, ${userName}!`);
  };
}
  
  export default game;

