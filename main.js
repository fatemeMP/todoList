const todoinput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOptions =document.querySelector(".filter-todo");

todoButton.addEventListener("click" , addtodo);
  function addtodo(event){
    event.preventDefault(); //jelogiri az load khodkar
   
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.classList.add("todo.item");
    newTodo.innerText = todoinput.value;
    

    //add kardn li be tag div
    todoDiv.appendChild(newTodo);
    //khali kardn dakhele tag input
    todoinput.value ="";

    //completed button
    const completeButton = document.createElement("button");
    completeButton.innerHTML = "<i class='fas fa-check'></i>";
    completeButton.classList.add("complete-btn");
    //adding complete btn to div
    todoDiv.appendChild(completeButton);

    //trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = "<i class='fas fa-trash'></i>";
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //add div to todolist(ul of our html)
    todoList.appendChild(todoDiv);


}


//a function for tik and tarsh
todoList.addEventListener("click",deletComplete);
  function deletComplete(event){
    const item = event.target;
    if(item.classList[0] === "trash-btn"){
        const boxtodo = item.parentElement;
       
          boxtodo.remove();             
    }

    if(item.classList[0] === "complete-btn"){
        const boxtodo = item.parentElement;
        boxtodo.classList.toggle("completed")
    }
  }


//function for options
 filterOptions.addEventListener("click" ,filterTodo);
  function filterTodo(event){
     const todos = todoList.childNodes;
     todos.forEach(function (todo){
        switch (event.target.value){
            case "all":
              todo.style.display ="flex";
            break;
            case "completed":
                if(todo.classList.contains("completed")){    
                todo.style.display = "flex";
            }else {
                todo.style.display ="none"
            }
            break;
            case "uncompleted":
                if(todo.classList.contains("completed")){     
                todo.style.display = "none";
            }else {
                todo.style.display ="flex"
                }
            break;
            }
        });

//for saving our todo to the localstorage

 function saveLocalTodo(todo){
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos" ,JSON.stringify(todos));
 };

 
saveLocalTodo(todoinput.value);


removeLocalTodo(todo);  //for deletting item from storage
 //for deleting our todo from localstorage
   function removeLocalTodo(todo){
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    };
    const indexTodo = todo.children[0].innerText;
    todos.splice(todos.indexOf(indexTodo) , 1);
    localStorage.setItem("todos",JSON.stringify(todos));
}};
    
