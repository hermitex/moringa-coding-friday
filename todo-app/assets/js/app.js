// Grab the input element
const inputElem = document.querySelector(".input");
const todoContainer = document.querySelector(".todo-list");
const submitBtn = document.querySelector(".add-todo");

// Listens for click input and invokes addTodoItem()
inputElem.addEventListener("input", function (e) {
  let userInput = e.target.value;
  if (userInput != "") {
    submitBtn.disabled = false;
    submitBtn.style.backgroundColor = "green";
    submitBtn.style.border = "none";
    submitBtn.style.padding = "0.5rem 0";
    submitBtn.style.color = "#fff";
  } else {
    submitBtn.disabled = true;
  }
});


// To add todo Item to the todo list
const addTodoItem = (todoItem) => {
    let newLi = document.createElement('li');
    newLi.textContent = todoItem;
    todoContainer.appendChild(newLi);
//   todoContainer.innerHTML = `<li>${todoItem}</li>`;
};

// Listens for click events and invokes addTodoItem()
submitBtn.addEventListener("click", () => {
  let userInput = inputElem.value;
  addTodoItem(userInput);
});
