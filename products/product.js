
let url = `https://course-api.com/javascript-store-single-product`;

let productDom = document.querySelector('.products');



async function fetchedProduct() {

    // console.log(window.location.search);
    let params = new URLSearchParams(window.location.search);
    let id = params.get('id');
    // console.log(id);

    productDom.innerHTML = `<div class="loading">Loading...</div>`;

    try {
        let response = await fetch(`${url}?id=${id}`);
        let data = await response.json();
        return data;

    } catch (error) {
        productDom.innerHTML = `<div class="error">Failed to fetch data ! please try again later</div>`;
        // console.log(error);
    }

}


function DisplayData(product) {


    let { company, colors, description, name, price } = product.fields
    let { url } = product.fields.image[0]
    document.title = name;


    // colors 

    let colorList = colors.map(function (color) {
        return `<span class="product-color" style="background:${color}"></span>`
    }).join('')

    productDom.innerHTML = `<div class="product-wrapper">
            <img class="img"
                src="${url}"
                alt="${name}">

            <div class="product-info">
                <h3>${company}</h3>
                <h5>${name}</h5>
                <strong>$${price / 100}</strong>
                <div class="colors">
                      ${colorList}
                </div>
                <p>${description}.</p>
                <button>Add to Cart</button>
            </div>
        </div>`

}









async function start() {

    let data = await fetchedProduct();
    console.log(data);
    DisplayData(data)
}

start();


// console.log(window.navigator);



