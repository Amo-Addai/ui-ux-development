const form = document.getElementById('form')

form.addEventListener('submit', e => {
    const formData = new FormData(form)
    e.preventDefault()
    let obj = {}
    formData.forEach((v, k) => {
        obj[k] = v
    })
})

let json = JSON.stringify(object)

fetch(
    "https://web3forms.com/submit",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        Accept: "application/json",
        body: json
    },
    async (res) => {
        let json = await res.json()
        if (res.status === 200)
            console.log('success')
        else console.log(res)
        return json
    }
)