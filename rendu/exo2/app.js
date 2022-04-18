var num1=0;
var num2=0;
var sum=0;
//var visible=true;

const linkon=document.querySelector("a.show");
const linkoff=document.querySelector("a.hide");
const calc=document.querySelector("form");

const in1=document.querySelector("input.in1");
const op=document.querySelector("select");
const in2=document.querySelector("input.in2");
const button=document.querySelector("input.button");

const info=document.querySelector("div.info");

/*
//Hide and show calc (pas fonctionnel)
linkon.addEventListener("click", (e) =>{
    //calc.style.display = "block";
    visible= true;
});

linkoff.addEventListener("click", (e) =>{
    //calc.style.display = "none";
    visible= false;
});
if (visible==true){
    calc.style.display = "block";
}
if (visible==false){
    calc.style.display = "none";
}
*/
linkon.Addeventlistener("click" , function() {
    calc.style.display = "block";
});
linkoff.Addeventlistener("click" , function() {
    calc.style.display = "none";
});

// zone d'infos
in1.addEventListener("mouseover", (e) =>{
    info.innerHTML="Donner un nombre";
});
in2.addEventListener("mouseover", (e) =>{
    info.innerHTML="Donner un nombre";
});
op.addEventListener("mouseover", (e) =>{
    info.innerHTML="Choisir une opération";
});
button.addEventListener("mouseover", (e) =>{
    info.innerHTML="Faire le calcul";
});


//calculatrice
button.addEventListener("click", (e) =>{
num1=in1.value;
num1=parseFloat(num1);
num2=in2.value;
num2=parseFloat(num2);
    if(op.value=="+"){
        sum=num1+num2;
    }
    else if(op.value=="-"){
        sum=num1-num2;
    }
    else if(op.value=="*"){
        sum=num1*num2;
    }
    else if(op.value=="/"){
        sum=num1/num2;
    }
alert(num1+op.value+num2+"="+sum)
});