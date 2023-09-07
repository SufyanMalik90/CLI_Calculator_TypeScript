#! /usr/bin/env node
import inquirer from 'inquirer';
import * as Operation from './operations/Operation.js';
async function calculator() {
    try {
        const answers = await inquirer.prompt([
            {
                type: 'input',
                name: 'num1',
                message: 'Enter the first number:',
            },
            {
                type: 'input',
                name: 'num2',
                message: 'Enter the second number:',
            },
            {
                type: 'list',
                name: 'operation',
                message: 'Choose an operation:',
                choices: ['Addition', 'Subtraction', 'Multiplication', 'Division', 'Modulus'],
            },
        ]);
        const num1 = parseFloat(answers.num1);
        const num2 = parseFloat(answers.num2);
        let result;
        switch (answers.operation) {
            case 'Addition':
                result = Operation.add(num1, num2);
                break;
            case 'Subtraction':
                result = Operation.subtract(num1, num2);
                break;
            case 'Multiplication':
                result = Operation.multiply(num1, num2);
                break;
            case 'Division':
                result = Operation.divide(num1, num2);
                break;
            case 'Modulus':
                result = Operation.modulus(num1, num2);
                break;
            default:
                console.log('Invalid operation');
                return;
        }
        console.log(`Result: ${result}`);
        const continueAnswer = await inquirer.prompt([
            {
                type: 'confirm',
                name: 'continue',
                message: 'Do you want to perform another calculation?',
                default: false,
            },
        ]);
        if (continueAnswer.continue) {
            calculator();
        }
        else {
            console.log('Thank you for using the calculator!');
        }
    }
    catch (error) {
        console.error('Error:', error.message);
    }
}
console.log('====CLI Calculator====');
calculator();
