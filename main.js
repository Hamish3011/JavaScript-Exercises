function myFunction(element) {
    navigator.clipboard.writeText(element.target.parentElement.children[1].innerText);
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
