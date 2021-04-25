function optionone(){
    var alpha = parseInt(document.getElementById("Radio1").value);
    var beta = parseInt(document.getElementById("Radio2").value);
    if(document.getElementById("Radio1").checked){
        document.getElementById('one').style.display = "block";
    }
    if(document.getElementById("Radio2").checked){
        document.getElementById('two').style.display = "block";
    }
}
