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
  let newLi = document.createElement("li");
  newLi.textContent = todoItem;
  todoContainer.appendChild(newLi);
  //   todoContainer.innerHTML = `<li>${todoItem}</li>`;
};

// Listens for click events and invokes addTodoItem()
submitBtn.addEventListener("click", () => {
  let userInput = inputElem.value;
  addTodoItem(userInput);
});
