const results = document.getElementById('results')
const filter = document.getElementById('filter')

const list = []

filter.addEventListener('input', e => filterData(e.target.value))

getData()

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')
    const data = await res.json()
    // console.log(data)
    results.innerHTML = ''
    if (!!data && !!data?.results) {
        data.results.forEach(user => {
            const li = document.createElement('li')
            li.innerHTML = `
                <img src="${user.picture.large}" alt="${user.name.first}" />
                <div class="user-info">
                    <h4>${user.name.first} ${user.name.last}</h4><p>${user.location.city}, ${user.location.country}</p>
                </div>
            `
            list.push(li)
            results.append(li)
        })
    }
}

function filterData(search) {
    // console.log(search)
    list.forEach(i => { // todo: or, try i.innerText instead
        if (i.innerHTML.toLowerCase().includes(search.toLowerCase()))
            i.classList.remove('hide')
        else i.classList.add('hide')
    })
}
