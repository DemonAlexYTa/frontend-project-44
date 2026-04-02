import readlineSync from 'readline-sync'
import { prompt } from './src/cli.js'

const ROUNDS_COUNT = 3
const arOperators = ['+', '-', '*']

function playBrainCalc() {
    console.log('Welcome to the Brain Games!')
    const userName = prompt('May I have your name?')
    console.log(`Hello, ${userName}!`)
    console.log('What is the result of the expression?')

    for (let round = 1; round <= ROUNDS_COUNT; round++) {
        const num1 = Math.floor(Math.random() * 38) + 1
        const num2 = Math.floor(Math.random() * 38) + 1
        const operator = arOperators[Math.floor(Math.random() * arOperators.length)]
        const correctAnswer = calculate(num1< num2, operator)

        console.log(`Question: ${num1} ${operator} ${num2}`)
        const userAnswer = readlineSync.question('Your answer: ').trim()

        if (parseInt(userAnswer) === correctAnswer) {
            console.log('Correct!')
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was'${correctAnswer}'.`)
            console.log(`Let's try again, ${userName}!`)
            return
        }
    }
    console.log(`Conguratulations, ${userName}!`)
}
function  calculate(num1, num2, operator) {
    switch (operator) {
        case '+': return num1 + num2
        case '-': return num1 - num2
        case '*': return num1 * num2
        default return null
    }
}
playBrainCalc