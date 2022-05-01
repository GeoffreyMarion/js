var produit = [
    {
    nom: 'Blouson Cuir Homme OSX',
    image: 'https://s1.rockagogostatic.com/ref/pls/pls15/blouson-cuir-mec-marque-osx-brando-jacket-pr.jpg',
    descrption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, laboriosam.',
    prix: 225
    },
    {
    nom: 'POLO CINTRE SLIM FIT EN COTON BASIC Bleu',
    image: 'https://photos6.spartoo.com/photos/188/18830673/18830673_500_A.jpg',
    descrption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, laboriosam.',
    prix: 75
    },
    {
    nom: 'Robe rose croisée à boucler',
    image: 'https://m1.quebecormedia.com/emp/emp/A1_2_1_d64e884e-d21e-41ab-8eb0-2baf6b656c00_ORIGINAL.jpg?impolicy=cropresize&x=0&y=0&w=802&h=1086&width=925&height=925',
    descrption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, laboriosam.',
    prix: 50
    },
    {
    nom: 'Sneakers Adidas Original Homme',
    image: 'https://www.kiffoo.com/7220-large_default/basket-adidas-original-homme.jpg',
    descrption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, laboriosam.',
    prix: 159
    },
    {
    nom: 'Pantalon jogging Nike Just Do It - Noir',
    image: 'https://api.vs.prod.footkorner.nbs-aws.com/img/600/744/resize/catalog/product/f/o/footkorner-pantalon-nike-just-do-it-cu4050-010-noir_1_.jpeg',
    descrption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, laboriosam.',
    prix: 27
    },
    {
    nom: 'Pantalon jogging Nike Just Do It - Noir',
    image: 'https://api.vs.prod.footkorner.nbs-aws.com/img/600/744/resize/catalog/product/f/o/footkorner-pantalon-nike-just-do-it-cu4050-010-noir_1_.jpeg',
    descrption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, laboriosam.',
    prix: 27
    },
    {
    nom: 'Pantalon jogging Nike Just Do It - Noir',
    image: 'https://api.vs.prod.footkorner.nbs-aws.com/img/600/744/resize/catalog/product/f/o/footkorner-pantalon-nike-just-do-it-cu4050-010-noir_1_.jpeg',
    descrption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, laboriosam.',
    prix: 27
    },
    {
    nom: 'Pantalon jogging Nike Just Do It - Noir',
    image: 'https://api.vs.prod.footkorner.nbs-aws.com/img/600/744/resize/catalog/product/f/o/footkorner-pantalon-nike-just-do-it-cu4050-010-noir_1_.jpeg',
    descrption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, laboriosam.',
    prix: 27
    }
    ];
var articles=[];
var totprix=0;
//Calcule le prix total
function totalprix(){
    totprix=0;
    $(articles).each(function (index) {
        prix=produit[articles[index]].prix;
        totprix+= prix;
    });
    return totprix;
}
//affiche les produits
$(".prod").each(function(index) {
    var lien=produit[index].image;
    var name=produit[index].nom;
    var des=produit[index].descrption;
    var price=produit[index].prix;
    $(this).html("<img src="+lien+">"+"<h3>"+name+"</h3>"+"<p>"+des+"</p>"+"<b> Prix: "+price+"</b><br><button type='button' class='btn btn-dark add_panier'>Ajouter au panier</button>")
    //update articles et fait un calcul de prix au clic
    $(this).click(function (e) { 
        articles.push(index);
        console.log(articles);
        totalprix();
    });
});


//desactive submit sur les boutons
$("button").click(function (e) { 
    e.preventDefault();
});
//affiche le offcanvas droit
$(".add_panier").click(function (element) { 
    var contenubas="";
    const but='<button class="btn btn-dark commande" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasgauche" aria-controls="offcanvasLeft">Valider la commande</button>'
    const supr='<button class="btn btn-outline-danger supprimer col-3 offset-md-1" type="button">supprimer</button>';
    $(articles).each(function (index) {
        var nomp=produit[articles[index]].nom;
        var prix=produit[articles[index]].prix;
        //si article non présent
        if(1==1){
        contenubas+= "<div class='article'><div class='row justify-content-start'><p class='col-7'>Nom: <b>"+nomp+"</b></p>"+supr+"</div><br> Quantité <input value='1'></input><br> Prix:<b>"+prix+"</b> €</div>";
        }
        //si article déjà présent
        else{
            ("input").value++
        }
        //affiche prix total plus valider la commande
        $(".contenudroitbas").html(contenubas);
        $(".contenudroithaut").html("<div class='droitehaut'><h4>Total: "+totprix+" €</h4>"+but+"</div>");
    });
});
//Boutton supprimer, update le prix total et supprime la div (Non fonctionnel)
$(".supprimer").click(function (element) { 
    console.log("hop")
    article.splice(this);
    totalprix();
    (this).parentNode.remove();
});
//Affiche le résumé commande/infos
$(".register").click(function (element) { 
    var name=$("input#floatingName").value;
    var fname=$("input#floatingfName").value;
    var email=$("input#floatingEmail").value;
    var tel=$("input#floatingTel").value;
    var addr=$("input#floatingAdd").value;
    $(".infos").html("<h3>Vos infos</h><div class='row justify-content-center'><p class='col-5'>"+name+"</p><p class='col-5'>"+fname+"</p></div><div class='row justify-content-center'><p class='col-5'>"+tel+"</p><p class='col-5'>"+email+"</p></div><div class='row justify-content-center'><p class='col-5'>"+addr+"</p></div>");
    var contenu="";
    $(articles).each(function (index) {
        var nomp=produit[articles[index]].nom;
        var prix=produit[articles[index]].prix;
        contenu+= "<div class='article'><p class='col-10'>Nom: <b>"+nomp+"</b></p><br><div class='row justify-content-start'><p class='col-4'>Prix:<b>"+prix+"</b> €</p><p class='col-4'>Quantité: <b>1</b></p></div></div><hr>";
    });
    $(".recapanier").html("<h3>Votre panier</h>"+contenu+"<div class='payer'>Toyal à payer:"+totprix+" €");
});
//Envoi l'alerte pour dire que la commande est passée
$(".payer").click(function (element) { 
    alert("Votre commande a bien été validée, à très bientôt");
});