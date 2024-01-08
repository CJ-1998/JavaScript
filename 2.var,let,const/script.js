// var, let, const의 차이 확인

var greeting = 'hello';
console.log(greeting);

var greeting = 'hi';
console.log(greeting);

greeting='good';
console.log(greeting);

let greetings = 'hello';
console.log(greetings);

// let greetings = 'hi';
// console.log(greetings);

greetings='good';
console.log(greetings);

const greetingss = 'hello';
console.log(greetingss);

// const greetingss = 'hi';
// console.log(greetingss);

// greetingss='good';
// console.log(greetingss);

// var, let, const의 scope 확인 

function func(){
    if(true){
        var v='a';
        console.log(v);
    }
    console.log(v);
}

func()
// console.log(v);

function func1(){
    if(true){
        let v='a';
        console.log(v);
    }
    // console.log(v);
}

func1()
// console.log(v);

// 호이스팅 확인 

console.log(temp);
// console.log(temp1);
var temp="gg";
// let temp1="hh";

func2();

function func2(){
    console.log('DD');
}