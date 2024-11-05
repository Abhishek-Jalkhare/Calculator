var buttons = document.querySelectorAll(".button");
var main = document.querySelector(".main");
var disp = document.querySelector(".disp");

// Set button text content
buttons.forEach(function(ele){
    // Handle special characters
    if (ele.id === "*") {
        ele.innerHTML = "×";
    } else if (ele.id === "/") {
        ele.innerHTML = "÷"; 
    } else {
        ele.innerHTML = ele.id;
    }
});

var expression = null;
main.addEventListener("click", function(e) {
    if(e.target.id == "=") {
        solveExpression(expression);
        expression = null;
    }
    else if (e.target.id == "c"){
        expression = null;
        disp.innerHTML = "0";
    }
    else if (e.target.classList.contains("button")) {
       
        let value = e.target.id;
        if(expression == null) {
            expression = value;
        } else {
            expression += value;
        }
       
        let displayExp = expression.replace(/\*/g, "×").replace(/\//g, "÷");
        disp.innerHTML = displayExp;
    }
});

function solveExpression(expression){
    try {
        var result = eval(expression);
      
        if (Number.isFinite(result)) {
            if (result.toString().length > 12) {
                result = result.toExponential(6);
            } else if (Number.isInteger(result)) {
                result = result.toString();
            } else {
                result = parseFloat(result.toFixed(6));
            }
            disp.innerHTML = result;
        } else {
            disp.innerHTML = "ERROR";
        }
    }
    catch (error) {
        console.error("Invalid expression:", error);
        disp.innerHTML = "ERROR";
    }
}