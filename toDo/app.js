const todoInput = document.querySelector('.todoInput');
const todoBtn = document.querySelector('.todoBtn');
const todoList = document.querySelector('.todoList');

todoBtn.addEventListener('click', addTodo);



function addTodo(event) {
    event.preventDefault();
    
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li');
    newTodo.innerText = 'hey';
    newTodo.classList.add('todoItem');
    todoDiv.appendChild(newTodo);

    const completedBtn = document.createElement('button');
    completedBtn.innerText = '<i class="fas fa-check"></i>'
}