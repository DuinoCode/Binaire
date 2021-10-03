function convert() {
    let output = document.getElementById("ti2");
    let input = document.getElementById("ti1").value;
    output.value = "";
    for (var i = 0; i < input.length; i++) {
        output.value += input[i].charCodeAt(0).toString(2) + " ";
    }
}


function xbinaire()
{
    decimal = document.getElementById("decimal");
    binaire = document.getElementById("binaire");
 
    decimal.value = parseInt(binaire.value,2);
}


function xdecimal()
{
    decimal = document.getElementById("decimal");
    binaire = document.getElementById("binaire");
 
    binaire.value = (decimal.value-0).toString(2);
}


function change(){
    window.location.href = 'main.html'
}