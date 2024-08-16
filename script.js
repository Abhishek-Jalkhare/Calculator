var buttons = document.querySelectorAll(".button");
var main = document.querySelector(".main");
var disp = document.querySelector(".disp")
buttons.forEach(function(ele){
    ele.innerHTML = ele.id
})
var expression = null ;
main.addEventListener("click", function(e) {
    if(e.target.id == "=") {
        solveExpression(expression);
        expression = null;
    }
    else if (e.target.id == "c"){
        expression = null;
        disp.innerHTML = "";
    }
    else if (e.target.classList.contains("button")) {
        if(expression == null ) expression = e.target.id;
        else expression += e.target.id;
        disp.innerHTML = expression;
    }
    

});

function solveExpression( expression ){
    try {
        var result = eval(expression); 
        disp.innerHTML = result;
        
    }
     catch (error) {
        console.error("Invalid expression:", error);
        disp.innerHTML = "SYNTAX ERROR";
        
    }
}