var fruit="empty";
var stock=true;
let fruits = ["banana","grapes","apple"]
document.write(fruits);
fruit=prompt("nom de fruit")
fruits.forEach(element => { 
    if(fruit==element){
    fruits.splice(element,1);
    document.write("<br>",element);
    document.write("<br>",fruits);
    stock= false;
    }
})
if(stock==true){
    document.write("<br>","unavaible");
}