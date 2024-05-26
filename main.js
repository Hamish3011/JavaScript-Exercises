function myFunction(element) {
    let text = element.target.parentElement.children[1].innerText;
    navigator.clipboard.writeText(text);
    element.target.innerHTML = 'Copied!';
    setTimeout(() => {
        element.target.innerHTML = 'Copy';
    }, 2000);
}

let codeBoxes = document.querySelectorAll('.codeBox');
let copyBottons = [];
for (let index = 0; index < codeBoxes.length; index++) {
    // Create a button
    let button = document.createElement('button');
    button.innerHTML = 'Copy';
    button.className = 'copyCodeButton';
    button.addEventListener('click', myFunction);
    // Add the button to the code box
    codeBoxes[index].insertBefore(button, codeBoxes[index].firstChild);
    copyBottons.push(button);
}


// Setting colours
let root = document.querySelector(':root');
// console.log(localStorage.getItem('colour-mode'));
localStorage.getItem('colour-mode') === 'katelin' ? setKatelinColours() : setDefaultColours();
document.getElementById('button_default').addEventListener('click', setDefaultColours);
document.getElementById('button_katelin').addEventListener('click', setKatelinColours);

function setDefaultColours() {
    root.style.setProperty('--primary-color', '#E8DBC5');
    root.style.setProperty('--secondary-color', '#333');
    root.style.setProperty('--hover-color', 'gray');
    root.style.setProperty('--explanation-color', 'white');
    root.style.setProperty('--header-text-color', 'white');
    root.style.setProperty('--text-color', 'black');
    localStorage.setItem('colour-mode', 'default');
    // console.log(localStorage.getItem('colour-mode'));
}

function setKatelinColours() {
    root.style.setProperty('--primary-color', '#FF47DA');
    root.style.setProperty('--secondary-color', '#ACF39D');
    root.style.setProperty('--hover-color', '#8dc981');
    root.style.setProperty('--explanation-color', '#FFBF2A');
    root.style.setProperty('--header-text-color', '#222222');
    root.style.setProperty('--text-color', '#222222');
    localStorage.setItem('colour-mode', 'katelin');
    // console.log(localStorage.getItem('colour-mode'));
}

// function addNumbers(a, b) {
//     return a + b;
// }

// function getRandomNumberBelow(max) {
//     return Math.floor(Math.random() * max);
// }

// let sum = addNumbers(2, 3);
// let num = getRandomNumberBelow(100);
// let x = myFunction();
// doSomething("Hello");


