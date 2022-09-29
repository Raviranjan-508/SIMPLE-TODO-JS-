var todoArr = JSON.parse(localStorage.getItem("todoList"));
var completed = JSON.parse(localStorage.getItem("completedtodos")) || [];
//this console run in starting or refresh after
// console.log(completed);

todoArr.map(function(elem,index){
    var row = document.createElement("tr");
    
    var col1 = document.createElement("td");
    col1.innerText = elem.todoName;

    var col2 = document.createElement("td");
    col2.innerText = elem.todoQty;

    var col3 = document.createElement("td");
    col3.innerText = elem.todoPriority;

    var col4 = document.createElement("button");
    col4.innerText = "Mark as Done";
    col4.addEventListener("click", function(){
        markComplete(elem);
    });
    row.append(col1,col2,col3,col4);
    document.querySelector("#body").append(row);
});

function markComplete(ele)
{
    // console.log(ele);
    completed.push(ele);
    localStorage.setItem("completedtodos", JSON.stringify(completed));
}