var mainArray = [];
var i = 0;
function pushToArray(){

var x = document.getElementById("itemToAddInput").value;
itemToAddInput.value = "";
mainArray [i] = x;
i++;
}

function showArray(){
document.getElementById("sringShow").innerText ="";
var delimiter = document.getElementById("delimiterInput").value;
var st = mainArray.join(delimiter);
document.getElementById("sringShow").innerText = st;
//document.getElementById("arrayString").children.innerText = st;
}
