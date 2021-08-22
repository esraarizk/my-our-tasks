
// setting up my varaibles
let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");
let noTaskMsg = document.querySelector(".no-tasks-message");
let taskCount = document.querySelector(".tasks-count span");
let taskcompleted = document.querySelector(".tasks-completed span");

//Focus om input field
window.onload = function(){
    theInput.focus();
};
 //addind the task
theAddButton.onclick = function(){
 if (theInput.value === ''){
     console.log("No value");
     
     }else{
         
         let noTaskMsg = document.querySelector(".no-tasks-message");
if(document.body.contains(document.querySelector(".no-tasks-message"))){
   noTaskMsg.remove();
    
   
   }
          
      
         let mainSpan = document.createElement("span");
         let deleteElement = document.createElement("span");
         let text = document.createTextNode(theInput.value);

         let deleteText = document.createTextNode("Delete");
         mainSpan.appendChild(text);
         mainSpan.className='task-box';

         deleteElement.appendChild(deleteText);
        deleteElement.className='delete';
         
         mainSpan.appendChild(deleteElement);
         tasksContainer.appendChild(mainSpan);
         
         theInput.value = '';
             theInput.focus();
           calculatedTasks();

     }
};

document.addEventListener('click',function(e){
    
if(e.target.className == 'delete'){
e.target.parentNode.remove();
    
 if (tasksContainer.childElementCount == 0){
  createdNoTasks();   
 }   

}
 if(e.target.classList.contains('task-box')){
e.target.classList.toggle('finished');

}
 calculatedTasks(); 
    
});
    
function createdNoTasks(){
    let msgSpan = document.createElement('span');
    let msgtext = document.createTextNode('No Tasks To Show');
    
    msgSpan.appendChild(msgtext);
    msgSpan.className = 'no-tasks-message';
    tasksContainer.appendChild(msgSpan);
    
}
 // function to claculate tasks 

function calculatedTasks(){
    
    taskCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;
     taskcompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length;
}