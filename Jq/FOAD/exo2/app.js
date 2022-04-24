var taille=0;
var poids=0;
var imc=0;

$("input#button").click(function(){
    poids=$("input#poids").val();
    taille=$("input#taille").val();
    imc=poids/(taille*taille/10000)
    $("#chiffre").text(imc)
    /*switch(imc){
        case imc<18.5 :
            $("#resultat").text("IMC < 18,5 kg/m² : insuffisance pondérale"); 
            break;
        case 18.5<imc<24.9 :
            $("#resultat").text("18,5 < IMC < 24,9 : poids normal");
            break;
        case 25<imc<29.9 :
            $("#resultat").text("25 < IMC < 29,9 : surpoids");
            break;
        case imc<30 :
            $("#resultat").text("IMC > 30 : obésité");
            break;
        default:
            $("#resultat").text("Ca marche pas")
            break;
    }*/
    if(imc<18.5){
        $("#resultat").text("IMC < 18,5 kg/m² : insuffisance pondérale");
    }
    else if(18.5<imc<24.9){
        $("#resultat").text("18,5 < IMC < 24,9 : poids normal");
    }
    else if(25<imc<29.9){
        $("#resultat").text("25 < IMC < 29,9 : surpoids");
    }
    else if(30<imc){
        $("#resultat").text("IMC > 30 : obésité");
    }
    $(".affiche").addClass("show");
});