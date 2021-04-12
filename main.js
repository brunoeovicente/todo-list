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

/* Esta função, como diz o nome, trata de remover uma tarefa de acordo com seu index. Observe que cada index é único. Além disso, ela chama a função renderList abaixo, isso pois ela precisa limpar o texto que foi impresso no html */ 

const setupAddTodos = () => {
    const button = document.getElementById("btn-new");
    
    /*
    button.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
          event.preventDefault();
          document.getElementById("btn-new").click();
        }
    */

    button.addEventListener ("click", () => {
        const input = document.getElementById("new-todo");
        addTodo(input.value);
        document.getElementById("todo-content").value = "";
        todoContent.innerHTML = "";
    })
}

setupAddTodos();

/* Comunicação com o css. O botão é responsável por dar início a algumas funções do js, por efeito cascata. Note que aqui é de extrema importância a caracterização do input como um valor unico relativo a uma tarefa adicionada */

const renderList = () => {
    const todoContent = document.getElementById("todo-content");
    todoContent.innerHTML = "";

    todoList.forEach ((todo)=>{
        todoContent.appendChild(todo);
    });
}

/* Impressão do texto; interação direta com o html, no caso, o conteúdo da lista*/

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

        /*
        const Remove = (answer) => {
            alert("Deseja apagar esta tarefa?");
            if (answer==true) {
                removeTodo(index);
            } else {
                return false;
            }
        }
        */

        /*
        var answer = window.confirm("Deseja apagar esta tarefa?");
        var answer;
        if (answer==true) {
            removeTodo(index);
        } else {
            return false;
        }
        */

    });

    label.appendChild(input);
    label.appendChild(span);
    li.appendChild(label);
    li.appendChild(button);

    todoIndex++;
    
    return li;
}




