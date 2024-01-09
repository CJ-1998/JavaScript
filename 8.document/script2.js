// document 객체 메소드 알아보기

// 파라미터로 전달한 ID를 가진 태그를 반환
document.getElementById(요소아이디)

// 파라미터로 전달한 name 속성을 가진 태그를 반환
document.getElementByName(name속성값)

// 파라미터로 전달한 선택자에 맞는 첫 번째 태그를 반환
document.querySelector(선택자)

// document.getElementById()
console.log(document.getElementById('header-container'));
console.log(document.getElementById('header-heading').className);
const headerContainer = document.getElementById('header-container');

// styling 변경
headerContainer.style.fontSize = '10px';
headerContainer.style.display = 'none';

// content 변경
headerContainer.textContent = 'Text Content';
headerContainer.innerText = 'Inner Text';
headerContainer.innerHTML = '<span style="color:blue">Inner HTML</span>';

// document.querySelector()
console.log(document.querySelector('#form-first-div'));
console.log(document.querySelector('.form-container'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'blue';
document.querySelector('ul li').style.color = 'red';

document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'orange';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(odd)').style.background = 'gray';
document.querySelector('li:nth-child(even)').style.background = 'lightgray';


// 파라미터로 전달한 태그이름을 가진 모든 태그들을 반환(배열)
document.getElementsByTagName(태그이름)

// 파라미터로 전달한 클래스 이름을 가진 모든 태그들을 반환(배열)
document.getElementsByClassName(클래스이름)

// 파라미터로 전달한 선택자에 맞는 모든 태그들을 반환(배열)
document.querySelectorAll(선택자)


document.getElementsByClassName
const items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[0]);
items[0].style.color = 'blue';
items[3].textContent = 'Hi';

// document.getElementsByTagName
let list = document.getElementsByTagName('li');
console.log(list);
console.log(list[0]);
list[0].style.color = 'red';
list[3].textContent = 'Hello';

// HTML 모음을 배열로 만들기
list = Array.from(list);

list.reverse();

list.forEach(function(li, index){
    console.log(li.className);
    li.textContent = `${index}. List`;
});

console.log(list);

// document.querySelectorAll
const items = document.querySelectorAll('ul.list-group li.list-group-item');

items.forEach(function (item, index) {
    item.textContent = `${index}. List`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function (li, index) {
    li.style.background = 'gray';
});

for (let i = 0; i < liEven.length; i++) {
    liEven[i].style.background = 'lightgray';
}

console.log(items);

// innerHTML vs innerText vs textContent
const element = document.getElementById('container');

console.log(element.innerHTML);
console.log(element.innerText);
console.log(element.textContent);
