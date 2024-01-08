// 타입 알아보기

let foo =42;
foo='qw';
foo=true;
console.log(typeof foo);

// 원시 타입 
// String
const name = "Han"
// Number 
const age = 30
// Boolean
const hasJob = true
// Null 
const car = null;
// Undefined
let anything;
// Symbol
const sym = Symbol();

// 참조 타입 - Objects 
// Array 배열
const hobbies = ['walking', 'books']
//  Object literal 객체 리터럴
const address = {
    province: '경기도',
    city: '성남시'
}

console.log(typeof address);
console.log(typeof hobbies);
console.log(Array.isArray(hobbies));

console.log(hasJob);
console.log(typeof hasJob);