import getElement from "./getElement.js";
import showDrinks from "./showDrinks.js";


const baseURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;



let form = getElement('.search-form');
let input = getElement('[name="drink"]');


form.addEventListener('keyup', function (e) {

    e.preventDefault();

    let value = input.value;

    if (!value) {
        return
    } else {
        showDrinks(`${baseURL}${value}`);
    }
})