
const URL = `https://api.github.com/users/john-smilga/followers?per_page=100`;

async function fetchFollower() {

    try {
        const response = await fetch(URL);
        const data = response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}



export default fetchFollower;