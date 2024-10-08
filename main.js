
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("Type Task Before Submitting");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('todo-form');
//     const taskInput = document.getElementById('task'); 
//     const taskList = document.getElementById('task-list');
//     const lastSubmittedTask = document.getElementById('last-submitted-task');
    
//     form.addEventListener('submit', (e) => { 
//         e.preventDefault(); 
//         const task = taskInput.ariaValueMax;
//         addTask(task);

//         displayLastSubmittedTask(task);
//             taskInput.value = '';
//     }); 
    
//     function addTask(task) { 
//         const li = document.createElement('li'); 
//         li.textContent = task; 

//         const completeButton = document.createElement('button'); 
//         completeButton.textContent = 'Complete'; 

//         completeButton.addEventListener('click', () => { 
//             li.classList.toggle('completed'); 
//         }); 

//         const deleteButton = document.createElement('button'); 
//         deleteButton.textContent = 'Delete'; 
//         deleteButton.addEventListener('click', () => { 
//             li.remove(); 
//         }); 
        
// li.appendChild(completeButton); 
// li.appendChild(deleteButton); 
//     taskList.appendChild(li); 
//     } 
//     function displayLastSubmittedTask(task){
//         lastSubmittedTask.textContent = task;
//     }
// });