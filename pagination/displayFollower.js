const followersContainer = document.querySelector('.followers-container');

function displayFollower(followers) {
    console.log(followers);

    const newFollowers = followers.map((person) => {

        let { avatar_url, html_url, login } = person;

        return `<div class="card">
                    <img src="${avatar_url}" alt="${login}" />
                    <h3>${login}</h3>
                    <a href="${html_url}" target="_blank" class="btn">View Profile</a>
                </div>`
    }).join('')

    followersContainer.innerHTML = newFollowers;
}



export default displayFollower;