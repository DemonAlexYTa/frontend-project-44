#!/usr/bin/env node
import readlineSync from 'readline-sync'
import { greet } from '../src/cli.js'

function isPrime(num) {
  if (num < 2) {
    return false
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}
function randomJustNumber() {
  return Math.floor(Math.random() * 10) + 1
}
function playBrainPrime() {
  console.log('Welcome to the Brain Games!')
  const userName = greet()
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

  for (let round = 1; round <= 3; round++) {
    const randomNumber = randomJustNumber()
    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no'
    console.log(`Question: ${randomNumber}`)
    const userAnswer = readlineSync.question('Your answer: ').trim().toLowerCase()

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}'is wrong answer. ;( Correct answer was'${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }
    console.log('Correct!')
  }
  console.log(`Conguratulations, ${userName}!`)
}
playBrainPrime()
