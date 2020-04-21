document.addEventListener("DOMContentLoaded", () => {

let formNode = document.getElementById("create-task-form"); // get the form 
formNode.addEventListener("submit", handelSubmit) // add EventListener for the submit 
// document.getElementById('delete-button').onclick = deleteTask();

});
function handelSubmit (event){
  event.preventDefault();// use the prevent default method for submit

  let disc = document.getElementById("new-task-description").value;
  addTask( disc);

  // after submit reset the form so that it doesn't have the user's task
  let formNode = document.getElementById("create-task-form");
  formNode.reset();
}
// ----------------------------------------------------------------------------------

function addTask ( descrip){ // add task discrption
  let ulNode = document.querySelector("ul");  // find the ul in the body 
  let liNode = document.createElement("li"); //create li and appened to the ul 
  liNode.innerText = descrip;// add the user's input inside the li

  //create button for delete that is a child of li
  let buttonNode = document.createElement("button");
  buttonNode.innerText = "X";
  liNode.appendChild(buttonNode);


  // let selectNode = document.createElement("select");
  // selectNode
  

  //get task intput and put in inside the li 
  ulNode.appendChild(liNode );

  buttonNode.addEventListener('click', function () { this.parentNode.remove() });

  
  
}






