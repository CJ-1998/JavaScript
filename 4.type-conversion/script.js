// 타입 변환 알아보기

// 메소드 이용해 타입 변환
let val;

// Number to string
val = String(111); //
val = String(8 + 4);
// Bool to string
val = String(false);
// Date to string
val = String(new Date());
// Array to string
val = String([1, 2, 3, 4]);

// // Output
console.log(val);
console.log(typeof val);
console.log(val.length);

// toString()
val = (5).toString();
val = (true).toString();

// String to number
val = Number('1');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello');
val = Number([1, 2, 3]);

val = parseInt('111.40');
val = parseFloat('111.40');

// Output
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));


// 자바스크립트 자체 변환
const val1 = String(2);
const val2 = 3;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);