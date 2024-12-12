let clickCount = 0;
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const counter = document.getElementById('counter');
const addTaskButton = document.getElementById('addTaskButton');
const resetListButton = document.getElementById('resetListButton');

addTaskButton.addEventListener('click', addTask);

resetListButton.addEventListener('click', resetList);

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }
    const li = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskSpan.addEventListener('click', incrementCounter);
    li.appendChild(taskSpan);
    taskList.appendChild(li);
    taskInput.value = "";
}
function incrementCounter(event) {
    const taskItem = this; 
    taskItem.classList.toggle('completed');
    if (taskItem.classList.contains('completed')) {
        clickCount++;
    } else {
        clickCount--; 
    }
    counter.textContent = clickCount;
}
function resetList() {
    taskList.innerHTML = "";
    clickCount = 0;
   counter.textContent = clickCount;
}
