let addTaskBtn = document.querySelector('#addTaskBtn');
let taskInput = document.querySelector('#taskInput');
let categoryInput = document.querySelector('#categoryInput');
let taskContainer = document.querySelector('#taskContainer');
let taskLabel = document.querySelector('#taskLabel');
taskLabel.textContent = 0;


addTaskBtn.addEventListener("click", () => {

    let taskCardDiv = document.createElement('div');
    let title = document.createElement('h3');
    let category = document.createElement('p');
    let trimTask = taskInput.value.trim();

    title.textContent = trimTask;
    category.textContent = categoryInput.value;

    title.style.color = 'black';
    category.style.color = 'black'

    taskCardDiv.style.backgroundColor = "lightblue";
    taskCardDiv.className = "task-card";

    let emptyMessage = document.querySelector('#emptyMessage');


    if (trimTask === "") {
        alert("First Filled Task")
    } else if (categoryInput.value === "") {
        alert("First Select Category")
    } else {
        taskLabel.textContent++;
        emptyMessage.style.display = 'none';
        taskCardDiv.append(title);
        taskCardDiv.append(category);
        taskContainer.append(taskCardDiv);
    }


})