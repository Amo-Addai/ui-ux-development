btns = document.querySelectorAll('.faq-toggle')
btns.forEach((btn, i) => {
    const update = _ => {
        btns.forEach((btn, i2) => {
            // console.log(i)
            if (i != i2) btn.parentNode.classList.remove('active')
        })
    }
    btn.addEventListener('click', _ => {
        btn.parentNode.classList.toggle('active')
        // console.log(i)
        update()
    })
})