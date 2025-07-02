const createButton = document.querySelector('.input-button');

const addContainer = document.querySelector('.input-container');
const enterContainer = document.querySelector('.enter-container');

const taskDescription = document.querySelector('.task');
const addButton = document.querySelector('.enter-task');
const updateButton = document.querySelector('.update-task');
const elementContainer = document.querySelector('.element-container');
const saveButton=document.querySelector('.save');
come();
addButton.addEventListener('click', () => {
    if (taskDescription.value != "") {
        addTask(taskDescription.value);
        addContainer.style.display = 'flex';
        enterContainer.style.display = 'none';
        taskDescription.value = "";
        // saveButton.style.display='flex';
    }
    else {
        alert('Enter some task');
    }
});

let mainTask;

function addTask(temp) {
    const taskElement = document.createElement('div');
    taskElement.classList.add('element');

    taskElement.innerHTML = `
        <div class="description">${temp}</div>
        <div class="delete-edit">
            <button class="delete"><i class="fa-solid fa-trash"></i></button>
            <button class="edit">Edit</button>
        </div>
    `;

    elementContainer.appendChild(taskElement);
    const deleteButton = taskElement.querySelector('.delete');
    deleteButton.addEventListener('click', () => {
        taskElement.remove();
    });
    const editButton = taskElement.querySelector('.edit');
    editButton.addEventListener('click', () => {
        addButton.style.display = 'none';
        updateButton.style.display = 'flex';
        addContainer.style.display = 'none';
        enterContainer.style.display = 'flex';
        taskDescription.value = taskElement.querySelector('.description').innerText;
        mainTask = taskElement;
    });
}

createButton.addEventListener('click', () => {
    addContainer.style.display = 'none';
    enterContainer.style.display = 'flex';
});

updateButton.addEventListener('click', () => {
    mainTask.querySelector('.description').innerText = taskDescription.value;
    taskDescription.value = "";
    addContainer.style.display = 'flex';
    enterContainer.style.display = 'none';
    mainTask = null;
});
saveButton.addEventListener('click',()=>{
    go();
});
function go() {
    const elements = elementContainer.querySelectorAll('.element');
    let arr = []; 

    elements.forEach((temp) => {
        arr.push(temp.querySelector('.description').innerText);
    });

    const temporary = JSON.stringify(arr);
    localStorage.setItem("arr", temporary);

    
}
function come(){
    const arr=JSON.parse(localStorage.getItem("arr"));
    for(let temp of arr)
    {
        addTask(temp);
    }
}


