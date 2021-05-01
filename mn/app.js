function optionone(){
    var alpha = parseInt(document.getElementById("Radio1").value);
    var beta = parseInt(document.getElementById("Radio2").value);
    if(document.getElementById("Radio1").checked){
        document.getElementById('one').style.display = "block";
        document.getElementById('two').style.display ="none";
    }
    if(document.getElementById("Radio2").checked){
        document.getElementById('two').style.display = "block";
        document.getElementById('one').style.display = "none";
    }
}
function show(){

    document.getElementById('solution').style.display = "block"; 
}
function solve(){
    var table = document.getElementById('tab');
    var row = document.getElementById('rows').value;
    var col = document.getElementById('cols').value;

    for(var i=0 ; i<row;i++){
        var tr = document.createElement('tr');
        for(var j=0; j<col;j++){
            var td = document.createElement('td');
            var text = document.createTextNode('canel '+j);

            td.appendChild(text);
            tr.appendChild(td);

        }
        table.appendChild(tr);
    }  
}
document.getElementById('solve').addEventListener("click",solve);