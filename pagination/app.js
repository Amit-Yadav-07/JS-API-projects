import fetchFollower from "./fetchFollower.js";
import displayFollower from "./displayFollower.js";
import paginate from "./paginate.js";
import displayButtons from './displayButtons.js'

const title = document.querySelector('.section-title h2');
const btnContainer = document.querySelector('.btn-container');



let index = 0
let pages = []

let setupUI = () => {
    displayFollower(pages[index])
    displayButtons(btnContainer, pages, index);
}


async function init() {

    const followers = await fetchFollower();
    displayFollower(paginate(followers));
    title.textContent = 'Pagination';
    pages = paginate(followers)
    setupUI();
    // console.log(pages);
}



btnContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('btn-container')) return
    if (e.target.classList.contains('btn')) {
        index = parseInt(e.target.dataset.index);
    }

    // next btn logic not working
    if (e.target.classList.contains('next-btn')) {
        console.log(parseInt(index));


        index++;
        if (index > pages.length - 1) {
            index = 0;
        }
    }

    // prev btn logic not working
    if (e.target.classList.contains('prev-btn')) {
        index--;
        if (index < 0) {
            index = pages.length - 1;
        }
    }

    setupUI();


})

window.addEventListener('load', init)