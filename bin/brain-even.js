#!/usr/bin/env node
import readlineSync from 'readline-sync'
import { greet } from '../src/cli.js'

const ROUNDS_COUNT = 3

function isEven(number) {
  return number % 2 === 0
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function playBraineven() {
  console.log('Welcome to the Brain Games!')
  const userName = greet()
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  for (let round = 1; round <= ROUNDS_COUNT; round += 1) {
    const randomNumber = getRandomNumber(1, 100)
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no'

    console.log(`Question: ${randomNumber}`)
    const userAnswer = readlineSync.question('Your answer:').trim().toLowerCase()
    if (userAnswer !== correctAnswer) {
      console.log (`'${userAnswer}' is wrong answer ;(. Correct answer ;'${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }

    console.log('Correct')
  }
  console.log(`Congratulations, ${userName}!`)
}

playBraineven()
