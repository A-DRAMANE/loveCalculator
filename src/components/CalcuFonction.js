export async function Calcul(name1,name2) {

    console.log(name1,name2);
    let pourcentage = document.querySelector('.pourcentage')
    let feeling = document.querySelector('.feeling')
    let coeur = document.querySelector('.coeur')
    feeling.innerHTML = ""
    pourcentage.innerHTML = "Chargement..."
    console.log(coeur.classList.length,coeur.classList);
    if (coeur.classList.length >1) {
        if (coeur.classList[1] === 'brise') {
            coeur.classList.toggle("brise")
        }else if (coeur.classList[1] === 'fil') {
            coeur.classList.toggle("fil")
        }else{
            coeur.classList.toggle("fort")
        }
    }

    await fetch("https://love-calculator.p.rapidapi.com/getPercentage?fname="+ name1 +"&sname="+name2, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "d24ff0ee3amshc0fc56cc0a62b3dp176859jsncaddd0907e0e",
		"x-rapidapi-host": "love-calculator.p.rapidapi.com"
        }
    })
    .then(response => response.json())
    .then(response => {

        pourcentage.innerHTML = response.percentage + "%"
        console.log("r",response);
        console.log("p",coeur);
        if (response.percentage >=0 && response.percentage <= 40) {
            pourcentage.innerHTML = response.percentage + "%"
            feeling.innerHTML = "Ohlalaaa votre amour n'est pas assez fort, mais n'oublie pas l'amour c'est aussi se battre. Montre à ton crush ton amour."
            coeur.classList.toggle("brise")
        } else if (response.percentage >=41 && response.percentage <= 60){
            pourcentage.innerHTML = response.percentage + "%"
            feeling.innerHTML = "Le fil qui tient votre amour, vous avez youte vos chance. Fortifiez ce t'AMOUR qui est le votre."
            coeur.classList.toggle("fil")
        }else{
            pourcentage.innerHTML = response.percentage + "%"
            feeling.innerHTML = "WOUUUUUUH le feux brulle entre Vous cet amour est grand et fort, Cultivez le et vous serait plus qu'heureux."
            coeur.classList.toggle("fort")
        }
        
    })
    .catch(err => {
        console.error(err);
    });
}
