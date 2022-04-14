var etudiant=[["Moussa",14], ["Vanessa",17], ["Jean",8], ["Afpa",5]]

for(var index=0;index<etudiant.length;index++){
    if(etudiant[index][1]>9){
        console.log("Admis")
    }
    else{
        console.log("Pas admis")
    }
}