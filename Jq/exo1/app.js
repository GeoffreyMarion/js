$(".button").click(function(){
    var saisie=$(".write").val();
    var inverse=saisie.split("").reverse().join("");
    console.log("clic")

    if(saisie === inverse && saisie!=""){
        console.log("in");
        $("#log").text("Palindrome");
        $("#log").removeClass("npal");
        $("#log").addClass("pal");
    }
    else{
        console.log("out");
        $("#log").text("Pas un Palindrome");
        $("#log").removeClass("pal");
        $("#log").addClass("npal");
    }
});

