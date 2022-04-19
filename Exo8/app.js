var objet=document.querySelectorAll(".imgs img");
var large=document.querySelector(".limg img");

console.log(objet[0].src)

for(i=0;i<objet.length;i++){
    objet[i].addEventListener("click", function(){
        large.src=this.src;
    });
}
