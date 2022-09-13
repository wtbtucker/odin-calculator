const display_text = document.querySelector('.display');

const clear_button = document.getElementById('clear');
clear_button.addEventListener('click', function() {
    display_text.textContent = '';
});

const digits = document.querySelectorAll('.digit');
digits.forEach(button => button.addEventListener('click', function(e) {
    display_text.textContent += e.target.innerText;
}));
