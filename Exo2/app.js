var num=0;

num=prompt("Give a number");

if(num%1==0 && num%num==0 && (num%2==0 || num%3==0 || num%5==0 || num))){
    alert("Non Premier");
}
else{
    alert("Premier");
}