const base_url = 'https://api.github.com/'
const api_url = base_url + 'users/'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')
const repo = document.getElementById('repos')

form.addEventListener('submit', e => {
    e.preventDefault()
    const username = search.value // e.target.value
    if (username) {
        getUser(username)
    }
})

function createUserCard(user) {
    let card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = `
        <div>
            <img src="${user.avatar_url}" alt="${user.name}" class="avatar" />
        </div>
        <div class="user-info">
            <h2>${user.name}</h2>
            <p>${user.bio}</p>
            <ul>
                <li>${user.followers} <strong>Followers</strong></li>
                <li>${user.following} <strong>Following</strong></li>
                <li>${user.public_repos} <strong>Repos</strong></li>
            </ul>

            <div id="repos">
                // <a href="#" class="repo">Repo 1</a>
                // <a href="#" class="repo">Repo 2</a>
                // <a href="#" class="repo">Repo 3</a>
            </div>
        </div>
    `
    main.appendChild(card)
}

function createErrorCard(message) {
    let card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = `<h1>${message}</h1>`
    main.appendChild(card)
}

function addReposToCard(repos){
    repos.forEach(r => {
        const link = document.createElement('a')
        link.classList.add('repo')
        link.href = r.html_url
        link.target = '_blank'
        link.innerText = r.name
        repo.appendChild(link)
    })
}

async function getUser(username) {
    try {
        console.log(username)
        let { data } = await axios.get(api_url + username)
        // let data = axios.get(api_url + username)
        //     .then(res => res.data)
        //     .catch(err => console.log(err))
        console.log(data)
        let user = null
        if (!!data) user = data // todo: add validation
        if (!!user) {
            createUserCard(user)
            getRepos(username)
        } else createErrorCard('User not found')
    } catch (e) {
        console.log(e)
        if (e.response.status == 404) createErrorCard('User not found')
    }
}

async function getRepos(username) {
    try {
        let { data } = await axios.get(api_url + username + '/repos?sort=created')
        // let data = axios.get(api_url + username + '/repos?sort=created')
        //     .then(res => res.data)
        //     .catch(err => console.log(err))
        let repos = null
        if (!!data) repos = data.length > 10 ? data.slice(0, 10) : data // todo: add validation
        if (!!repos) addReposToCard(repos)
        else createErrorCard('Problem fetching repos')
    } catch (e) {
        console.log(e)
        if (e.response.status == 404) createErrorCard('Problem fetching repos')
    }
}
