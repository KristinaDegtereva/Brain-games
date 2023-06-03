import readlineSync from 'readline-sync';

 const randomNum = () => Math.floor(Math.random() * 100);
 const isEven = (num) => num % 2 === 0;
 const countRound = 3;

 const startRounds = () => {
    const num = randomNum();
    const question = (`${num}`);
    const correctAnswer = isEven(num) ? 'yes' : 'no';
    return [question, correctAnswer];
  };

 const startGame = (rules, startRounds) => {
    
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    
    const round = startRounds();
    console.log(`Question: ${round[1]}`)
    const answer = readlineSync.question('Your answer: ');

    
   for (let i = 0; i < countRound; i += 1) {

     if (answer === round[1]) {
        console.log('Correct!');
        return true;
     } else {
        console.log(`${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${userName}!`);
        return;
     }
   }
   console.log(`Congratulations, ${userName}!`);
 };

 export default startGame;