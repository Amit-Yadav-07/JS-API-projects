
function getElement(selection) {

    let element = document.querySelector(selection);
    if (element) {
        return element
    } else {
        throw new Error('there is no such element exist')
    }
}


export default getElement;