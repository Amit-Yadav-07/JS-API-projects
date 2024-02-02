
import getElement from "./getElement.js";



let img = getElement('.user-img');
let title = getElement('.user-title');
let value = getElement('.user-value');
let buttons = [...document.querySelectorAll('.icon')];


function displayUser(person) {
    // this function will display users

    img.src = person.img;

    let fullName = `${person.first} ${person.last}`;
    value.textContent = `My Name is`;
    buttons.forEach((btn) => btn.classList.remove('active'))
    buttons[0].classList.add('active')
    value.textContent = fullName;

    buttons.forEach(function (btn) {
        let label = btn.dataset.label

        btn.addEventListener('click', function () {
            title.textContent = `my ${label} is`
            value.textContent = person[label]
            buttons.forEach((btn) => btn.classList.remove('active'))
            btn.classList.add('active');

        })
    })

}


export default displayUser;