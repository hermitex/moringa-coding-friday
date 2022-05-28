
// Grab the input element
const inputElem = document.querySelector(".input");
// Grab the todo ul
const todoContainer = document.querySelector(".todo-list");
// Grab the submit button
const submitBtn = document.querySelector(".add-todo");



// submit button default css settings
submitBtn.style.border = "none";
submitBtn.style.padding = "0.5rem 0";
submitBtn.style.backgroundColor = "gray";
submitBtn.style.color = "#0a0a0a";
submitBtn.style.cursor = "progress";

// Listens for click input and invokes addTodoItem()
inputElem.addEventListener("input", function (e) {
  let userInput = e.target.value;
  if (userInput != "") {
    submitBtn.disabled = false;
    submitBtn.style.backgroundColor = "green";
    submitBtn.style.color = "#fff";
    submitBtn.style.cursor = "pointer";
  } else {
    submitBtn.disabled = true;
    submitBtn.style.border = "none";
    submitBtn.style.padding = "0.5rem 0";
    submitBtn.style.backgroundColor = "gray";
    submitBtn.style.color = "#0a0a0a";
    submitBtn.style.cursor = "progress";
  }
});

// To add todo Item to the todo list
const addTodoItem = (todoItem) => {
  let newLi = document.createElement("li"); //<li> </li>
  newLi.textContent = todoItem;

  // Create span to hold action buttons
  let controlContainer = document.createElement('span'); //<span></span>
  
  // Create the delete and edit buttons and checkbox
  let deletBtn = document.createElement('button');
  deletBtn.textContent = "Delete";
  deletBtn.addEventListener('click', deleteTodoItem);
  deletBtn.classList.add('bg-danger');


  let editBtn = document.createElement('button');
  editBtn.textContent = "Edit";
  editBtn.classList.add('bg-green');

  let check = document.createElement('input');
  check.addEventListener('click', markAsDone);
  check.type = 'checkbox'
  check.classList.add('check')


  controlContainer.appendChild(editBtn);
  controlContainer.appendChild(deletBtn);
  controlContainer.appendChild(check)

  newLi.appendChild(controlContainer)


  todoContainer.appendChild(newLi);
    // todoContainer.innerHTML = `<li>${todoItem}</li>`;
};

// Listens for click events and invokes addTodoItem()
submitBtn.addEventListener("click", () => {
  let userInput = inputElem.value;
  addTodoItem(userInput);
});



const deleteTodoItem = (e) => {
  let targetBtn = e.target;
  let parent = targetBtn.parentNode.parentNode;
  parent.parentNode.removeChild(parent)  
}




const markAsDone = (e) => {
  let targetBtn = e.target;
  let parent = targetBtn.parentNode;
  if (!parent.parentNode.classList.contains('line-through') && targetBtn.checked) {
    parent.parentNode.classList.add('line-through');
  } else {
    parent.parentNode.classList.remove('line-through');
  }
}


