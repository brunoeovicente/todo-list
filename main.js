let todoList = [];
let todoIndex = 10000;

const addTodo = (text, checked=false) => {
    todoList.push (text);
    renderList();
}

const removeTodo = (index) => {
    if (!index) {
        return;
    }
    todoList = todoList.filter ((todo)=>{
        if (todo.id===index) {
            return false;
        }
        return true;
    })
}

const setupAddTodos = () => {
    const button = document.getElementById("btn-new");

    button.addEventListener ("click", () => {
        const input = document.getElementById("new-todo");
        addTodo(input.value);
    })
}

setupAddTodos();

const renderList = () => {
    const todoContent = document.getElementById("todo-content");
    todoContent.innerHTML = "";

    todoList.forEach ((todo)=>{
        todoContent.appendChild(todo);
    });
}

lista.filter ((n) => {
    return n === 12
})




