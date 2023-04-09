tasks = ["hej"];
newTask = "";

const taskListElement = document.getElementById("taskList");
const taskNameElement = document.getElementById("addTask");

function addTaskToList() {}

//"clean" the "old" list and load the current list
function updateTasks() {
  taskListElement.innerHTML = "";
  for (let task of tasks) {
    //the "task" "element / text"
    const taskElement = document.createElement("div");
    taskElement.innerText = task;
    taskElement.classList.add("task");
    taskListElement.appendChild(taskElement);

    //Completed button
    const completedButton = document.createElement("button");
    completedButton.innerText = "Completed";
    taskElement.appendChild(completedButton);
    completedButton.classList.add("completed");

    //remove button
    const removeTaskButton = document.createElement("button");
    removeTaskButton.innerText = "Remove";
    taskElement.appendChild(removeTaskButton);
    removeTaskButton.classList.add("remove");
  }
}

//Input in the "search/write bar"
const inputElement = document.createElement("input");
inputElement.placeholder = "Task-name";
taskNameElement.appendChild(inputElement);

//the button to click to add tasks
const addTaskButton = document.createElement("button");
addTaskButton.innerText = "Add Task";
taskNameElement.appendChild(addTaskButton);

//click function to make the text to a new task
// and add to the tasks array
addTaskButton.addEventListener("click", () => {
  if (inputElement.value.length > 0) {
    newTask = inputElement.value;
    tasks.push(newTask);
    console.log(tasks);
    updateTasks();
  }
});

updateTasks();

removeTaskButton.addEventListener("click", () => {
  console.log("hej");
});
