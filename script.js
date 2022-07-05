count = 0
function showInputBox() {
    var newInput = document.createElement("textarea");
    var footer = document.getElementById("footer");
    newInput.className = "input";
    newInput.id = "input";
    newInput.name = "input";
    newInput.cols = 30;
    newInput.rows = 10;
    newInput.style.display = "inline-block";
    footer.appendChild(newInput);
    var button = document.getElementById("button");
    button.onclick = function(){completeInput()};
}

function completeInput() {
    var input = document.getElementById("input");
    var displayInput = document.createElement("textarea");
    displayInput.className = "input-to-display";
    displayInput.id = "post";
    displayInput.name = "post";
    displayInput.cols = 30;
    displayInput.rows = 10;

    // displayInput.style.position = "relative";
    // displayInput.style.marginLeft = "20px";
    // displayInput.style.marginTop = "10px";
    count+=1
    input.remove()
    document.body.appendChild(displayInput);
    var button = document.getElementById("button");
    button.onclick = function(){showInputBox()};


}

// change class name to something else after 2nd function and change postion during
// first function - first time should be inline = only in the grid