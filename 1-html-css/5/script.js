const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0, int = setInterval(blurring, 30) // 30 milliseconds (not seconds)

function blurring() {
    load++
    if (load > 99) clearInterval(int) // stop when load == 100%
    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    // loadText's opacity is going from visible to invisible, so out_min = 1 & out_max = 0

    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
    // bg's blur is going from a bit blurry to clear, so out_min = 30px & out_max = 0px

    console.log(load)
}

function scale(num, in_min, in_max, out_min, out_max) {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}