var todo_items = [];
var text = "";

var display_list = document.getElementById("list");
var submit_text = document.getElementById("submit-field");
var button = document.getElementById("submit-button");
var save = document.getElementById("save")

button.addEventListener("click",() => {
    todo_items.push(submit_text.value);
    child = document.createElement('p');
    child.textContent = submit_text.value;
    display_list.appendChild(child);
});

save.addEventListener("click",() =>{
    todo_items.forEach(function(item){
        console.log(item)
    })
});
