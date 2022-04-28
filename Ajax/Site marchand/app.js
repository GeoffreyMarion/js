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
    }
    ];
var articles=[];
//affiche les produits
$(".prod").each(function(index) {
    var lien=produit[index].image;
    var name=produit[index].nom;
    var des=produit[index].descrption;
    var price=produit[index].prix;
    $(this).html("<img src="+lien+">"+"<h3>"+name+"</h3>"+"<p>"+des+"</p>"+"<b> Prix: "+price+"</b><br><button type='button' class='btn btn-dark ajouter'>Ajouter au pannier</button>")
    //update articles 
    $(this).click(function (e) { 
        articles.push(index);
        console.log(articles);
    });
});

$("button").click(function (e) { 
    e.preventDefault();
});

//affiche le offcanvas droit
$(".tpannier").click(function (element) { 
    console.log("hop");
    var totprix=0;
    var contenubas="";
    const but='<button class="btn btn-outline-dark commande" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasgauche" aria-controls="offcanvasLeft">Valider la commande</button>"'
    const supr='<button class="btn btn-outline-danger commande" type="button">Valider la commande</button>';
    /*$(articles).each(function (index) {
        var nomp=produit[articles[index].value].name;
        var prix=produit[articles[index].value].prix;
        totprix+= prix;
        if(!articles.indexOf(element,articles[index])){
        contenubas+= "nom"+nomp+supr+"<br> Quantité <input>1</input><br> Prix:"+prix+"E";
        }
        else{
            ("input").this().value++
        }
    });
    $(".contenudroithaut").html("<h4>Total: "+totprix+"</h4>"+but);*/
    


});
