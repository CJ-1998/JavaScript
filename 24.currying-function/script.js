const makeFood = (ingredient1) => {
    return (ingredient2) => {
        return (ingredient3) => {
            return `${ingredient1}, ${ingredient2}, ${ingredient3}`;
        }
    }
}

const hamburger = makeFood("Bread")("Ham")("Tomato");
console.log(hamburger);

const cleanerMakeFood = ingredient1 => ingredient2 => ingredient3 =>
    `${ingredient1}, ${ingredient2}, ${ingredient3}`;

const newHamburger = cleanerMakeFood("Bread")("Ham")("Tomato");
console.log(newHamburger);

const hamburger1 = cleanerMakeFood("Bread");
console.log(hamburger1);
const hamburger2 = hamburger1("Ham")
console.log(hamburger2);
const hamburger3 = hamburger2("Tomato")
console.log(hamburger3);

// one more example
const sum = (x, y) => x + y;

const curriedSum = x => y => x + y;

console.log(sum(10, 20));
console.log(curriedSum(10));
console.log(curriedSum(10)(20));

const tenPlus = curriedSum(10);
console.log(tenPlus);
console.log(tenPlus(100));

function log(date, importance, message) {
    alert(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
}

log(new Date(), "DEBUG", "some debug");

function curry(f) { // 커링 변환을 하는 curry(f) 함수
    return function (a) {
        return function (b) {
            return function (c) {
                return f(a, b, c);
            }
        };
    };
}

const curriedLog = curry(log);
curriedLog(new Date())("DEBUG")("some debug");

// logNow 는 log 의 첫 번째 인수가 고정된 partial이 될 것입니다.
let logNow = curriedLog(new Date());
// use it
logNow("INFO", "message"); // [HH:mm] INFO message



function curry(func) {

    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    };

}

const curriedLog1 = curry(log);
curriedLog1(new Date())("DEBUG")("some debug");

const sum1 = (x, y, z) => x + y + z;
// const sum1 = (x, y, z, j) => x + y + z + j;
function curry(func) {

    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    };

}
const curried = curry(sum1);
console.log(curried(1)(2)(3));