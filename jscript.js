const display_text = document.querySelector('.display');
const digits = document.querySelectorAll('.digit');
const operator_buttons = document.querySelectorAll('.operator');
const clear_button = document.getElementById('clear');
const equals_button = document.getElementById('equals');

clear_button.addEventListener('click', function() {
    display_text.textContent = '';
});


digits.forEach(button => button.addEventListener('click', Event => {
    display_text.textContent += Event.target.innerText;
}));


operator_buttons.forEach(operator_button => {operator_button.addEventListener('click', Event => {
    display_text.textContent += ` ${Event.target.innerText} `;
})});

equals_button.addEventListener('click', () => {
    let display_expression = display_text.textContent;
    let expression_list = display_expression.split(' ');
    display_text.textContent = operate(expression_list)
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

function operate([a, operator, b]) {
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

