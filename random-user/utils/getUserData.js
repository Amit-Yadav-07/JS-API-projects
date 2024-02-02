
let URL = `https://randomuser.me/api/`;

async function getUser() {

    let response = await fetch(URL)

    let data = await response.json();

    // destructed data 

    let person = data.results[0];


    let { phone, email } = person;
    let { large: img } = person.picture;

    let { password } = person.login
    let { age: age } = person.dob;
    let { first, last } = person.name
    let { name, number } = person.location.street



    return {
        phone, email, password, img, age, first, last, street: `${name} ${number}`
    }

}


export default getUser;