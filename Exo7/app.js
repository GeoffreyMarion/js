var regexnom = /^[\w-]+" "+[\w-]$/;
var regexemail= /^[\w-\.]+@(([\w-]))+[\.]+([\w-]){2,4}$/;
var regexphone= /^[\d-]{10}$/;
const nom=document.querySelector(".nom input");
const email=document.querySelector(".email input");

//document.querySelector("form").onsubmit= verif()

email.addEventListener("blur", (e) =>{
    if(!regexemail.test(email.value)){
        document.querySelector(".email span").innerHTML="mail invalide";
        email.style.backgroundColor ="red";
    }
    else {//if(!regexemail.test(email).value){
        document.querySelector(".email span").innerHTML="mail valide";
        email.style.backgroundColor ="green";
    }
});
/*
function verif() {
    if (nom.value == "") {
        alert("Nom est vide");
        nom.focus();
        nom.style.backgroundColor ="red";
    document.querySelector("span#nom").innerHTML = "Nom valide"
    return false;
    }

 if (!regexnom.test(nom).value)
 {
    alert("Entrez nom valide!");
    nom.focus();
    nom.style.backgroundColor ="red";
    return false;
 }
    console.log("null");
    return true;
}
*/
