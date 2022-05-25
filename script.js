count = 0
function showInputBox() {
    var newInput = document.createElement("textarea");
    var footer = document.getElementById("footer");
    newInput.className = "input";
    newInput.id = "input-"+count;
    newInput.name = "input";
    newInput.cols = 30;
    newInput.rows = 10;
    newInput.style.position = "absolute";
    footer.appendChild(newInput);
    var button = document.getElementById("button");
    button.onclick = function(){completeInput(newInput.id)};
}

function completeInput(input_id) {
    var input = document.getElementById(input_id);
    input.style.position = "relative";
    input.style.marginLeft = "20px";
    input.style.marginTop = "10px";
    count+=1
    var button = document.getElementById("button");
    button.onclick = function(){showInputBox()};


}

// change class name to something else after 2nd function and change postion during
// first function - first time should be inline = only in the grid