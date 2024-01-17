const base_url = `https://pokeapi.co/api/v2/pokemon/`

const container = document.getElementById('poke-container')

const count = 150
const colors = { 
    fire: '#FDDFDF', grass: '#DEFDE0', electric: '#FCF7DE', water: '#DEF3FD', ground: '#f4e7da', 
    rock: '#d5d5d4', fairy: '#fceaff', poison: '#98d7a5', bug: '#f8d5a3', dragon: '#97b3e6', 
    psychic: '#eaeda1', flying: '#F5F5F5', fighting: '#E6E0D4', normal: '#F5F5F5', 
}
const types = Object.keys(colors)

fetchPokemon()

async function fetchPokemon() {
    let pokemon = null
    for (let i = 1; i <= count; i++) {
        pokemon = await getPokemon(i)
        if (!!pokemon) createPokemonCard(pokemon)
    }
}

async function getPokemon(id) {
    const url = base_url + id
    const res = await fetch(url)
    const data = await res.json()
    // console.log(data)
    return data
}

function createPokemonCard (pokemon) {
    const elem = document.createElement('div')
    elem.classList.add('pokemon')
    
    const Name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    const id = `#${pokemon.id.toString().padStart(3, '0')}`
    const ts = pokemon.types.map(t => t.type.name) // TODO: CHECK - !!t & !!t.type ? t.type.name : null
    const type = ts.find(t => t.indexOf(t) > -1)
    const color = colors[type]

    elem.style.backgroundColor = color
    const html = `
    <div class="img-container">
        <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" alt="">
    </div>
    <div class="info">
        <span class="number">${id}</span>
        <h3 class="name">${Name}</h3>
        <small class="type">Type: <span>${type}</span></small>
    </div>
    `

    elem.innerHTML = html
    container.appendChild(elem)
}
