// document 객체 알아보기

let val;

val = document;
val = document.baseURI // 웹 페이지의 절대 URI를 반환
val = document.head; // <head> 태그 반환
val = document.body; // <body> 태그 반환
val = document.doctype; // 웹 페이지의 문서 형식을 반환
val = document.cookie // 웹 페이지의 쿠키를 반환

val = document.forms; // <form> 태그 반환
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].action;
val = document.forms[0].method;

val = document.links; // href 속성이 있는 <a> 태그 반환
val = document.links[0];
val = document.links[0].id;
val = document.links[0].classList[0];
val = document.links[0].className;

val = document.images; // <img> 태그 반환

val = document.scripts; // <script> 태그 반환
val = document.scripts[0].getAttribute('src');

console.log(val);