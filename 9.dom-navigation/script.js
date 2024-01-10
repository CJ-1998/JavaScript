// dom 탐색

let val;
const list = document.querySelector('ul.list-group');
const listItem = document.querySelector('li.list-group-item:first-child');

val = listItem;
val = list;

// child nodes 반환
val = list.childNodes;  // NodeList를 반환(line break도 포함됨-text로 나타남)
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3].nodeType;

// nodeType
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment   <!-- Comment Node -->
// 9 - Document itself
// 10 - Doctype

// children element nodes 반환  
val = list.children; // HTML Collection을 반환(line break 포함X)
val = list.children[1];
list.children[1].textContent = 'Hi';

// First child
val = list.firstChild;
val = list.firstElementChild; //text node를 포함 X

// Last child
val = list.lastChild;
val = list.lastElementChild;

// child 요소 count
val = list.childElementCount;

// parent node 반환
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// next sibling 반환
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// previous sibling 반환
val = listItem.previousSibling;
val = listItem.previousElementSibling;
console.log(val);


// DOM Collection 
for (let node of list.childNodes) {
    console.log(node); // 컬렉션 내의 모든 노드를 보여줍니다.
}

console.log(list.childNodes.filter) // undefined (filter 메서드가 없습니다.)

console.log(Array.from(list.childNodes).filter) // 

