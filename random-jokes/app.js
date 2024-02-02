
let url = `https://icanhazdadjoke.com/`;

let btn = document.querySelector('.btn');
let result = document.querySelector('.result');


btn.addEventListener('click', function () {
    randomJokes();
})



async function randomJokes() {

    result.textContent = 'Loading...';

    try {

        let response = await fetch(url, {

            headers: {
                Accept: 'application/json',
                'User-Agent': 'learning'
            }

        });

        if (!response.ok) {
            throw new Error('there was an error')
        }

        let data = await response.json();
        let { joke } = data;
        result.textContent = joke

    } catch (error) {
        console.log('there was an error');
    }

}

randomJokes();