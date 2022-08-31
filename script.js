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
    document.querySelector(".muneco").style.display = "none";
    document.querySelector(".texto").style.display = "none";
    document.querySelector(".textop").style.display = "none";
    emisor.value = "";}

function desencriptar(texto){
    texto = texto.toLowerCase();
    for(let i = 0; i < y.length; i++){
        if(texto.includes(y[i])){
            texto = texto.replaceAll(y[i],x[i]);}}
        return texto;}
function botónDesencriptar(){
    let textoDesencriptado = desencriptar(emisor.value);
    receptor.value = textoDesencriptado;
    document.querySelector(".muneco").style.display = "none";
    document.querySelector(".texto").style.display = "none";
    document.querySelector(".textop").style.display = "none";
    emisor.value = "";}

function mostrarBotón(){
    document.querySelector(".copiar").style.display = "block";}
function botónCopiar(){
    receptor.select();
    navigator.clipboard.writeText(receptor.value);
    receptor.value = "";};