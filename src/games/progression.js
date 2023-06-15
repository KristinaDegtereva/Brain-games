import startGame from '../index.js';
import getRandomIntInclusive from '../utils.js';

const rule = 'What number is missing in the progression?';

const getProgression = (firstNum, progressionStep, progressionLength) => {
  const progression = [];
  let temp = firstNum;
  for (let i = 0; i < progressionLength; i += 1) {
    const nextNum = temp + progressionStep;
    temp = nextNum;
    progression.push(nextNum);
  }
  return progression;
};

const preparingTheRound = () => {
  const progressionStep = getRandomIntInclusive(1, 100);
  const firstNum = getRandomIntInclusive(1, 100);
  const progressionLength = 10;

  const hiddenNum = getRandomIntInclusive(0, progressionLength - 1);

  const correctProgression = getProgression(firstNum, progressionStep, progressionLength);
  const correctAnswer = `${correctProgression[hiddenNum]}`;

  const strProgression = correctProgression.join(' ');
  const question = strProgression.replace(correctAnswer, '..');

  return [question, correctAnswer];
};

export default () => {
  startGame(rule, preparingTheRound);
};
