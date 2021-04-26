import React from 'react'

export async function Calcul(nom1,nom2) {
    const calculResponse = [];

    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${nom1}&sname=${nom2}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "d24ff0ee3amshc0fc56cc0a62b3dp176859jsncaddd0907e0e",
		"x-rapidapi-host": "love-calculator.p.rapidapi.com"
        }
    })
    .then(response => response.json())
    .then(response => {
        console.log('a',response);
    })
    .catch(err => {
        console.error(err);
    });
}
