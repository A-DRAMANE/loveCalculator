export async function Calcul(name1,name2) {

    console.log(name1,name2);
    let pourcentage = document.querySelector('.pourcentage')
    pourcentage.innerHTML = "Chargement..."

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
        console.log("p",pourcentage);
        
    })
    .catch(err => {
        console.error(err);
    });
}
