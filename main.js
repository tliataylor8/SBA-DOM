
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const taskInput = document.getElementById('task'); 
    const taskList = document.getElementById('task-list');
    const lastSubmittedTask = document.getElementById('last-submitted-task');
    
    form.addEventListener('submit', (e) => { 
        e.preventDefault(); 
        const task = taskInput.ariaValueMax;
        addTask(task);

        displayLastSubmittedTask(task);
            taskInput.value = '';
    }); 
    
    function addTask(task) { 
        const li = document.createElement('li'); 
        li.textContent = task; 

        const completeButton = document.createElement('button'); 
        completeButton.textContent = 'Complete'; 

        completeButton.addEventListener('click', () => { 
            li.classList.toggle('completed'); 
        }); 

        const deleteButton = document.createElement('button'); 
        deleteButton.textContent = 'Delete'; 
        deleteButton.addEventListener('click', () => { 
            li.remove(); 
        }); 
        
li.appendChild(completeButton); 
li.appendChild(deleteButton); 
    taskList.appendChild(li); 
    } 
    function displayLastSubmittedTask(task){
        lastSubmittedTask.textContent = task;
    }
});