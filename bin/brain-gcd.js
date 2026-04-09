#!/usr/bin/env node
import readlineSync from 'readline-sync'
import { greet } from '../src/cli.js'

function gcd(a, b) {
  a = Math.abs(a)
  b = Math.abs(b)

  while (b !== 0) {
    let temp = b
    b = a % b
    a = temp
  }
  return a
}
function playBrainGcd() {
  console.log('Welcome to the Brain Games!')
  const userName = greet()
  console.log('Find the greatest common divisor of given numbers.')

  for (let round = 1; round < 4; round++) {
    const a = Math.floor(Math.random() * 30) + 1
    const b = Math.floor(Math.random() * 30) + 1

    const correctAnswer = gcd(a, b)
    console.log(`Question: ${a} ${b}`)
    const userAnswer = readlineSync.question('Your answer:').trim()

    if (parseInt(userAnswer) === correctAnswer) {
      console.log('Correct')
    }
    else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }
  }
  console.log(`Congratulations, ${userName}!`)
}
playBrainGcd()
