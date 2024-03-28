const inp = document.getElementById('inp');
const text = document.querySelector('.text');

function Add() {
    if (inp.value === '') {
        alert("Please Enter the Text");
    } else {
        const newEl = document.createElement('li');
        newEl.innerHTML = `${inp.value} <span class="cross">&#10006;</span>`; // Unicode for "cross" symbol

        text.appendChild(newEl);
        inp.value = '';
        newEl.querySelector('.cross').addEventListener('click', remove);
    }
}

function remove() {
    this.parentElement.remove();
}
