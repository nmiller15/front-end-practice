const check = document.getElementById('check');
const btn = document.getElementById('btn');
const message = document.getElementById('message');

btn.addEventListener('click', () => {
    btn.classList.add('hide');
    check.classList.add('rotateIn');
    message.classList.add('fadeIn');
});

// Attribution:

// This source code is not my own.
// This code was written and shared by:
// @tom.is.coding - Instagram 
// https://www.instagram.com/p/C5yWU-5tn5x/?igsh=Y3ZjZWgyMGVxNDdm&img_index=3