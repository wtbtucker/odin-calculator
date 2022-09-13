const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', function(e) {
    console.log(e.target.innerText);
    // append event target to display innertext
    //
}));
