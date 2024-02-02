import fetchData from "./fetchData.js";
import displayDrinks from "./displayDrinks.js";
import setDrink from "./setDrink.js";

async function showDrinks(url) {



    // fetching drinks

    let data = await fetchData(url);
    // console.log(data);

    let section = displayDrinks(data);

    if (section) {
        setDrink(section);
    }
}


export default showDrinks;