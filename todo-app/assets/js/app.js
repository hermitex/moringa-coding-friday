// Grab the input element
const inputElem = document.querySelector(".input");
// Grab the todo ul
const todoContainer = document.querySelector(".todo-list");
// Grab the submit button
const submitBtn = document.querySelector(".add-todo");

submitBtn.classList.add("intial-submit-btn-settings");


// Listens for click input and invokes addTodoItem()
inputElem.addEventListener("input",  (e) => {
  let userInput = e.target.value;
  if (userInput != "") {
    submitBtn.disabled = false;
    submitBtn.classList.add("submit-btn-success");
    submitBtn.classList.remove("submit-btn-fail");
  } else {
    submitBtn.disabled = true;
    submitBtn.classList.add("submit-btn-fail");
    submitBtn.classList.remove("submit-btn-success");    
  }
});

// To add todo Item to the todo list
const addTodoItem = (todoItem) => {
  let newTodoItem = document.createElement("tr"); //<tr> </tr>

  let newTodoItemData = document.createElement("td");
  newTodoItemData.textContent = todoItem;

  let newTodoEditData = document.createElement("td");
  let newTodoDeleteData = document.createElement("td");
  let newTodoCheckData = document.createElement("td");

  // Create the delete and edit buttons and checkbox
  let deletBtn = document.createElement("button");
  deletBtn.textContent = "Delete";
  deletBtn.addEventListener("click", deleteTodoItem);
  deletBtn.classList.add("bg-danger");

  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("bg-green");

  let check = document.createElement("input");
  check.addEventListener("click", markAsDone);
  check.type = "checkbox";
  check.classList.add("check");

  newTodoEditData.appendChild(editBtn);
  newTodoDeleteData.appendChild(deletBtn);
  newTodoCheckData.appendChild(check);

  newTodoItem.appendChild(newTodoItemData);
  newTodoItem.appendChild(newTodoEditData);
  newTodoItem.appendChild(newTodoDeleteData);
  newTodoItem.appendChild(newTodoCheckData);

  todoContainer.appendChild(newTodoItem);
};

// Listens for click events and invokes addTodoItem()
submitBtn.addEventListener("click", () => {
  let userInput = inputElem.value;
  addTodoItem(userInput);
})

const deleteTodoItem = (e) => {  
  let targetBtn = e.target;
  let isDeleteOk = confirm("Are you sure you want to delete this item?"); 
  let parent = targetBtn.parentNode.parentNode; 
  isDeleteOk ? parent.parentNode.removeChild(parent) : "";
};

const markAsDone = (e) => {
  let targetBtn = e.target;
  let parent = targetBtn.parentNode;
  if (
    !parent.parentNode.classList.contains("line-through") &&
    targetBtn.checked
  ) {
    parent.parentNode.classList.add("line-through");
  } else {
    parent.parentNode.classList.remove("line-through");
  }
};
