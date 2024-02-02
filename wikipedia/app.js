const URL = `https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=`;


const form = document.querySelector('.form-control');
const input = document.querySelector('.input');
const results = document.querySelector('.results');



form.addEventListener('submit', function (e) {

    e.preventDefault();

    let value = input.value;

    if (!value) {
        results.innerHTML = `<h2>Please enter valid value </h2>`;
        return
    }

    fetchPages(value)

})


async function fetchPages(searchValue) {
    results.innerHTML = `<h2>Loading...</h2>`;
    try {
        let response = await fetch(`${URL}${searchValue}`);
        let data = await response.json();
        let result = data.query.search;
        if (result.length < 1) {
            results.innerHTML = `<h2>No matching result please try again</h2>`;
        }
        renderResult(result);
    } catch (error) {
        results.innerHTML = `<h2>there was an error</h2>`;
        console.log(error);

    }
}


function renderResult(list) {


    let items = list.map(function (item) {

        let { title, snippet, pageid } = item;
        // console.log(pageid);

        return `<a href=http://en.wikipedia.org/?curid=${pageid}>
                <h4 class="title">${title}</h4>
                <p>${snippet}</p>
            </a>`
    }).join('')

    results.innerHTML = items;

}