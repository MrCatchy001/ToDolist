const container = document.getElementById("tasks")
let taskAdd =   document.getElementById("button-addon2")
const taskName = document.querySelector("input")
const card = document.querySelectorAll("card")





taskAdd.addEventListener("click" , (item) => {
    const newCard =` 
<div id="container" class="container">
<div class="row ms-2">
  <div class="card col-10 ms-4">
    <h2 class="p-3"> ${taskName.value} </h2>
  </div>
  <a type="button" class="btn btn-danger col-1">
    <i
      class="fa-solid fa-trash"
      style="font-size: 30px; padding: 30px 0px"
    ></i>
  </a>
</div>
</div>
`
    

    container.innerHTML += newCard;
     
})




container.addEventListener("click" , (e) => { 
  if (e.target.className == "fa-solid fa-trash") {
    e.target.parentElement.remove()
  } else if(e.target.className == "btn btn-danger col-1") {
    e.target.parentElement.remove()
    
  }else{
    console.log("no");
  }
})

// let delButton = document.getElementById("delButton")












