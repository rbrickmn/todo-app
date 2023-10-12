const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Adds a task to the list with user's own text.
function addTask() {
  if (inputBox.value === "") {
    alert("Please enter a task first.");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

// Runs the function addTask() when the user presses the Enter key in inputBox.
inputBox.addEventListener("keyup", (value) => {
  if (value.keyCode === 13) {
    addTask();
  }
});

// Looks for click on the list items. If item is a list item, toggle checked CSS property. If the user clicks the span, delete the task.
listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});
false;

// Saves current user data to localStorage.
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

// Pulls the to-do list from localStorage when page loads.
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
