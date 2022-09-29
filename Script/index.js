document.querySelector("#form").addEventListener("submit", todoFunction);
var todoArr = JSON.parse(localStorage.getItem("todoList")) || [];
function todoFunction(event)
{
    event.preventDefault();
    var Name = document.querySelector
    ("#name").value;
    var Qty = document.querySelector
    ("#qty").value; 
    var Priority = document.querySelector
    ("#priority").value;

    var todoObj = {
        todoName : Name,
        todoQty : Qty,
        todoPriority : Priority,
    };
    todoArr.push(todoObj);
    // console.log(todoArr)
    localStorage.setItem("todoList", JSON.stringify(todoArr));
};