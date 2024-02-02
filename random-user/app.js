
import getElement from './utils/getElement.js';
import getUser from './utils/getUserData.js';
import displayUser from './utils/displayPerson.js';


let URL = `https://randomuser.me/api/`;


let btn = getElement('.btn');




async function showUser() {

    // this function will return users

    let person = await getUser();
    displayUser(person)




}


window.addEventListener('DOMContentLoaded', showUser);
btn.addEventListener('click', showUser);

