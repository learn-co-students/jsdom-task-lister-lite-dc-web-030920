document.addEventListener("DOMContentLoaded", () => {
  // your code here

// get the form 
let formNode = document.getElementById("create-task-form");
// add EventListener for the submit 
formNode.addEventListener("submit", handelSubmit)

// add onclick to show it is clicked









});

// add task discrption
function addTask ( description){
  // find the ul in the body 
  //create li and appened to the ul 
  let ulNode = document.querySelector("ul");
  let liNode = document.createElement("li");
  // add the user's input inside the li
  liNode.innerText = description;
  
  //create button
  let buttonNode = document.createElement("button");
  buttonNode.id = "delete-button";
  buttonNode.innerText = "X";
  document.getElementById('delete-button').onclick = deleteTask();
 
  //append to li
   liNode.appendChild(buttonNode);
  //get task intput and put in inside the li 
  ulNode.appendChild(liNode );
  
}

function deleteTask(){
  // get the task list
  //remove the list
  

}

// //
function handelSubmit (event){
  // use the prevent default method for submit
  event.preventDefault();
  let disc = document.getElementById("new-task-description").value;
  addTask( disc);

  // after submit reset the form so that it doesn't have the user's task
  let formNode = document.getElementById("create-task-form");
  formNode.reset();


}
