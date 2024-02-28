let button = document.getElementById('add')
let todoList = document.getElementById('todolist')
let input = document.getElementById('input');

let todos = [];

window.onload = ()=>{
    JSON.parse(localStorage.getItem('todos')) || []
    todos.forEach(todos=>addtodo(todo))
    }

button.addEventListener('click',function(){
    todos.push(input.value)
    localStorage.setItem('todos', JSON.stringify(todos))
    addtodo(input.value)
    input.value=''
    })

function addtodo(todo){
    let para = document.createElement('p')
    para.innerText = todo
    todoList.appendChild(para)

      para.addEventListener('click',()=>{
        para.style.textDecoration = 'line-through'
        remove(todo)   // closure method
    })

    para.addEventListener('dblclick',()=>{
        todoList.removeChild(para)
        remove(todo)  // closure method
    })
}

function remove(){
    let index = todos.indexOf(todo)
    if(index >-1)
        todos.splice(index,1)

}

