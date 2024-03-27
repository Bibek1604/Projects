const inp = document.getElementById('inp');
const text = document.querySelector('.text');

function Add() {
    if (inp.value === '') {
        alert("Enter your task list");
    } else {
        const newEle = document.createElement('li');
        newEle.textContent = inp.value;

        const removeBtn = document.createElement('span');
        removeBtn.innerHTML = '&#10006;'; // Unicode for "cross" symbol
        removeBtn.className = 'cross';
        removeBtn.addEventListener('click', function () {
            newEle.remove();
            saveData();
        });

        newEle.appendChild(removeBtn);
        text.appendChild(newEle);
        inp.value = '';
        saveData();
    }
}

function saveData() {
    localStorage.setItem('text', text.innerHTML);
}

function showTask() {
    text.innerHTML = localStorage.getItem('text');
}
