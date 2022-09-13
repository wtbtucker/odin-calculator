const display_text = document.querySelector('.display');

const clear_button = document.getElementById('clear');
clear_button.addEventListener('click', function() {
    display_text.textContent = '';
});

const digits = document.querySelectorAll('.digit');
digits.forEach(button => button.addEventListener('click', () => {
    display_text.textContent += e.target.innerText;
}));

// display the plus?
// wait for user to type more numbers
    // would need to remember first operand and the plus operator

const plus_button = document.getElementById('plus');
plus_button.addEventListener('click', () => {
    operand_one = Number(display_text.textContent);
    display_text.textContent = '';
    return operand_one;
})


function add(a,b) {
    return Number(a) + Number(b);
}

function subtract(a,b) {
    return Number(a) - Number(b);
}

function multiply(a,b) {
    return Number(a) * Number(b);
}

function divide(a,b) {
    return Number(a) / Number(b);
}

function operate(a, b, operator) {
    let result = 0;
    switch(true) {
        case (operator === '+'):
            result = add(a,b)
            return result;
        case (operator === '-'):
            result = subtract(a,b)
            return result;
        case (operator === '*'):
            result = multiply(a,b)
            return result;
        case (operator === '/'):
            result = divide(a,b)
            return result;
    }
}
// wait for user to type more numbers

