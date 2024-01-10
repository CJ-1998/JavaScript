// Call();
const fullName = function () {
    console.log(this.firstName + " " + this.lastName);
}

const person1 = {
    firstName: "John",
    lastName: "Doe"
}

// This will return "John Doe"
fullName.call(person1);

// Call() with arguments
const fullName1 = function (city, country) {
    console.log(`${this.firstName}, ${this.lastName}, ${city}, ${country}`);
}

const person2 = {
    firstName: "John",
    lastName: "Doe"
}

fullName1.call(person2, "Oslo", "Norway");


// Apply() with arguments
const fullName2 = function (city, country) {
    console.log(`${this.firstName}, ${this.lastName}, ${city}, ${country}`);
}

const person3 = {
    firstName: "John",
    lastName: "Doe"
}

fullName2.apply(person3, ["Oslo", "Norway"]);

// bind()
function func(language) {
    if (language === "kor") {
        console.log(`language: ${this.korGreeting}`);
    } else {
        console.log(`language: ${this.engGreeting}`);
    }
}

const greeting = {
    korGreeting: "안녕 ",
    engGreeting: "Hello ",
};

const boundFunc = func.bind(greeting);
boundFunc('kor');