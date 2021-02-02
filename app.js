const plusBtn = document.getElementById("plusbtn");
const taskInput = document.getElementById("taskinput");
const todoList = document.querySelector(".todo-list");
const todoList3 = document.querySelector(".todo-list-3");
const todoList2 = document.querySelector(".todo-list-2");
const delBtn = document.querySelector(".trash-btn");
const compltedBtn = document.querySelector(".complete-btn");
const processBtn = document.querySelector(".process-btn");

plusBtn.addEventListener("click", addTask);
todoList.addEventListener("click", delTask);
todoList3.addEventListener("click", delTask);
todoList2.addEventListener("click", delTask);
todoList.addEventListener('click', processTask);
todoList.addEventListener("click", completeTask);
todoList2.addEventListener("click", completeTask);

function addTask(e) {
  e.preventDefault();
  //Creating div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("task");

  // Creating li
  const newTodo = document.createElement("li");
  newTodo.innerText = taskInput.value;
  newTodo.classList.add("task-item");

  //adding li to div
  todoDiv.appendChild(newTodo);

  const todobtn = document.createElement("div");
  todobtn.classList.add("all-btn");
  todoDiv.appendChild(todobtn);

  // Creating trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todobtn.appendChild(trashButton);

  // Creating complete button
  const completeButton = document.createElement("button");
  completeButton.innerHTML = '<i class="fas fa-check"></i>';
  completeButton.classList.add("complete-btn");
  todobtn.appendChild(completeButton);

  // Creating process button
  const processButton = document.createElement("button");
  processButton.innerHTML = '<i class="fas fa-hourglass-start"></i>';
  processButton.classList.add("process-btn");
  todobtn.appendChild(processButton);

  todoList.appendChild(todoDiv);
  taskInput.value = "";
}

function delTask(e) {
  const item = e.target;

  //Delete Todo
  if (item.classList[0] === "trash-btn") {
    let todo = item.parentElement;
    todo = todo.parentElement;

    //Animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
}

function completeTask(e) {
  const item = e.target;

  if (item.classList[0] === "complete-btn") {
    let todo = item.parentElement;
    todo = todo.parentElement;

    var todoList3 = document.querySelector(".todo-list-3");
    var todoList = document.querySelector(".todo-list");

    while (todoList.childNodes.length > 0) {
      todoList3.appendChild(todoList.childNodes[0]);
    }
  }
}

function processTask(e) {
    const item = e.target;
  
    if (item.classList[0] === "process-btn") {
      let todo = item.parentElement;
      todo = todo.parentElement;
  
      var todoList2 = document.querySelector(".todo-list-2");
      var todoList = document.querySelector(".todo-list");
  
      while (todoList.childNodes.length > 0) {
        todoList2.appendChild(todoList.childNodes[0]);
      }
    }
  }

  function completeTask(e) {
    const item = e.target;
  
    if (item.classList[0] === "complete-btn") {
      let todo = item.parentElement;
      todo = todo.parentElement;
  
      var todoList3 = document.querySelector(".todo-list-3");
      var todoList2 = document.querySelector(".todo-list-2");
  
      while (todoList2.childNodes.length > 0) {
        todoList3.appendChild(todoList2.childNodes[0]);
      }
    }
  }
  
