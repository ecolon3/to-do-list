
// This code adapted from https://medium.com/@suryashakti1999/to-do-list-app-using-javascript-for-absolute-beginners-13ea9e38a033
// selectors
const todoInput = document.querySelector('.todo_input');
const todoButton = document.querySelector('.todo_button');
const todoList = document.querySelector('.todo_list');
const filterOption = document.querySelector('.filter_todo');

// listening for click events
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);
filterOption.addEventListener('change', filterTodo);

// adding tasks for the check and delete buttons

function addTodo(event) {
    event.preventDefault();
    //todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //todo LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo_item');
    todoDiv.appendChild(newTodo);
    if (todoInput.value === '') {
        return null;
    }
    //check mark BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete_btn');
    todoDiv.appendChild(completedButton);
    //delete BUTTON
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa fa-trash"></i>';
    deleteButton.classList.add('delete_btn');
    todoDiv.appendChild(deleteButton);
    //Append to actual LIST
    todoList.appendChild(todoDiv);
    todoInput.value = '';
}

//DELETE & CHECK
function deleteCheck(e) {
    const item = e.target;
    //DELETE ITEM
    if (item.classList[0] === 'delete_btn') {
        const todo = item.parentElement;
        //ANIMATION TRANSITION
        todo.classList.add('fall');
        todo.addEventListener('transitioned', function (){
            todo.remove();
        })
    }
  //COMPLETE ITEM
  if (item.classList[0] === "complete_btn") {
      const todo = item.parentElement;
      todo.classList.toggle("completedItem");
  }
}
// FILTERING THE TASKS ACCORDING TO THE OPTION
function filterTodo(e) {
    const todos = todoList.childNodes;
    for (let i = 0; i < todos.length; i++) {
        switch(e.target.value) {
            case "all":
                todos[i].style.display = "flex";
                break;
            case "completed":
                if (todos[i].classList.contains("completedItem")) {
                    todos[i].style.display = "flex";
                } else {
                    todos[i].style.display = "none";
                }
                break;
            case "uncompleted": 
                if (!todos[i].classList.contains("completedItem")) {
                    todos[i].style.display = "flex";
                } else {
                    todos[i].style.display = "none";
                }
                break;
        }
    }
}
