let emisor = document.querySelector(".emisor");
let receptor = document.querySelector(".receptor");
const x = ["e","i","a","o","u"]; 
const y = ["enter","imes","ai","ober","ufat"];

function encriptar(texto){
        texto = texto.toLowerCase();
        for(let i = 0; i < x.length; i++){
            if(texto.includes(x[i])){
                texto = texto.replaceAll(x[i],y[i]);}}
            return texto;}
function botónEncriptar(){
    let textoEncriptado = encriptar(emisor.value);
    receptor.value = textoEncriptado;
    emisor.value = ""}

function desencriptar(texto){
    texto = texto.toLowerCase();
    for(let i = 0; i < y.length; i++){
        if(texto.includes(y[i])){
            texto = texto.replaceAll(y[i],x[i]);}}
        return texto;}
function botónDesencriptar(){
    let textoDesencriptado = desencriptar(emisor.value);
    receptor.value = textoDesencriptado;
    emisor.value = ""}

function botónCopiar(){
    receptor.select();
    //Document.execCommand.clipboard("copy");
    navigator.clipboard.writeText(receptor.value);
    receptor.value = "";};