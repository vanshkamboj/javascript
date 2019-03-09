
function mul(){
    var first_input=document.getElementById("first").value;
    var Second_input=document.getElementById("second").value;
    var result = first_input*Second_input;
    document.getElementById("result").innerHTML=result;
}

function div(){
    var first_input=document.getElementById("first").value;
    var Second_input=document.getElementById("second").value;
    var result = first_input/Second_input;
    document.getElementById("result").innerHTML=result;
}