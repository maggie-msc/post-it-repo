count = 0
function showInputBox() {
    var newInput = document.createElement("textarea");
    newInput.className = "input";
    newInput.id = "input"+count;
    newInput.name = "input";
    newInput.cols = 30;
    newInput.rows = 10;
    document.body.appendChild(newInput);
    // newInput.style.display = "inline-block";
    console.log(newInput.className, newInput.id);
    // var x = document.getElementById(newInput.id);
    // if (newInput.style.display === "none") {
    //     newInput.style.display = "inline-block";
    // } else {
    //     newInput.style.display = "none";
    // }

    var button = document.getElementById("button");
    // button.onclick = "completeInput("+newInput.id+")";
    button.onclick = "completeInput()";
}

// function completeInput(inputId) {
function completeInput() {
    var input = document.getElementById("input0");
    input.style.marginLeft = "20px";
    input.style.marginTop = "10px";
    count+=1

}