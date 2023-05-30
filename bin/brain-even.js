#!/usr/bin/env node
import readlineSync from 'readline-sync'

const greeting = () => {
console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
};
export default greeting;

greeting();

const randomNum = Math.floor(Math.random() * 100);

console.log(`Answer "yes" if the number is even, otherwise answer "no".`);
console.log(`Question: ${randomNum}`);

const answer = readlineSync.question('Your answer: ');

const startRounds = () => {
const correctAnswer = randomNum % 2 === 0 ? 'yes' : 'no';

if (answer === correctAnswer) {
    console.log('Correct!');
  return true;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was ${correctAnswer}`);
    return false;
  }
}
const startGame = () => {
    for (let i = 0; i < 3; i+= 1 ) {
      const isCorrect = startRounds();
      
      if (isCorrect === false) {
        console.log(`Let's try again, ${userName}`);
        return;
      }  
    }
    console.log(`Congratulations, ${userName}`);
  };

startGame();
