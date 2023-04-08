tasks = [];
newTask = "hej";

const taskListElement = document.getElementById("taskList");
const taskElement = document.getElementById("addTask");

function addTaskToList() {}

function updateTasks() {
  taskListElement.innerHTML = "";
  for (let task of tasks) {
    const taskElement = document.createElement("div");
    taskElement.innerText = task;
    taskElement.classList.add("task");
    taskListElement.appendChild(taskElement);
  }
}

//Input in the "search/write bar"
const inputElement = document.createElement("input");
inputElement.placeholder = "Task (max 12 characters)";
taskElement.appendChild(inputElement);

//the button to click to add tasks
const addTaskButton = document.createElement("button");
addTaskButton.innerText = "Add Task";
taskElement.appendChild(addTaskButton);

//click function to make the text to a new task
// and add to the tasks array
addTaskButton.addEventListener("click", () => {
  if (inputElement.value.length > 0 && inputElement.value.length < 13) {
    newTask = inputElement.value;
    tasks.push(newTask);
    console.log(tasks);
    updateTasks();
  }
});

updateTasks();
