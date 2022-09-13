const display_text = document.querySelector('.display');

const clear_button = document.getElementById('clear');
clear_button.addEventListener('click', function() {
    display_text.textContent = '';
});

const digits = document.querySelectorAll('.digit');
digits.forEach(button => button.addEventListener('click', function(e) {
    display_text.textContent += e.target.innerText;
}));

// add
// event listener to add button
const plus_button = document.getElementById('plus');
plus_button.addEventListener('click', () => {
    operand_one = Number(display_text.textContent);
    display_text.textContent = '';
    return operand_one;
})
// when clicked store the textcontent of display in a variable
// wait for user to type more numbers
