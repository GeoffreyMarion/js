var regexnom=/^[A-Za-z]{1,20}$/;
var regexemail= /^[\w-\.]+@(([\w-]))+[\.]+([\w-]){2,4}$/ ;
var regexnomphone= /^[\d-]{10}$/;
var regexmessage= /^[\w-\s-\.-\;]{1,200}$/;

var tmots=0;
var mots=0;
var letters=0;

var blo1=false;
var blo=false;
var blo3=false;
var blo4=false;
var blo5=false;

$("input#name").keyup(function(){
    if(!regexnom.test($("input#name").val())){
        $("#_name").text("nom invalide");
        $("#_name").removeClass("valide");
        $("#_name").addClass("invalide");
        return blo1=false;
    }
    else{
        $("#_name").text("nom valide");
        $("#_name").removeClass("invalide");
        $("#_name").addClass("valide");
        return blo1=true;
    }
});

$("input#fname").keyup(function(){
    if(!regexnom.test($("input#fname").val())){
        $("#_fname").text("Prénom invalide");
        $("#_fname").removeClass("valide");
        $("#_fname").addClass("invalide");
        return blo2=false;
    }
    else{
        $("#_fname").text("Prénom valide");
        $("#_fname").removeClass("invalide");
        $("#_fname").addClass("valide");
        return blo2=true;
    }
});

$("input#email").keyup(function(){
    if(!regexemail.test($("input#email").val())){
        $("#_email").text("email invalide");
        $("#_email").removeClass("valide");
        $("#_email").addClass("invalide");
        return blo3=false;
    }
    else{
        $("#_email").text("email valide");
        $("#_email").removeClass("invalide");
        $("#_email").addClass("valide");
        return blo3=true;
    }
});

$("input#phone").keyup(function(){
    if(!regexnomphone.test($("input#phone").val())){
        $("#_phone").text("Numéro de téléphone invalide");
        $("#_phone").removeClass("valide");
        $("#_phone").addClass("invalide");
        return blo4=false;
    }
    else{
        $("#_phone").text("Numéro de téléphone valide");
        $("#_phone").removeClass("invalide");
        $("#_phone").addClass("valide");
        return blo4=true;
    }
});

$("textarea#message").keyup(function(){
    tmots=$("textarea#message").val().split(" ");
    console.log(tmots);
    mots=tmots.length;
    letters=$("textarea#message").val().length
    $("#_message").text("Message invalide");
    if(!regexmessage.test($("textarea#message").val())){
        $("#_message").text("message invalide");
        $("#_message").removeClass("valide");
        $("#_message").addClass("invalide");
        return blo5=false;
    }
    else{
        $("#_message").text(mots+" "+"mot(s)"+letters+" "+"caractère(s)"+"/200");
        $("#_message").removeClass("invalide");
        $("#_message").addClass("valide");
        return blo5=true;
    }
});

$("textarea#message").keyup(function(){
if(blo1==true && blo2==true && blo3==true && blo4==true && blo5==true){
    $(".envoyer").show();
}
else{
    $(".envoyer").hide();
}
});

$(".envoyer").click(function(){
    var prenom= $("#fname").val();
    $("form").addClass("hide");
    $("b").text(prenom);
    $(".valide").show();
});