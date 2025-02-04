var todo_items = [];
var text = "";

var display_list = document.getElementById("list");
var submit_text = document.getElementById("submit-field");
var button = document.getElementById("submit-button");
var save = document.getElementById("save")
var load = document.getElementById("load")

button.addEventListener("click",() => {
    if(submit_text.value !== ''){
        todo_items.push(submit_text.value);
        child = document.createElement('p');
        child.textContent = submit_text.value;
        display_list.appendChild(child);
        }
});

save.addEventListener("click",() => {
    localStorage.setItem("total_list",todo_items);
});

load.addEventListener("click",() => {
    var stored = localStorage.getItem("total_list");
    if(stored){
        var word_list = stored.split(",")
        word_list.forEach(function(item){
            child = document.createElement('p');
            child.textContent = submit_text.value;
            display_list.appendChild(child);
        })
    }
    console.log(stored)
})
