const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', function(e) {
    let display_text = document.querySelector('.display');
    display_text.textContent += e.target.innerText;
}));
