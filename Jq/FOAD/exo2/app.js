regex=/^[0-9]{2,3}$/;
var taille=0;
var poids=0;
var imc=0;

$("input#button").click(function(){
    if((regex.test($("#taille").val())) && (regex.test($("#poids").val())) ){
    poids=$("input#poids").val();
    taille=$("input#taille").val();
    imc=poids/(taille*taille/10000)
    $("#chiffre").text(imc)
    switch(true){
        case imc<18.5 :
            $("#resultat").text("IMC < 18,5 kg/m² : insuffisance pondérale"); 
            break;
        case 18.5<imc && imc<24.9 :
            $("#resultat").text("18,5 < IMC < 24,9 : poids normal");
            break;
        case 25<imc && imc<29.9 :
            $("#resultat").text("25 < IMC < 29,9 : surpoids");
            break;
        case 30<imc :
            $("#resultat").text("IMC > 30 : obésité");
            break;
        default:
            $("#resultat").text("Ca marche pas")
            break;
        }
    $(".affiche").show();
    }
});
//feedback formulaire
$("input").keyup(function(){
    if(!regex.test($(this).val())){
        $(this).removeClass("valide");
        $(this).addClass("invalide");
        $("input#button").removeClass("valide");
        $("input#button").addClass("invalide");
    }
    else{
        $(this).removeClass("invalide");
        $(this).addClass("valide");
        }
    if((regex.test($("#poids").val())) && (regex.test($("#taille").val()))){
        $("input#button").removeClass("invalide");
        $("input#button").addClass("valide");
    }
});
