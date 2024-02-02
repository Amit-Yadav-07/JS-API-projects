import { showLading } from "./Loading.js";

async function fetchData(url) {

    showLading();

    try {

        const response = await fetch(url);
        const data = await response.json()
        return data;

    } catch (error) {
        console.log(error);
    }
}


export default fetchData;