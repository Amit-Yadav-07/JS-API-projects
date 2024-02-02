import fetchData from './src/fetchData.js'
import displayDrink from "./src/displaySingleDrink.js";


async function presentDrink() {
    let id = localStorage.getItem('drink');
    if (!id) {
        window.location.replace('index.html');
    } else {

        let drink = await fetchData(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);

        displayDrink(drink);
    }

}


window.addEventListener('DOMContentLoaded', presentDrink);



