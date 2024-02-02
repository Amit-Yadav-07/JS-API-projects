import data from './data.js';


let container = document.querySelector('.slider-container');
let prevBtn = document.querySelector('.left-btn');
let nextBtn = document.querySelector('.right-btn');


container.innerHTML = data.map((person, index) => {



    let { img, name, job, text } = person;

    let position = 'next';

    if (index === 0) {
        position = 'active'

    }

    if (index === data.length - 1) {
        position = 'last'

    }

    return `<article class="slide ${position}">
                <img src="${img}"
                    alt="${name}">
                <h4 class="name">${name}</h4>
                <h3 class="title">${job}</h3>
                <p class="about">${text}</p>

                <div class="quote-icon">
                    <img src="./quote-img.png" alt="">
                </div>
            </article>`


}).join('')



function showSlide(type) {

    let active = document.querySelector('.active');
    let last = document.querySelector('.last');

    let next = active.nextElementSibling;

    if (!next) {
        next = container.firstElementChild;
    }

    active.classList.remove(['active']);
    last.classList.remove(['last']);
    next.classList.remove(['next']);


    if (type === 'prev') {
        active.classList.add('next');
        last.classList.add('active');
        next = last.previousElementSibling;
        if (!next) {
            next = container.lastElementChild;
        }
        next.classList.add('last');

        return
    }

    active.classList.add('last');
    last.classList.add('next');
    next.classList.add('active');

}


nextBtn.addEventListener('click', function () {
    showSlide();
})

prevBtn.addEventListener('click', function () {
    showSlide("prev");
})


