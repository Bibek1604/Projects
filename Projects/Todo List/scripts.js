// const inp = document.getElementById('inp');
// const text = document.querySelector('.text');

// function Add() {
//     if (inp.value === '') {
//         alert("Enter your task list");
//     } else {
//         const newEle = document.createElement('li');
//         newEle.textContent = inp.value;

//         const removeBtn = document.createElement('span');
//         removeBtn.innerHTML = '♻'; 
//         removeBtn.className = 'cross';
//         removeBtn.addEventListener('click', function () {
//             newEle.remove();
//             saveData();
//         });

//         newEle.appendChild(removeBtn);
//         text.appendChild(newEle);
//         inp.value = '';
//         saveData();
//     }

// }
// dust


const inp = document.getElementById('inp');
const text = document.querySelector('.text');

function add(){
    add.eventListner=('click',functionn())
    if(inp.value===''){
        alert("please enter the value")
    }else
    {const newEle=document.createElement('li');
    newEle.innerHTML=inp.value;
    text.append(newEle);
    inp.value='';
}
}
