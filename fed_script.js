(function(window, document, undefined) 
 {
var ENTER_KEY_CODE = 13;
var taskInput = document.getElementById('task');
var taskList = document.getElementById('task-list');
taskInput.addEventListener("keydown", function(event)
{
if(event.keyCode === ENTER_KEY_CODE)
{
addTaskToList();
}
}
);

function addTaskToList()
{
if(taskInput.value)
{
var li=document.createElement('li');
li.textContent = taskInput.value;
li.innerHTML+= " <a href=\"#\" class=\"delete\">&#215;</a>
<a href=\"#\" class=\"check\">&#9744;</a>";

addTaskListeners(li);
taskInput.value = "";
taskList.appendChild(li);
}
}



