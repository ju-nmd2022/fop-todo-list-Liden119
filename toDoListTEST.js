let tasks = [];
let completedTasks = [];
let newTask;
let taskListElement;
let completedTaskListElement;
let taskNameElement;

function onLoadHandler() {
  taskListElement = document.getElementById("taskList");
  completedTaskListElement = document.getElementById("completedTaskList");
  taskNameElement = document.getElementById("addTask");

  taskListElement.innerHTML = "";
  completedTaskListElement.innerHTML = "";
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
      tasks.splice(taskIndex, 1);
      onLoadHandler();
      updateCompletedTasks();
    });

    completedButton.addEventListener("click", () => {
      completedTasks.push(task);
      tasks.splice(taskIndex, 1);
      onLoadHandler();
      updateCompletedTasks();
    });
  }
}

//"clean" the "old" list and load the current list
function updateTasks() {
  taskListElement.innerHTML = "";
  completedTaskListElement.innerHTML = "";
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
      tasks.splice(taskIndex, 1);
      updateTasks();
      updateCompletedTasks();
    });

    completedButton.addEventListener("click", () => {
      completedTasks.push(task);
      tasks.splice(taskIndex, 1);
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
    completedTaskListElement.appendChild(completedTaskElement);

    //remove button
    const removeTaskButton = document.createElement("button");
    removeTaskButton.innerText = "Remove";
    completedTaskElement.appendChild(removeTaskButton);
    removeTaskButton.classList.add("remove");

    const completedTaskIndex = completedTasks.indexOf(completedTask);

    //remove a task
    removeTaskButton.addEventListener("click", () => {
      completedTasks.splice(completedTaskIndex, 1);
      updateTasks();
      updateCompletedTasks();
    });
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

//click function to make a new task
addTaskButton.addEventListener("click", () => {
  if (inputElement.value.length > 0) {
    newTask = inputElement.value;
    tasks.push(newTask);
    updateTasks();
    updateCompletedTasks();
  }
});
