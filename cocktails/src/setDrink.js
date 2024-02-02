function setDrink(section) {

    // console.log(section);

    section.addEventListener('click', function (e) {
        // e.preventDefault();
        let id = e.target.parentElement.dataset.id;

        localStorage.setItem('drink', id)

        console.log(id);
    })


}



export default setDrink;