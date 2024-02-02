

const url = `https://course-api.com/javascript-store-products`;


let productDom = document.querySelector('.product-center');




async function fetchedProduct() {

    productDom.innerHTML = `<div class="loading">Loading...</div>`;

    try {

        let response = await fetch(url);
        let data = await response.json();

        return data;

    } catch (error) {

        productDom.innerHTML = `<div class="error">404 Page not found</div>`;
        console.log(error);

    }


}


function displayProduct(list) {

    let productList = list.map((item) => {

        let { id } = item
        let { company, name, price } = item.fields;
        let actualPrice = price / 100;

        let { url } = item.fields.image[0]

        return `<a class="product-link" href="product.html?id=${id}">
                    <img class="product-img"
                        src="${url}"
                        alt="${name}">
                    <footer>
                       <h5>${name}</h5>
                       <span>$${actualPrice}</span>
                    </footer> 
               </a>
                `



    }).join('')



    productDom.innerHTML = `<div class="products-container">${productList}</div>`
}


async function start() {

    let data = await fetchedProduct();
    displayProduct(data);
}


start();

// fetchedProduct(url);