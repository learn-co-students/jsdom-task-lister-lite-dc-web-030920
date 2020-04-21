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
  liNode.innerText = descrip + "  ";// add the user's input inside the li



  let selectNode = document.createElement("select");
  let optionNode = document.createElement("option");
  optionNode.innerText =  "select option";
  selectNode.add(optionNode);
  

  let optionNode1 = document.createElement("option");
  optionNode1.innerText =  "high priority";
  selectNode.add(optionNode1);
  

  let optionNode2 = document.createElement("option");
  optionNode2.innerText =  "medium priority";
  selectNode.add(optionNode2);


  let optionNode3 = document.createElement("option");
  optionNode3.innerText =  "least priority";
  selectNode.add(optionNode3);

  liNode.appendChild(selectNode);

   //create button for delete that is a child of li
   let buttonNode = document.createElement("button");
   buttonNode.innerText = "X";
   liNode.appendChild(buttonNode);
 
  

  //get task intput and put in inside the li 
  ulNode.appendChild(liNode );
  setPriority(liNode, selectNode.value);

  selectNode.addEventListener('change',function() { setPriority(liNode, selectNode.value )});
 

  buttonNode.addEventListener('click', function () { this.parentNode.remove() });

 

  
  
}

function setPriority( li, priority ){
  // given in li
  //set the given li to corsponding color
  let result = false;
  if( priority === "high priority"){ 
    li.style.color ="red";

  }else if(priority === "medium priority"){
    li.style.color = "yellow";
  }else if(priority === "least priority"){

    li.style.color = "green";

  }else{
    li.style.color = "blue";
    
  }
 
  

}






