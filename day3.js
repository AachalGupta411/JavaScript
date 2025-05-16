document.getElementById("myid").innerText = "Hello JavaScript!";

document.getElementsByClassName("myclass")[0].innerHTML = "Hello Sir";

document.createElement("div")

document.getElementById("myid").class= "myclass"

h4=document.getElementsByTagName("h4")[0]
h4.style.color = "red";
h4.style.fontSize = "50px";
h4.style.fontFamily = "Arial";
h4.style.backgroundColor = "yellow";
h4.style.textalign = "center"

function myFunction(){
    var x = 5
    var y = 10;
    var z = parseInt(x) + parseInt(y);
    document.getElementById("demo").innerHTML = z;
}