var textInput = document.querySelector(".textarea__texto");
var textOutput = document.querySelector(".div__texto__criptografado");
var botaoCopiar = document.querySelector(".botao__copiar");

function botaoCriptografar() {
    var textoCriptografado = criptografar(textInput.value);
    textOutput.innerHTML = `<span>${textoCriptografado}</span>`;
    textInput.value = "";
    botaoCopiar.style.display = "block";
}
 
function criptografar(stringCriptografado) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringCriptografado = stringCriptografado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringCriptografado.includes(matrizCodigo[i][0])) {
            stringCriptografado = stringCriptografado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    
    return stringCriptografado;
}

function botaoDescriptografar() {
    var textoDescriptografado = descriptografar(textInput.value);
    textOutput.innerHTML = `<span>${textoDescriptografado}</span>`;
    textInput.value = "";
    botaoCopiar.style.display = "block";
}
 
function descriptografar(stringDescriptografado) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDescriptografado = stringDescriptografado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDescriptografado.includes(matrizCodigo[i][1])) {
            stringDescriptografado = stringDescriptografado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    
    return stringDescriptografado;
}

function copia() {
    var textoCopia = document.querySelector(".div__texto__criptografado").innerText;

    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = textoCopia;
    document.body.appendChild(tempTextarea);

    tempTextarea.select();
    document.execCommand("copy");

    document.body.removeChild(tempTextarea);

    alert("Texto copiado para a área de transferência!");
}