var regexname = /^[\w-]+" "+[\w-]$/;
var regexmail= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
var regexphone= /^[\d-]{10}$/;

function verif() {
    if (document.querySelector("input#name").value == "") {
        alert("Nom est vide");
        document.querySelector("input#name").focus();
    document.querySelector("input#name").style.backgroundColor ="red";
    document.querySelector("span#nom").innerHTML = "Nom valide"
    return false;
    }

 if (!regexname.test(document.querySelector("input#name").value))
 {
    alert("Entrez nom valide!");
    document.querySelector("input#name").focus();
    document.querySelector("input#name").style.backgroundColor ="red";
    return false;
 }
    console.log("null");
    return true;
}