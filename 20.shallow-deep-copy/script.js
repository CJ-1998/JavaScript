// shallow copy
const aArray = [1, 2, 3];

// shallow copy with spread operator
const bArray = [...aArray, 4];
console.log('aArray', aArray);
console.log('bArray', bArray);
console.log('aArray === bArray', aArray === bArray);

// shallow copy with Object.assign()
const cArray = Object.assign([], bArray);
console.log('cArray', cArray);
console.log('bArray === cArray', bArray === cArray);


// Nested Arrays and Objects
cArray.push([5, 6, 7]);
console.log('cArray', cArray);
const dArray = [...cArray, 10];
console.log('dArray', dArray);
dArray[4].push(8);
console.log('cArray', cArray);
console.log('dArray', dArray);

// // 얕은 동결
const aObject = {
    "a": "a",
    "b": "b",
    "cObject": { "a": 1, "b": 2 }
}

Object.freeze(aObject);
aObject.a = "c";
console.log('aObject', aObject);
aObject.cObject.a = 3;
console.log('aObject', aObject);


// deep copy 
// deep copy with json.parse(json.stringify())
const newAObject = JSON.parse(JSON.stringify(aObject));
console.log('aObject', aObject);
console.log('newAObject', newAObject);
aObject.cObject.a = 3;
console.log('aObject', aObject);
console.log('newAObject', newAObject);

// deep copy with nested spread operator
const newBObject = { ...aObject, cObject: { ...aObject.cObject } }
console.log('aObject', aObject);
console.log('newBObject', newBObject);
aObject.cObject.a = 3;
console.log('aObject', aObject);
console.log('newBObject', newBObject);

// deep copy with lodash
const newCObject = _.cloneDeep(aObject);
console.log('aObject', aObject);
console.log('newCObject', newCObject);
aObject.cObject.a = 3;