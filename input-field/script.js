const input = document.querySelector(".input_field");
const inputIcon = document.querySelector(".input_icon");

inputIcon.addEventListener("click", (e) => {
    e.preventDefault();

    inputIcon.setAttribute(
        'src',
        input.getAttribute('type') === 'password' ?
        'assets/eye-off.svg'
          :
        'assets/eye.svg'
    );

    input.setAttribute(
        'type',
        input.getAttribute('type') === 'password' ?
        'text'
          :
        'password'
    );
})

// Attribution:

// This source code is not my own.
// This code was written and shared by:

// @davidm_ai - Instagram 
