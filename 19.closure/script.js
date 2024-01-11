// What is closure?
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable: ' + outerVariable);
        console.log('Inner Variable: ' + innerVariable);
    }
}

const newFunction = outerFunction('outside');
newFunction('inside');


// 아래의 안되는 버전을 closure로 해결한 버전
let a1 = 'a';
function functionA1() {
    function functionB1() {
        let c1 = 'c';
        console.log(a1, b1, c1);
    }
    let b1 = 'b';
    console.log(a1, b1);
    functionB1();
}

functionA1();


// Example 오류 때문에 안되는 버전
let a = 'a';
function functionB() {
    let c = 'c';
    console.log(a, b, c);
}

function functionA() {
    let b = 'b';
    console.log(a, b);
    functionB();
}

functionA();