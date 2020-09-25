
const form = document.querySelector('#task_form');
const taskList = document.querySelector("ul");
const clearBtn = document.querySelector("#clear_task_btn");
const filter = document.querySelector("#task_filter");
const taskInput = document.querySelector("#new_task");


//Event Listener
form.addEventListener('submit', addTask);
taskList.addEventListener("click",removeTask);
clearBtn.addEventListener("click",clearTask);
filter.addEventListener("keyup",filterTask);

//Add task
function addTask(e){
    e.preventDefault();
    if(taskInput.value === ''){
        alert('somthing');
    }else{
        // create list element 
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(taskInput.value + ""));

        // Create Delet Link 
        let link = document.createElement('a');
        link.setAttribute('href', '#')
        link.innerHTML = "X";
        li.appendChild(link);

        taskList.appendChild(li);
        taskInput.value = "";
    }
}
//Remove task
function removeTask(e){
    if(e.target.hasAttribute("href")){
        if(confirm("Are You Sure?")){
            let ele = e.target.parentElement;
            ele.remove();
        }
    }
}

//CLeat Task
function clearTask(e){
    taskList.innerHTML = "";
}

//Filter Task
function filterTask(e){
    let text = e.target.value.toLowerCase();

     document.querySelectorAll("li").forEach(task => {
         let item = task.firstChild.textContent;
         if(item.toLowerCase().indexOf(text) != -1){
             task.style.display = "block";
         }else{
            task.style.display = "none";
         }
     });
}