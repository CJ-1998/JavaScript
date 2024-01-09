// window 객체 알아보기

// WINDOW
// Alert
alert('Hello World');

// Prompt
const input = prompt();
alert(input);

// Confirm
if (confirm('Yes or No')) {
    console.log('YES');
} else {
    console.log('NO');
}

let val;

// Outer height and width
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
val = window.scrollY;
val = window.scrollX;


// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// Redirect
window.location.href = 'http://google.com';
//Reload
window.location.reload();

// History Object

window.history.go(-2);
val = window.history.length;

// Navigator Object
val = window.navigator;
val = window.navigator.userAgent;
val = window.navigator.language;

console.log(val);


var greeting = 'hello';

function doGreeting() {
    return greeting;
}

console.log(window.greeting); // hello
console.log(window.doGreeting()); // hello
