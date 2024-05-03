// Parte Energético

function funCalcularResultadoEnergetico() {
    var varMetragemE = parseFloat(document.querySelector("#campoCafeina").value);
    var varQuantidadeE = parseFloat(document.querySelector("#campoVolume").value);
    var varPrecoE = parseFloat(document.querySelector("#campoPrecoEnergetico").value);
    
    var varCalculoDoResultadoE = varMetragemE * varQuantidadeE / varPrecoE;
    
    var varResultadoE = document.querySelector("#campoResultadoEnergetico");
    
    varResultadoE.value = varCalculoDoResultadoE;
}

function funCalcularResultadoEnergeticoEnter(){                
        
    if(event.key === "Enter"){
        funCalcularResultadoEnergetico();
    }
}

document.querySelector("#botaoCalcularEnergetico").addEventListener("click", funCalcularResultadoEnergetico);
document.querySelector("#botaoCalcularEnergetico").addEventListener("keydown", funCalcularResultadoEnergeticoEnter);