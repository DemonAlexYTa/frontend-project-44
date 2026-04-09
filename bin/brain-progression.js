import readlineSync from 'readline-sync'
import { greet } from './src/cli.js'

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function generateProgression() {
  const length = getRandomInt(5, 10);      
  const start = getRandomInt(1, 50);       
  const step = getRandomInt(1, 10);        
  const hiddenIndex = getRandomInt(0, length - 1); 

  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }

  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';

  const question = progression.join(' ');
  return { question, correctAnswer };
}


function playBrainProgression() {
  console.log('Welcome to the Brain Games!');
  const userName = greet();
  console.log('What number is missing in the progression?');

  for (let round = 1; round <= 3; round++) {
    const { question, correctAnswer } = generateProgression();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ').trim().replace(/['"]/g, '');

    if (parseInt(userAnswer) === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
}

playBrainProgression();