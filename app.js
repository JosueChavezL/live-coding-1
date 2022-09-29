let arregloOriginal = ["insecto", "bootcamp", "mangos", "reptil", "mosca", "escritorio", "ae"];
let arregloModif = [];
let strPrueba = "ave";
let lista = document.getElementById("listaMod");

window.addEventListener("load", function (e){
    arregloModif = compareString(strPrueba,arregloOriginal);
    console.log(arregloModif);

    arregloModif.forEach(e => {
        lista.innerHTML += `<li>${e}</li></br>`
        
    });

});


function compareString(strPrueba, arregloOriginal){
    let longPalabra = strPrueba.length;
    let x = [];   

    arregloOriginal.forEach(e => {

        if(e.length > longPalabra){
            x.push(e);
        }        
    }); 
    return x;
}//funcion live coding