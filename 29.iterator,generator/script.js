// Iterator Example
function makeIterator(numbers) {
    let nextIndex = 0;

    return {
        next: function () {
            return nextIndex < numbers.length ?
                { value: numbers[nextIndex++], done: false } :
                { value: undefined, done: true }
        }
    }
}

// 숫자 배열 생성
const numbersArr = [1, 2, 3];
// 이터레이터에 숫자 배열 넣어주기
const numbersIterator = makeIterator(numbersArr);

console.log(numbersIterator.next());
console.log(numbersIterator.next());
console.log(numbersIterator.next());
console.log(numbersIterator.next());

//  Symbol.iterator
const numbersArr1 = [1, 2, 3];

const numbersIterator1 = numbersArr1[Symbol.iterator]();
console.log(numbersIterator1.next());
console.log(numbersIterator1.next());
console.log(numbersIterator1.next());
console.log(numbersIterator1.next());

// Iterable Object 
const numbersIterable = [1, 2, 3];
const numbersNotIterable = { a: 1, b: 2 };
console.log(typeof numbersIterable);
console.log(typeof numbersNotIterable);
// for (const n of numbersNotIterable) {
//     console.log(n);
// }

const arr = [1, 2, 3, 4];
const set = new Set([1, 2, 3, 4]);
// console.log('set', set);
const map = new Map([
    ['a', '1'],
    ['b', '2'],
]);
// console.log('map', map);
const obj = { a: 1, b: 2 };

console.log(arr[Symbol.iterator]());
console.log(set[Symbol.iterator]());
console.log(map[Symbol.iterator]());
// console.log(obj[Symbol.iterator]());

console.log(arr[Symbol.iterator]().next());
console.log(set[Symbol.iterator]().next());
console.log(map[Symbol.iterator]().next());

// Generator Example
function* sayNumbers() {
  yield 1;
  yield 2;
  yield 3;
}

const number = sayNumbers();

console.log(number.next().value);
console.log(number.next().value);
console.log(number.next().value);
console.log(number.next().value);

function* generatorFunction() {
    yield 1;
}

const generator = generatorFunction();

console.log(generator === generator[Symbol.iterator]());

// ID Creator
function* createIds() {
    let index = 1;

    while (true) {
        yield index++;
    }
}

const gen = createIds();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.return(10));


function* generatorFunction() {
    for (const number of [1, 2, 3]) {
        yield number;
    }

    yield* [1, 2, 3];
}

const generator1 = generatorFunction();
console.log(generator1.next());
console.log(generator1.next());
console.log(generator1.next());

for (const number of generator1) {
    console.log(number);
}