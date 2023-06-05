import startGame from '../index.js';
import randomNum from '../utils.js';

export const rules = 'What number is missing in the progression?';

export const startRounds = () => {
  let firstNum = randomNum();
  const prog = [firstNum];
  const num = randomNum();
  const hiddenNum = Math.floor(Math.random() * 11);

  const numProgression = () => {
    for (let i = 0; i < 9; i += 1) {
      const nextNum = firstNum + num;
      firstNum = nextNum;
      prog.push(nextNum);
    }
    return prog;
  };

  const correctAnswer = () => `${numProgression()[hiddenNum]}`;
  const str = numProgression().join(' ');
  const re = `${numProgression()[hiddenNum]}`;
  const question = () => str.replace(re, '..');

  return [question(), correctAnswer()];
};

export default () => {
  startGame(rules, startRounds);
};
