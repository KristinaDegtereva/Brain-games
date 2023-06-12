import startGame from '../index.js';
import getRandomIntInclusive from '../utils.js';

const rules = 'What number is missing in the progression?';
const progressionLength = 10;

const numProgression = (firstNum, progressionStep) => {
  const progression = [];
  let temp = firstNum;
  for (let i = 0; i < progressionLength; i += 1) {
    const nextNum = temp + progressionStep;
    temp = nextNum;
    progression.push(nextNum);
  }
  return progression;
};

const startRounds = () => {
  const progressionStep = getRandomIntInclusive(1, 100);
  const firstNum = getRandomIntInclusive(1, 100);

  const hiddenNum = getRandomIntInclusive(0, progressionLength - 1);

  const correctProgression = numProgression(firstNum, progressionStep);
  const correctAnswer = `${correctProgression[hiddenNum]}`;

  const strProgression = correctProgression.join(' ');
  const question = strProgression.replace(correctAnswer, '..');

  return [question, correctAnswer];
};

export default () => {
  startGame(rules, startRounds);
};
