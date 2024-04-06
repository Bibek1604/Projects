// // Selecting the root element
// const root = document.getElementById("root");

// // Creating elements
// const inputTodo = document.createElement("input");
// const addButton = document.createElement("button");
// const updateButton = document.createElement("button");
// const todoList = document.createElement("ul");

// Setting attributes and content
// inputTodo.setAttribute("placeholder", "Add a new todo");
// addButton.textContent = "Add";
// updateButton.textContent = "Update";
// Styling
// inputTodo.classList.add("input-todo");
// addButton.classList.add("add-button");
// updateButton.classList.add("update-button");
// todoList.classList.add("todo-list");

// // Appending elements to the root
// root.appendChild(inputTodo);
// root.appendChild(addButton);
// root.appendChild(updateButton);
// root.appendChild(todoList);

// // Function to add todo
// function addTodo() {
//     const todoText = inputTodo.value.trim();
//     if (todoText !== "") {
//         const todoItem = document.createElement("li");
//         const todoContent = document.createTextNode(todoText);
//         const removeButton = document.createElement("button");
//         removeButton.textContent = "Remove";
//         removeButton.classList.add("remove-button");
//        todoItem.appendChild(todoContent);
//        todoItem.appendChild(removeButton);
//       todoList.appendChild(todoItem);
//         inputTodo.value = "";
//     }
// }

// // // Function to remove todo
// // function removeTodo(event) {
// //     if (event.target.classList.contains("remove-button")) {
// //         const todoItem = event.target.parentElement;
// //         todoList.removeChild(todoItem);
// //     }
// // }

// // // Function to update todo
// // function updateTodo() {
// //     const todoItems = todoList.querySelectorAll("li");
// //     todoItems.forEach((item) => {
// //         const todoText = prompt("Enter new todo:", item.textContent.trim());
// //         if (todoText !== null && todoText.trim() !== "") {
// //             item.textContent = todoText.trim();
// //         }
// //     });
// // }

// // // Event listener for adding todo
// // addButton.addEventListener("click", addTodo);
// // 9
// // // Event listener for removing todo
// // todoList.addEventListener("click", removeTodo);

// // // Event listener for updating todo
// // updateButton.addEventListener("click", updateTodo);


// // const roots = document.getElementById('root');

// const root = document.getElementById('root');

// const inputEle=document.createElement('input');
// const updatesButton=document.createElement('button');
// const addsButton=document.createElement('button');
// const todoLists=document.createElement('ul');


// inputEle.setAttribute('placeholder',"Add your task here");
// addsButton.innerHTML= 'Add';
// updatesButton.innerHTML = 'Update';

// inputEle.classList.add('input-element');
// addsButton.classList.add('add-element');
// updatesButton.classList.add('update-element');
// todoLists.classList.add('todo-element');

// root.appendChild(inputEle);
// root.appendChild(addsButton);
// root.appendChild(updatesButton);
// root.appendChild(todoLists);


// function addsButton(){
//     const addTooDoo = inputEle.value
//     if (addTooDoo === " "){
//         alert("insert the text")
//     }else{
//         const TooDooItem=document.createElement('li');
//         const todoContents=document.createTextNode('addTooDoo');
//         const removesButton=document.createElement('button');
//         removesButton.textContent="Remove";
//         removesButton.classList.add('remove-btn');
//         TooDooItem.appendChild(todoContents);
//         TooDooItem.appendChild(removesButton);
//         todoList.appendChild(TooDooItem);
    
//     }
    
// }


const root = document.getElementById('root');

const nav = document.createElement("li");

const homeli = document.createElement("homeli");
homeli.textContent="Home";

const contentli = document.createElement('contentli')
contentli.textContent= "content";

const aboutli =document.createElement('aboutli')
aboutli.textContent="About"

root.appendChild(nav);
root.appendChild(homeli);
root.appendChild(contentli);
root.appendChild(aboutli);