const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

empties.forEach(e => {
    e.addEventListener('dragover', dragOver)
    e.addEventListener('dragenter', dragEnter)
    e.addEventListener('dragleave', dragLeave)
    e.addEventListener('drop', dragDrop)
})

// event listeners for .fill div

function dragStart() {
    this.className += ' hold'
    // todo: find out if this can be used as a nodeList in this case
    // this.classList.add('hold') 
    // todo: this next line execs too fast for the ' hold' class effect to take place on every dragstart
    // this.className = 'invisible // todo: setTimeout delay to even 0ms solves this issue
    setTimeout(() => this.className = 'invisible', 0)
}
function dragEnd() {
    this.className = 'fill'
}

// event listeners for .empty divs

function dragOver(e) {
    // todo: dragover event resets the current drag operation to "none", by default
    e.preventDefault() // so prevent the default action, or else the new empty div hovered on will cancel the current drag
    
}
function dragEnter(e) {
    // todo: dragenter event rejects the immediate user selection as potential target element, by default
    e.preventDefault() // so prevent the default action, or else the new empty div dropped on will reject the current drop
    this.className += ' hovered'
}
function dragLeave() {
    this.className = ' empty'
    // this.className -= ' hovered' // todo: try this wrong option
}
function dragDrop() {
    this.className = 'empty'
    this.append(fill)
}