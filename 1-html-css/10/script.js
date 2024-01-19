const joke = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', () => {
    getJoke()
})

getJoke()

async function getJoke() {
    
    let config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    const res = await fetch('https://icanhazdadjoke.com/', config)
    const data = await res.json()
    joke.innerHTML = data.joke

    /* // 2nd option
    fetch('https://icanhazdadjoke.com/', config)
        // .then(err => console.log(err))
        .then(res => res.json())
        .then(data => {
            joke.innerHTML = data.joke
        })
    */

}

