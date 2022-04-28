$.ajax({
    dataType: "JSON",
    url: "base.json",
    success: function(data) {
        contente="";
        contentv="";
        contenti="";
        /*$.each(data.etudiants,function(index,value){
            contente += "<li>"+value.nom+" "+value.prenom+" "+value.moyenne+"</li>";
            $("#etudiants").html(contente)

            if(value.moyenne>=10){
                contentv += "<li>"+value.nom+" "+value.prenom+" "+value.moyenne+"</li>";
                $("#valides").html(contentv)
                }
            else{
                contenti += "<li>"+value.nom+" "+value.prenom+" "+value.moyenne+"</li>";
                $("#invalides").html(contenti)
                }
        })*/
        $.each(data.etudiants,function(index,value){
            contente += "<tr>"+"<td>"+value.nom+"</td>"+"<td>"+value.prenom+"</td>"+"<td>"+value.moyenne+"</td>"+"</tr>";
            $("#etudiants").html(contente)

            if(value.moyenne>=10){
                contentv += "<tr>"+"<td>"+value.nom+"</td>"+"<td>"+value.prenom+"</td>"+"<td>"+value.moyenne+"</td>"+"</tr>";
                $("#valides").html(contentv)
                }
            else{
                contenti += "<tr>"+"<td>"+value.nom+"</td>"+"<td>"+value.prenom+"</td>"+"<td>"+value.moyenne+"</td>"+"</tr>";
                $("#invalides").html(contenti)
                }
        })
    },
    error:function(xhr){
        console.log(xhr.status);
    }
});
//teste de bouton pour organiser les valeurs du tableau
$("button#moyenne").click(function(){
    let tetudiants=$("table#etudiants");
    let tretudiants=$("table#etudiants tr");
    let tdetudiants=$("table#etudiants td");
    console.log(tretudiants);
    
    $.each(trtetudiants,function(index,value){
        
    });
});
