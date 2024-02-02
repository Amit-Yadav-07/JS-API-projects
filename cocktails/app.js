// import getElement from "./src/getElement.js";
import showDrinks from "./src/showDrinks.js";
import './src/searchForm.js';




let URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a`;



window.addEventListener('DOMContentLoaded', () => {
    showDrinks(URL)
})





