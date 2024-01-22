const user = {
    name: "John",
    age: 45,
}

console.log(user.name); // John
console.log(user.hasOwnProperty("email")); // false

// Constructor Function
function Person(name, email, birthday) {
    this.name = name;
    this.email = email;
    this.birthday = new Date(birthday);
    this.calculateAge = function () {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

const john = new Person('john', 'john@abc.com', '7-10-91');
const han = new Person('han', 'han@abc.com', '2-8-91');

console.log(john);
console.log(han);

// make prototype
function Person4(name, email, birthday) {
    this.name = name;
    this.email = email;
    this.birthday = new Date(birthday);
}

Person4.prototype.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

const john2 = new Person4('john', 'john@abc.com', '7-10-91');
const han2 = new Person4('han', 'han@abc.com', '2-8-91');

console.log(john2);
console.log(han2);

// Object.create()
function Person1(name, email, birthday) {
    let person = Object.create(personsPrototype);
    person.name = name;
    person.email = email;
    person.birthday = new Date(birthday);
    return person;
}

const personsPrototype = {
    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

const han1 = new Person1('han', 'han@abc.com', '2-8-91');
console.log(han1);


// prototype chain 
const testArray = [1, 2, 3];
testArray.push(4);
console.log(testArray); // [1, 2, 3, 4]


console.log(Array.prototype);

const testArray1 = [1, 2, 3];
Array.prototype.push = function (x) {
    return 'pushed value: ' + x;
}

console.log(testArray1.push(4));
console.log(testArray1)

// class 문법
// static 사용
class Person2 {
    constructor(name, email, birthday) {
        this.name = name;
        this.email = email;
        this.birthday = new Date(birthday)
    }

    introduce() {
        return `Hello my name is ${this.name}`;
    }

    static multipleNumbers(x, y) {
        return x * y;
    }
}

console.log(Person2.multipleNumbers(2, 9));
console.log(new Person2('haha', 'hoho', 1-2));



class Person3 {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    introduce() {
        return `Hello my name is ${this.name}`;
    }
}

class Client extends Person3 {
    constructor(name, email, phone, address) {
        super(name, email);

        this.phone = phone;
        this.address = address;
    }
}

const john1 = new Client('john', 'john@abc.com', '010-000-1111', '서울');
console.log(john1);