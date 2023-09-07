// calculatorOperations.js
export function add(num1: number, num2: number) {
    return num1 + num2;
  }
  
  export function subtract(num1: number, num2: number) {
    return num1 - num2;
  }
  
  export function multiply(num1: number, num2: number) {
    return num1 * num2;
  }
  
  export function divide(num1: number, num2: number) {
    if (num2 === 0) {
      throw new Error('Division by zero');
    }
    return num1 / num2;
  }
  
  export function modulus(num1: number, num2: number) {
    if (num2 === 0) {
      throw new Error('Modulus by zero');
    }
    return num1 % num2;
  }
  