const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText.split('').map((l, i) => {
        return `<span style="transition-delay: ${i * 70}ms">${l}</span>`
    }).join('')
    /* TODO: Or
    let text = label.innerText
    label.innerHTML = ''
    for (let i = 0; i < text.length; i++) {
        let l = text[i]
        label.innerHTML += `<span style="transition-delay: ${i * 70}ms">${l}</span>`
    }
    */
})
