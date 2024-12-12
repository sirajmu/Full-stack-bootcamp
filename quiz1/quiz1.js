// Initialize the click counter
let clickCount = 0;

// Get references to HTML elements
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const counter = document.getElementById('counter');
const addTaskButton = document.getElementById('addTaskButton');
const resetListButton = document.getElementById('resetListButton');

// Add event listener for the "Add Task" button
addTaskButton.addEventListener('click', addTask);

// Add event listener for the "Reset List" button
resetListButton.addEventListener('click', resetList);

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    // Ensure there's some text entered
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item
    const li = document.createElement('li');

    // Create a span for task text to be clicked
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Add an event listener to the span (task text) to mark it as done
    taskSpan.addEventListener('click', incrementCounter);

    // Append the task text to the list item
    li.appendChild(taskSpan);

    // Append the list item to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
}

// Function to increment the counter when the task text is clicked
function incrementCounter(event) {
    const taskItem = this; // The <span> element containing the task text

    // Mark the task as done by striking through
    taskItem.classList.toggle('completed');
    
    // If task is marked as done, increment the click counter
    if (taskItem.classList.contains('completed')) {
        clickCount++;
    } else {
        clickCount--; // Optional: decrement the counter if unmarked
    }

    // Update the counter display
    counter.textContent = clickCount;
}

// Function to reset the list and counter
function resetList() {
    // Clear the task list
    taskList.innerHTML = "";
    // Reset the click counter
    clickCount = 0;
   counter.textContent = clickCount;
}
