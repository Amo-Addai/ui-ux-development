const apiKey = 'APIKEY' // import key from .env
const baseUrl = 'https://api.themoviedb.org/3/'
const apiUrl = baseUrl + `discover/movie?sort_by=popularity.desc&apiKey=${apiKey}&page=1`
const img_path = 'link_to_image'
const searchUrl = baseUrl + `search/movie?apiKey=${apiKey}&query="`

const main = document.querySelector('#main')
const form = document.getElementById('form')
const search = document.getElementById('search')

form.addEventListener('submit', e => {
    e.preventDefault()

    const searchTerm = search.value
    if (searchTerm && searchTerm !== '') {
        getMovies(searchUrl + searchTerm)
        search.value = ''
    } else window.location.reload()
})

getMovies(apiUrl)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()
    // console.log(data.results)
    // TODO: uncomment next line only after you handle api requests to themoviedb.org (get your api key)
    // showMovies(data.results)
}

function showMovies(movies) {
    main.innerHTML = ''
    movies.forEach(m => {
        const { title, poster_path, vote_average, overview } = movie
        const movie = document.createElement('div')
        movie.classList.add('movie')
        movie.innerHTML = `
            <img src="${img_path + poster_path}" alt="">
            <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
            <h3>Overview</h3>
            ${overview}
            </div>
        `
        main.appendChild(movie)
    })
}

function getClassByRate(vote) {
    if (vote >= 8) return 'green'
    else if (vote >= 5) return 'orange'
    else return 'red'
}