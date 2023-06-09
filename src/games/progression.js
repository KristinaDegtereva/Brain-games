import startGame from '../index.js';
import getRandomIntInclusive from '../utils.js';

const rules = 'What number is missing in the progression?';
const progressionLength = 10;

const numProgression = (progressionStep, progression) => {
  let firstNum = getRandomIntInclusive(1, 100);
  for (let i = 0; i < progressionLength; i += 1) {
    const nextNum = firstNum + progressionStep;
    firstNum = nextNum;
    progression.push(nextNum);
  }
  return progression;
};

const startRounds = () => {
  const progressionStep = getRandomIntInclusive(1, 100);
  const progression = [];

  const hiddenNum = getRandomIntInclusive(0, progressionLength);

  const correctProgression = numProgression(progressionStep, progression);
  const correctAnswer = `${correctProgression[hiddenNum]}`;

  const strProgression = correctProgression.join(' ');
  const question = strProgression.replace(correctAnswer, '..');

  return [question, correctAnswer];
};

export default () => {
  startGame(rules, startRounds);
};
