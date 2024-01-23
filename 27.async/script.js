// promise 생성자로 비동기 요청 보내기
function fetchData() {
    return new Promise((resolve, reject) => {
        // 비동기 요청
        const success = false;

        if (success) {
            resolve('성공');
        } else {
            reject('실패');
        }
    })
}

fetchData()
    .then(function (result) {
        console.log(result);
    })
    .catch(function (error) {
        console.error(error);
    })


// promise 생성자 없이 비동기 요청 보내기
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response1 => response1.json())
    .then(json => console.log(json))
    .then(() => fetch('https://jsonplaceholder.typicode.com/todos/2'))
    .then(response2 => response2.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
    .finally(() => console.log('----모든 작업 끝----'))


const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
});



const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
});

const promise5 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
});

Promise.race([promise4, promise5]).then((value) => {
    console.log(value);
    // Both resolve, but promise2 is faster
});
// Expected output: "two"


async function makeRequest() {
    try {
        const response1 = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const jsonResponse1 = await response1.json();
        console.log('jsonResponse1', jsonResponse1);

        const response2 = fetch('https://jsonplaceholder.typicode.com/todos/2');
        const jsonResponse2 = await response2.json();
        console.log('jsonResponse2', jsonResponse2);
    } catch (error) {
        console.log('error', error);
    } finally {
        console.log('---모든 작업 끝---');
    }
}

makeRequest();