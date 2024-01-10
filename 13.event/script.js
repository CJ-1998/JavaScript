// event 알아보기

// CLICK EVENT
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('form');
const title1 = document.querySelector('h2');
// Click
submitBtn.addEventListener('click', handleEvent);
// Doubleclick
submitBtn.addEventListener('dblclick', handleEvent);
// Mousedown
submitBtn.addEventListener('mousedown', handleEvent);
// Mouseup
submitBtn.addEventListener('mouseup', handleEvent);
// Mouseenter
submitBtn.addEventListener('mouseenter', handleEvent);
// Mouseleave
submitBtn.addEventListener('mouseleave', handleEvent);
// Mousemove
container.addEventListener('mousemove', handleEvent);

// Event Handler
function handleEvent(e) {
    e.preventDefault();
    console.log(`EVENT TYPE: ${e.type}`);
    title1.textContent= `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
}

// FORM EVENT
const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const title = document.querySelector('h2');

// Clear input
emailInput.value = '';

form.addEventListener('submit', handleEvent1);

// Keydown
emailInput.addEventListener('keydown', handleEvent1);
// keyup
emailInput.addEventListener('keyup', handleEvent1);
// Keypress
emailInput.addEventListener('keypress', handleEvent1);
// Focus
emailInput.addEventListener('focus', handleEvent1);
// Blur (focus 하고 다른 곳 클릭하면...)
emailInput.addEventListener('blur', handleEvent1);
// Cut (잘라내기 할 때)
emailInput.addEventListener('cut', handleEvent1);
// Paste (붙여 넣기 할 때)
emailInput.addEventListener('paste', handleEvent1);
// Input (input 요소 값이 달라졌을 때)
emailInput.addEventListener('input', handleEvent1);

function handleEvent1(e) {
    console.log(`EVENT TYPE: ${e.type}`);

    if (e.type === 'submit') {
        e.preventDefault();
    }

    console.log(e.target.value);
    title.innerText = e.target.value;
}


