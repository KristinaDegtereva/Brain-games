import startGame from '../index.js';
import randomNum from '../utils.js';

export const rules = 'Find the greatest common divisor of given numbers.';

export const startRounds = () => {
  const num1 = randomNum();
  const num2 = randomNum();

  const correctAnswer = () => {
    const divisorsNum1 = [];
    const divisorsNum2 = [];

    for (let i = 1; i <= num1; i += 1) {
      if (num1 % i === 0) {
        divisorsNum1.push(i);
      }
    }

    for (let i = 1; i <= num2; i += 1) {
      if (num2 % i === 0) {
        divisorsNum2.push(i);
      }
    }
    const commonDivisors = (arr1, arr2) => {
      const size1 = arr1.length;
      const size2 = arr2.length;

      let i1 = 0;
      let i2 = 0;
      const result = [];

      while (i1 < size1 && i2 < size2) {
        const lastCommon = result.at(-1);
        const item1 = arr1[i1];
        const item2 = arr2[i2];
        if (item1 === item2 && item1 !== lastCommon) {
          result.push(item1);
          i1 += 1;
          i2 += 1;
        } else if (item1 > item2) {
          i2 += 1;
        } else {
          i1 += 1;
        }
      }
      return `${result.at(-1)}`;
    };
    return commonDivisors(divisorsNum1, divisorsNum2);
  };
  const question = (`${num1} ${num2}`);
  return [question, correctAnswer()];
};

export default () => {
  startGame(rules, startRounds);
};
