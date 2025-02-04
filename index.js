var todo_items = [];
var text = "";

var display_list = document.getElementById("list");
var submit_text = document.getElementById("submit-field");
var button = document.getElementById("submit-button");
var save = document.getElementById("save_button");
var load = document.getElementById("load_button");
var download_button = document.getElementById("download_button");

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
        var word_list = stored.split(",");
        word_list.forEach(function(item){
            child = document.createElement('p');
            child.textContent = submit_text.value;
            display_list.appendChild(child);
        });
    }
});

download_button.addEventListener("click",() => {
    var stored = localStorage.getItem("total_list");
    var count = 1;
    var output = [];
    if(stored){
        var word_list = stored.split(",");
        word_list.forEach(function(item){
            output += count + '. ' + item + '\n';
            count++;
        });
        var blob = new Blob([output], {type: 'text/plain'});
        var out = document.createElement('a');
        if(out){
            out.href = URL.createObjectURL(blob);
            out.download = "todo.txt";
            out.click('out');
            URL.revokeObjectURL(out.href);
        }

    }
});
