document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let formNode = document.querySelector("form")
  formNode.addEventListener("submit", handleForm)
});

function handleForm(event) {
  event.preventDefault()


  let task = document.getElementById("new-task-description").value

  addTask(task)

  let formNode = document.getElementById("create-task-form")
  formNode.reset()

}

function addTask(inputs){
  let priority = document.getElementById("priority").value
  // let tasks = document.getElementById("tasks")
  // let low = document.getElementsByClassName("low")
  // let medium = document.getElementsByClassName("medium")
  // let high = document.getElementsByClassName("high")
  let low = document.getElementById("low")
  let medium = document.getElementById("medium")
  let high = document.getElementById("high")
  let task = document.createElement("li")
  task.className = priority 
  
  let button = document.createElement("button")
  button.addEventListener("click", () => {
    task.remove()
  })
  task.innerText = inputs
  button.innerText = "X"
  // tasks.appendChild(task)
  if (priority === "low"){
    low.appendChild(task)}
  else if (priority === "medium"){
    medium.appendChild(task)
  }
  else {
    high.appendChild(task)
  }
  addColor(priority, task)
  task.appendChild(button)

  // let taskList = document.querySelectorAll("li")
  // if taskList.length === 0 {
    //   tasks.appendChild(task)
    //  addColor(priority, task)
    //   task.appendChild(button)
    // }
  // else{
  // taskList.forEach( (element) => {
  //   if (element.className === "high"){
  //     tasks.appendChild(element)
  //     addColor(priority, element)
  //     task.appendChild(button)
  //   } else if (element.className === "medium"){
  //     tasks.appendChild(element)
  //     addColor(priority, element)
  //     task.appendChild(button)
  //   } else{
  //     tasks.appendChild(element)
  //     addColor(priority, element)
  //     task.appendChild(button)
  //   }
  // }})
// get list of all li elements
// list = get all li
//  condition logic for priority  - list.forEach( if list.className === 'high' => append ... )
//  

}

function addColor(value, element){
  if (value === "low"){
    element.setAttribute("style", "color: green")
  }else if (value === "medium"){
    element.setAttribute("style", "color: yellow")
    
  }
  else {
    element.setAttribute("style", "color: red")
  }
}
