// Same Input => Same Output
const add = (x, y) => x + y;
console.log(add(10, 20));

const fullName = (first, last) => `${first} ${last}`;
console.log(fullName("John", "Ahn"));


// No Side Effects
const z = 1;
const sum = (x, y) => x + y + z;
console.log(sum(10, 20));

// Impure Function Example 
let x = 0;
const numberUp = () => x += 1;
console.log(numberUp());
console.log(x);

const alphabetArray = ['A', 'B'];
const addItemToArray = (originalArray, newItem) => {
    originalArray.push(newItem);
    return originalArray;
}
console.log(addItemToArray(alphabetArray, 'C'));
console.log(alphabetArray);



// Impure to pure function
let x1 = 0;
const pureNumberUp = (num) => num += 1;
console.log(pureNumberUp(x1));
console.log(x1);

const alphabetArray1 = ['A', 'B'];
const pureAddItemToArray = (originalArray, newItem) => {
    return [...originalArray, newItem]
}
console.log(pureAddItemToArray(alphabetArray1, 'C'));
console.log(alphabetArray1);
