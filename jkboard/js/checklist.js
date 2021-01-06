'use strict'

const inputBox = document.querySelector("#checklis-add");
const addBtn = document.querySelector("#addbtn");
const list = documet.querySelector(".form-check");



addBtn.addEventListener("click",() => {
    let userData = inputBox.value;
    if (userData !='')
        addtask(userData);
    userData = '';

})


//   When user click add button

// addBtn.addEventListener ("click",(e) => {
//     let userData = inputBox.value;
//     let getLocalStorage = localStorage.getItem("New Todo"); 
//     if(getLocalStorage == null){
// listArr = [];
//     }else{
//         listArr = JSON.parse(getLocalStorage);
//     }
//     listArr.push(userData);
//     localStorage.setItem("New Todo", JSON.stringify(listArr));
//     showTasks();
// })


// // Showing Tasks add tasks
// function showTasks(){
//     let getLocalStorage = localStorage.getItem("New Todo"); 
//     if(getLocalStorage == null){
//         listArr = [];
//     }else{
//         listArr = JSON.parse(getLocalStorage);
//     }
//     let newTaskTag = '';
//     listArr.forEach((element, index) => {
//         newTaskTag += `<div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="checkbox_2"> ${element} <span onclick="deleteTask(${index})";><i class="fas fa-trash"></i></span> </div>`;
//     });
//     checkBox.innerHTML = newTaskTag;
//     inputBox.value="";
// }

// // Delete Tasks
// function deleteTask(index) {
//     let getLocalStorage = localStorage.getItem("New Todo"); 
//     listArr = JSON.parse(getLocalStorage);
//     listArr.splice(index, 1);
//     // after remove update local storage
//     localStorage.setItem("New Todo", JSON.stringify(listArr));
//     showTasks();
// }