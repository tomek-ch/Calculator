"use strict"

const operate = (a, b, operator) => {
    a = Number(a);
    b = Number(b);

    if (operator === '+') {
        return a + b;
    } else if (operator === '-') {
        return a - b;
    } else if (operator === '×') {
        return a * b;
    } else if (operator === '÷') {
        return a / b;
    }
}

let display = [];

const takeInput = character => {
    if (/\d/.test(character) && /\d/.test(display[display.length - 1])) {
        display[display.length - 1] += character;
    } else if (/\D/.test(character) && /^\D$/.test(display[display.length - 1]) && display) {
        display[display.length - 1] = character;
    } else display.push(character);
    document.querySelector('#display').textContent = display.join('');
}
document.querySelectorAll('button:not(#equals)').forEach(button => button.addEventListener('click', (event) => takeInput(event.target.textContent)));

const clear = () => {
    display = [];
    document.querySelector('#display').textContent = display;
}
document.querySelector('#clear').addEventListener('click', clear);

const calculate = () => {
    for (let i = 0; i < display.length; i++) {
        for (let i = 0; i < display.length; i++) {
            if (display[i] === '×'||display[i] === '÷') {
                display.splice(i - 1, 3, operate(display[i - 1], display[i + 1], display[i]));
            }
        }
    }

    for (let i = 0; i < display.length; i++) {
        for (let i = 0; i < display.length; i++) {
            if (display[i] === '+'||display[i] === '-') {
                display.splice(i - 1, 3, operate(display[i - 1], display[i + 1], display[i]));
            }
        }
    }

    document.querySelector('#display').textContent = display[0];
}

document.querySelector('#equals').addEventListener('click', () => calculate());