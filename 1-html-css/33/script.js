const add = document.getElementById('add')

const notes = JSON.parse(localStorage.getItem('notes'))

if (notes && notes.length > 0) {
    notes.forEach(note => addNewNote(note))
}

add.addEventListener('click', () => addNewNote())

function addNewNote(text = null) {
    const note = document.createElement('div')
    note.classList.add('note'); note.innerHTML = `
        <div class="tools">
            <button class="edit" title="Edit"><i class="fas fa-edit"></i></button>
            <button class="delete" title="Delete"><i class="fas fa-trash-alt"></i></button>
        </div>

        <div class="main${text ? '' : ' hidden'}"></div>
        <textarea class="${text ? 'hidden' : ''}" placeholder="Add text .."></textarea>
    ` // 

    const editBtn = note.querySelector('.edit')
    const deleteBtn = note.querySelector('.delete')
    const main = note.querySelector('.main')
    const textarea = note.querySelector('textarea')

    if (text && text.length > 0) {
        textarea.value = text
        main.innerHTML = text // market(text) // todo
    }

    textarea.addEventListener('input', e => {
        const { value } = e.target
        main.innerHTML = value // market(text) // todo
        updateData()
    })

    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden')
        textarea.classList.toggle('hidden')
    })
    
    deleteBtn.addEventListener('click', () => {
        note.remove()
        updateData()
    })

    document.body.appendChild(note)
}

function updateData() {
    const textareas = document.querySelectorAll('textarea')
    let notes = []
    textareas.forEach(t => notes.push(t.value))
    localStorage.setItem('notes', JSON.stringify(notes))
}
