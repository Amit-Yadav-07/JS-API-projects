import { hideLading } from "./Loading.js";
import getElement from "./getElement.js";


function displayDrink(data) {

    let drink = data.drinks[0];

    let { strDrinkThumb: image, strDrink: name, strInstructions: description } = drink;


    let singleImg = getElement('.single-img');
    let singleName = getElement('.drink-name');
    let singleDesc = getElement('.drink-desc');

    singleImg.src = image;
    document.title = name;
    singleName.textContent = name;
    singleDesc.textContent = description;

}



export default displayDrink;