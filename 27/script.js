const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const msgs = ['Message 1', 'Message 2', 'Message 3', 'Message 4']
const types = ['info', 'success', 'error']

button.addEventListener('click', () => createNotification()) // 'Sample Message', 'alert'

function createNotification (msg = null, type = null) {
    const noti = document.createElement('div')
    noti.classList.add('toast')
    noti.classList.add(type ? type : getRandomType())
    noti.innerText = msg ? msg : getRandomMsg()
    toasts.appendChild(noti)

    setTimeout(() => noti.remove(), 3000)
}

function getRandomMsg() {
    return msgs[Math.floor(Math.random() * msgs.length)]
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)]
}
