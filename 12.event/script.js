// event 알아보기

window.onload = function () {
    // 문서가 load 될 때 이 함수 실행

    let text = document.getElementById("text");
    // 아이디가 "text"인 요소를 return

    text.innerHTML = "HTML 문서 loaded";
}

const aElement = document.querySelector('a');
aElement.addEventListener('click', () => {
    alert('a element clicked');
});

const buttonElement = document.querySelector('.btn');
buttonElement.addEventListener('click', handleClick);
function handleClick(event) {
    let val;
    val = event;

    // Event target element
    val = event.target;
    val = event.target.id;
    val = event.target.className;
    val = event.target.classList;

    // Event type
    val = event.type;

    // 윈도우로부터의 거리 좌표
    val = event.clientY;
    val = event.clientX;

    // 요소로부터의 거리 좌표
    val = event.offsetY;
    val = event.offsetX;
    console.log(val);
}