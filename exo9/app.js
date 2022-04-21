const horstaxes=document.querySelector("input#ht");
const tva=document.querySelector("input#tva");
const ttc=document.querySelector("input#ttc");
const tauxtva=document.querySelector("input#ttva");
const inputs=document.querySelectorAll("input.but");

var _ht=0;
var _tva=0;
var _ttc=0;
var _ttva=0;
_ttva=20;

horstaxes.addEventListener("keyup",function(){
    _ht=parseFloat(horstaxes.value);
    _tva=parseFloat(_ttva)*_ht/100;
    _ttc=_ht+_tva;
    //_ttva=_tva/_ht*100;
    tva.value=parseFloat(_tva);
    ttc.value=parseFloat(_ttc);
    //tauxtva.value=parseFloat(_ttva);
});

tva.addEventListener("keyup",function(){
    _tva=parseFloat(tva.value);
    _ttva=_tva/_ht*100;
    _ttc=_ht+_tva;
    horstaxes.value=parseFloat(_ht); 
    ttc.value=parseFloat(_ttc);
    tauxtva.value=parseFloat(_ttva);
});

//Cassé a modif
ttc.addEventListener("keyup",function(){
    _ttc=parseFloat(ttc.value);
    _ht=_ttc-_tva;
    horstaxes.value=parseFloat(_ht);
    //tva.value=parseFloat(_tva);
    //tauxtva.value=parseFloat(_ttva);
});

tauxtva.addEventListener("keyup",function(){
    _ttva=parseFloat(tauxtva.value);
    _tva=_ttva*_ht/100;
    _ttc=_ht+_tva;
    //horstaxes.value=_ht;
    tva.value=_tva;
    ttc.value=_ttc;
});

inputs.forEach(element => {
    element.addEventListener("click", function(){
        tauxtva.value= parseFloat(element.value)
        _ttva=parseFloat(ttva.value);
        _tva=parseFloat(_ttva)*_ht/100;
        _ttc=_ht+_tva;
        _ht=_ttc-_tva;
        horstaxes.value=parseInt(_ht);
        tva.value=parseInt(_tva);
        ttc.value=parseInt(_ttc); 
    })
});

