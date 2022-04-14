var year=2000;
var bi=false;

year=prompt("année");
if((year%4==0 && year%100!=0)||(year%400==0)){
    bi=true
}
else{
    bi=false
}
alert(bi)