let section = window.document.getElementById('container');
let querySec = window.document.querySelector('section#container'); // query selector: tag + # + id

let second = window.document.querySelectorAll('.second');

for (i in second) {
    second[i].innerHTML = 'DOIS';
}

let third = window.document.querySelector('ol .third');

third.innerHTML = 'TRÊS';

querySec.style.backgroundColor = "red";

let newText = document.createElement('p');
newText.innerText = 'Hello!'

section.appendChild(newText);

let footer = document.querySelector('.footer');

footer.classList.add('main');
console.log(footer.classList);
footer.classList.remove('main');
console.log(footer.classList);

let newLi = document.createElement('li');
newLi.innerText = 'four';
let ul = document.querySelector('ul');

ul.appendChild(newLi);

let ol = window.document.querySelectorAll('ol');

for (i in ol) {
    ol[i].style.backgroundColor = 'green';
}

//footer.remove();