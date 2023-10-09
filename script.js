// TODO: Faire la manipulation du DOM dans ce fichier
//cibler touts les bouttons
//cibler l'ecran
//1.Bloquer les bouttons physique(fait)

//2.rendre les bouttons numérique cliquable

/*3.Faire en sorte que quand il y'a un event onclick sur un operateur les données entrées
 dans le screeninput monte sur le screenresult*/

const screeninput = document.getElementById("input");
//je cible tout les elements des type bouttons, avec leurs classe et id 
const bouttons = document.querySelectorAll("button");
//je cible l'ecran qui va effectuer les calcules
const screenresult = document.getElementById("calcul");
for(let i = 0; i<bouttons.length ;i++){
// const boutton = bouttons[i];
//cette event bloque les bouttons physique du clavier
window.addEventListener("keydown",function(event){event.preventDefault()});
//cette event rend le boutton numérique cliquable et fait des operations 
document.addEventListener("click",function(event){
event.preventDefault();
//rends les boutton numerique cliquable
if(screeninput.value == "0"){
screeninput.value ="";
screeninput.value +=event.target.innerText;
}
/*3.Faire en sorte que quand il y'a un event onclick sur un operateur les données entrées
 dans le screeninput monte sur le screenresult*/
else if(event.target.innerText == "+"){
screenresult.innerHTML = (screeninput.value) ;


 }



});

};


