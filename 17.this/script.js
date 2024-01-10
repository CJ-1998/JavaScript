// this 알아보기

// global this
let a = 'a'
console.log(window);

// Method => object
const audio = {
    title: 'a',
    play() {
        console.log('play this', this);
    }
}

audio.play();

audio.stop = function () {
    console.log('stop this', this)
}

audio.stop();

// Function => Window Object
function playAudio() {
    console.log(this);
}

playAudio();

// Constructor Function => {}
function Audio(title) {
    this.title = title;
    console.log(this);
}

const audio1 = new Audio('a');


const audio2 = {
    title: 'audio',
    categories: ['rock', 'pop', 'hiphop', 'jazz'],
    displayCategories() {
        this.categories.forEach(function (category) {
            console.log(`title: ${this.title}, category: ${category}`);
        }, this);
    }
}

audio2.displayCategories();

const audio3 = {
    title: 'audio',
    categories: ['rock', 'pop', 'hiphop', 'jazz'],
    displayCategories() {
        this.categories.forEach((category) => {
            console.log(this);
        });
    }
}

audio3.displayCategories();