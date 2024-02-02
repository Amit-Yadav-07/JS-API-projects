

import getElement from "./getElement.js";


let load = getElement('.loading');


export let showLading = () => {

    load.classList.remove('hide-lading');
}


export let hideLading = () => {

    load.classList.add('hide-lading');
}


