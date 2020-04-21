document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  // on click take info from text field and append to to do list box thing
  // type in on form. click submit => creates nodes and sets node text to form typed in thing and
  let form = document.getElementById('create-task-form');
  form.addEventListener("submit", submitInput)
  
  // document.submitElementById('create-task-form')
  function submitInput(event) {
  event.preventDefault();
  // your code here
  let input = document.getElementById('new-task-description');
  // debugger
  let ulNode = document.getElementById('tasks');
  let liNode = document.createElement('li');
  liNode.innerText = input.value
  let liButton = document.createElement('button');
  liButton.innerText = "X";
  liNode.appendChild(liButton);
  liButton.addEventListener("click", clearContent);
  function clearContent(){
  liNode.remove()
  }
  let selectNode = document.createElement('select')
  selectNode.id = "priorityButton"
  selectNode.innerHTML = "<option value='' disabled selected>Select Priority</option><option value='red'>Red</option><option value='yellow'>Yellow</option><option value='green'>Green</option>"
  let selectedColor = selectNode.value;
  selectNode.addEventListener("change", colorSelect)
  function colorSelect(){
  
  this.parentNode.style.color = this.value
  
  
  }
  liNode.appendChild(selectNode);
  ulNode.appendChild(liNode);
  
  form.reset()
  }
  
  });
  // function displayTasks(){
  // //if statement incoming --- need to change values to numbers --- numbers = color --- sort by numbers
  // // display li's in order of selectedColor (gather all first)
  // let allLis = document.querySelectorAll('li')
  // let array = Array.from(allLis)
  
  // //find all li's where selectedColor === "red"
  // let redTasks = array.filter( x => x.style.color === "red")
  // let redH3 = document.getElementById("red")
  // redH3.appendChild(redTasks)
  
  // //array of all li's with style.color === "red"
  
  // //find all li's where selectedColor === "yellow"
  // let yellowTasks = array.filter( x => x.style.color === "yellow")
  // yellowTasks
  
  // //find all li's where selectedColor === "green"
  // let greenTasks = array.filter( x => x.style.color === "green")
  // greenTasks
  // }
  


