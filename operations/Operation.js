// calculatorOperations.js
export function add(num1, num2) {
    return num1 + num2;
}
export function subtract(num1, num2) {
    return num1 - num2;
}
export function multiply(num1, num2) {
    return num1 * num2;
}
export function divide(num1, num2) {
    if (num2 === 0) {
        throw new Error('Division by zero');
    }
    return num1 / num2;
}
export function modulus(num1, num2) {
    if (num2 === 0) {
        throw new Error('Modulus by zero');
    }
    return num1 % num2;
}
