// Parte Papel Higiênico

function funCalcularResultado() {
    var varMetragem = parseFloat(document.querySelector("#campoMetragem").value);
    var varQuantidade = parseFloat(document.querySelector("#campoQtdRolos").value);
    var varPreco = parseFloat(document.querySelector("#campoPreco").value);
    
    var varCalculoDoResultado = varMetragem * varQuantidade / varPreco;
    
    var varResultado = document.querySelector("#campoResultadoPH");
    
    varResultado.value = varCalculoDoResultado;}

function funCalcularResultadoEnter(){
    if(event.key === "Enter"){
        funCalcularResultado();
    }
}

document.querySelector("#botaoCalcular").addEventListener("click", funCalcularResultado);
document.querySelector("#botaoCalcular").addEventListener("keydown", funCalcularResultadoEnter);