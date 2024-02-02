import getElement from './getElement.js'
import { hideLading } from './Loading.js';

function displayDrinks({ drinks }) {

    // console.log(drinks);

    let loading = getElement('.loading');
    let section = getElement('.section-center');


    if (!drinks) {
        hideLading();
        loading.textContent = `Sorry ! there is no drink match`;
        section.textContent = null
        return;
    }

    let newDrink = drinks.map(function (drink) {


        // console.log(drink);

        const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;


        return `<a href="drink.html">
                <article class="cocktail" data-id="${id}">
                    <img src="${image}"
                        alt="${name}">
            <h4 class="title">${name}</h4>
                </article >
            </a >`

    }).join('')

    hideLading();

    loading.textContent = '';
    section.innerHTML = newDrink;
    return section;

}


export default displayDrinks;