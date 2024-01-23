const sym1 = Symbol();
const sym2 = Symbol();

console.log(sym1 === sym2); //false

const sym3 = Symbol('hi');
console.log(sym3.description);

let carA = {
    id: 1,
    name: 'morning',
    brand: 'kia',
    price: 1000
}

const idSym = Symbol('id');
carA[idSym] = 300;

console.log(carA);


carA.id = 300;

const idSym1 = Symbol('id');
let carB = {
    id: 1,
    name: 'morning',
    brand: 'kia',
    price: 1000,
    [idSym1]: 300
}


for (const key in carB) {
    console.log(key);
}

console.log(Object.getOwnPropertyNames(carB));

console.log(Object.getOwnPropertySymbols(carB));

console.log(Symbol.for('id') === Symbol.for('id'));
// true

// description을 이용해 심볼을 찾음
let sym4 = Symbol.for("name");
let sym5 = Symbol.for("id");

// 심볼을 이용해 description을 얻음
alert(Symbol.keyFor(sym4)); // name
alert(Symbol.keyFor(sym5)); // id

// 심볼 사용 예시1
const RED = 'red';
const ORANGE = 'orange';
const YELLOW = 'yellow';
const BLUE = 'blue';
const dog = 'blue';

function getImportantLevel(color){
    switch (color) {
        case RED:
            return 'very important';
        case ORANGE:
            return 'important';
        case YELLOW:
            return 'little important';
        case BLUE:
            return 'not important';
        default:
            console.log(`${color} not included`);
    }
}

console.log(getImportantLevel(BLUE));
console.log(getImportantLevel(dog));


const RED1 = Symbol('red');
const ORANGE1 = Symbol('orange');
const YELLOW1 = Symbol('yellow');
const BLUE1 = Symbol('blue');
const dog1 = 'blue';

function getImportantLevel1(color) {
    switch (color) {
        case RED1:
            return 'very important';
        case ORANGE1:
            return 'important';
        case YELLOW1:
            return 'little important';
        case BLUE1:
            return 'not important';
        default:
            console.log(`${color} not included`);
    }
}

console.log(getImportantLevel1(BLUE1));
console.log(getImportantLevel1(dog1));

// 심볼 사용 예시2
class Car {
    constructor() {
        this.length = 0;
    }

    add(brand, name) {
        this[brand] = name;
        this.length++;
    }
}

let myCars = new Car();
myCars.add('kia', 'morning');
myCars.add('hyundai', 'tucson');
myCars.add('genesis', 'gv80');

for (const car in myCars) {
    console.log(car, myCars[car]);
}


const length = Symbol('length');
class Car1 {
    constructor() {
        this[length] = 0;
    }

    add(brand, name) {
        this[brand] = name;
        this[length]++;
    }
}

let myCars1= new Car1();
myCars1.add('kia', 'morning');
myCars1.add('hyundai', 'tucson');
myCars1.add('genesis', 'gv80');

for (const car in myCars1) {
    console.log(car, myCars1[car]);
}


class AlertService {
    constructor() {
        this.alerts = {};
    }

    addAlert(symbol, alertText) {
        this.alerts[symbol] = alertText;
        this.renderAlerts();
    }

    removeAlert(symbol) {
        delete this.alerts[symbol];
    }

    renderAlerts() { }
}

const alertService = new AlertService();

class MyComponent {
    constructor(thing) {
        this.componentId = Symbol(thing);
    }

    errorHandler(msg) {
        alertService.addAlert(this.componentId, msg);
        setTimeout(() => {
            alertService.removeAlert(this.componentId);
            console.log('Removed alert', this.componentId);
        }, 5000);
    }
}

let list = new MyComponent('listComponent');
let list2 = new MyComponent('listComponent');
let form = new MyComponent('inputComponent');

list.errorHandler('문제가 발생했습니다.');
list.errorHandler('이러이러한 이유로 에러가 발생했습니다.');



