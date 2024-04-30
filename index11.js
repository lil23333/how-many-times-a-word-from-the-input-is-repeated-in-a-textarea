
let btn = document.querySelector('#btn');
let p = document.querySelector('p');
let input = document.querySelector('input');
let story = document.querySelector('#story');

btn.addEventListener('click',()=> {
    let storyText = story.value;
    let inputWord = input.value;
    let arr = storyText.split(' ');
    let result = 0
for (let el of arr) {
    if (el === inputWord) {
result++
    }
}
    p.textContent = result;
})