let todoList = [];
let todoIndex = 10000;

const addTodo = (text, checked=false) => {
    const newTodo = newTodoItem(text, checked);
    todoList.push (newTodo);
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
    });
    renderList();
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

const newTodoItem = (text="", checked=false) => {
    const index = "todo-" + todoIndex;
    const li = document.createElement("li");
    li.classList = ["todo-item flex"];
    li.setAttribute("id", index);

    const label = document.createElement("label");
    label.classList = ["center flex"];

    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = checked;

    const span = document.createElement("span");
    span.innerText = text || "Nova tarefa " + todoIndex;

    const button = document.createElement("button");
    button.classList = ["btn"];
    button.innerText = "X";
    button.addEventListener ("click", () => {
        removeTodo(index);
    });

    label.appendChild(input);
    label.appendChild(span);
    li.appendChild(label);
    li.appendChild(button);

    todoIndex++;
    
    return li;
}

/* 
i) Limpar o input, após adicionar o todo; document.getElementById('elementid').value = ""; javascript clear a text input;
ii) Perguntar o usuário se ele tem certeza antes de remover o todo; var answer = window.confirm("Save data?");
if (answer) {
    //some code
}
else {
    //some code
}
iii) Inserir o todo ao pressionar a tecla enter.
// Get the input field
var input = document.getElementById("myInput");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
});
*/






