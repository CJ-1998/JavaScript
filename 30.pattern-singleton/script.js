let instance;

// 1. 생성자에서 하나의 인스턴스만 생성될 수 있게 로직 작성
class Counter {
    constructor() {
        if (instance) {
            throw new Error("You can only create one instance!");
        }
        this.counter = 0;
        instance = this;
    }

    getCount() {
        return this.counter;
    }

    increment() {
        return this.counter++;
    }

    decrement() {
        return this.counter--;
    }
}

// 2. 객체 인스턴스 생성, 두번째 생성한 객체는 에러가 납니다.
const singletonCounterA = new Counter();
// const singletonCounterB = new Counter();

// 3. export 해서 다른 파일에서도 사용하게 해주기.
// export default singletonCounter;
// 웹팩으로 설정해서 모듈화 하면 되지만 아직 그렇게 안 했기 때문에 이 파일 안에서 처리...

singletonCounterA.increment();
singletonCounterA.increment();

console.log(singletonCounterA.getCount());



