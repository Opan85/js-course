'use strict'


let numbers = [];
let userInput;
const messageEnter = 'Введите пожалуйста число';
const messageWarning = 'Это не число, попробуйте ещё раз';
const messageNoEnter = 'Число не введено';
let sum = 0;

do {
    input = prompt(messageEnter);
    if (userInput === null) {
        alert(messageNoEnter);
    } else if (!isNaN(parseFloat(userInput))) {
      numbers.push(Number(UserInput));  
    } else {
        alert(messageWarning);
    }
} while (UserInput !== null);

if (numbers.length) {
    for (const value of numbers) {
        sum += value;
    }
    alert(`Общая сумма чисел равна ${sum}`);
}