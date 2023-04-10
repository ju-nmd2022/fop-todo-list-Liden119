let tasks = [];
let completedTasks = [];
let newTask;

const taskListElement = document.getElementById("taskList");
const taskNameElement = document.getElementById("addTask");

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

    const taskIndex = tasks.indexOf(task);

    //remove a task
    removeTaskButton.addEventListener("click", () => {
      console.log("delete");
      tasks.splice(taskIndex, 1);
      updateTasks();
    });

    completedButton.addEventListener("click", () => {
      completedTasks.push(task);
      tasks.splice(taskIndex, 1);
      console.log(completedTasks);
      updateTasks();
      updateCompletedTasks();
    });
  }
}

function updateCompletedTasks() {
  for (let completedTask of completedTasks) {
    //the "task" "element / text"
    const completedTaskElement = document.createElement("div");
    completedTaskElement.innerText = completedTask;
    completedTaskElement.classList.add("completedTask");
    taskListElement.appendChild(completedTaskElement);
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
    updateTasks();
  }
});

updateTasks();
