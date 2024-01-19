const form = document.getElementById('form')
const input = document.getElementById('input')
const todoList = document.getElementById('todos')

form.addEventListener('submit', e => {
    e.preventDefault()
    let todo = {
        text: input.value,
        completed: false
    }
    addTodo(todo)
})

getTodos()

function addTodo(todo = null) {
    let text = input.value
    if (!!todo) text = todo.text
    if (!!text && text.length > 0) {
        const elem = document.createElement('li')
        // console.log(todo)
        if (!!todo && !!todo?.completed === true)
            elem.classList.add('completed')
        elem.innerText = text
        elem.addEventListener('click', () => {
            elem.classList.toggle('completed'); saveTodos()
        })
        elem.addEventListener('contextmenu', (e) => {
            e.preventDefault(); elem.remove(); saveTodos()
        })
        todoList.appendChild(elem)
        input.value = ''
    }
    saveTodos()
}

function getTodos() {
    const todos = JSON.parse(localStorage.getItem('todos'))
    if (!!todos && todos?.length > 0) todos.forEach(t => addTodo(t))
}

function saveTodos() {
    const lis = document.querySelectorAll('#todos li')
    let todos = []
    lis.forEach(li => todos.push({ text: li.innerText, completed: li.classList.contains('completed') }))
    localStorage.setItem('todos', JSON.stringify(todos))
}
