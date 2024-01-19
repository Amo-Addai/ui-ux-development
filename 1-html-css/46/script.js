const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java", b: "C", c: "Python", d: "JavaScript", correct: "d"
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets", 
        b: "Cascading Style Sheets", 
        c: "Cascading Simple Sheets", 
        d: "Cars SUVs Sailboats", 
        correct: "b"
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language", 
        b: "Hypertext Markdown Language", 
        c: "Hyperloop Machine Language", 
        d: "Helicopters Terminals Motorboats Lamborginis", 
        correct: "a"
    },
]

const quiz = document.getElementById('quiz')
const answers = document.querySelectorAll('.answer')
const question = document.getElementById('question')
const submit = document.getElementById('submit')

let text = {}, currentQuiz = 0, score = 0
for (let x of ['a', 'b', 'c', 'd']) text[x] = document.getElementById(x+'_text')

submit.addEventListener('click', () => {
    const answer = getSelected()
    // console.log(answer)
    if (!!answer) {
        if (answer === quizData[currentQuiz].correct) score++
        currentQuiz++
        if (currentQuiz < quizData.length) loadQuiz()
        else quiz.innerHTML = `
            <h2>You answered correctly at ${score}/${quizData.length} questions</h2>
            <button onclick="location.reload()">Reload</button>
        `
    }
})

loadQuiz()

function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    question.innerText = currentQuizData.question
    for (let x of ['a', 'b', 'c', 'd']) 
        text[x].innerText = currentQuizData[x]
}

function deselectAnswers() {
    answers.forEach(a => a.checked = false)
}

function getSelected() {
    let answer = null
    answers.forEach(a => {
        if (a.checked) answer = a.id
    })
    return answer
}