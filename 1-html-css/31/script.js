const result = document.getElementById('result')
const clipboard = document.getElementById('clipboard')
const length = document.getElementById('length')
const uppercase = document.getElementById('uppercase')
const lowercase = document.getElementById('lowercase')
const numbers = document.getElementById('numbers')
const symbols = document.getElementById('symbols')
const generate = document.getElementById('generate')

const randomFunc = {
  lower: getRandomLower, upper: getRandomUpper,
  number: getRandomNumber, symbol: getRandomSymbol
}

generate.addEventListener('click', () => {
  const l = +length.value
  const hasLower = lowercase.checked
  const hasUpper = uppercase.checked
  const hasNumber = numbers.checked
  const hasSymbol = symbols.checked
  result.innerText = generatePassword(l, hasLower, hasUpper, hasNumber, hasSymbol)
})

clipboard.addEventListener('click', () => {
    const password = result.innerText
    if (!password) return
    const textarea = document.createElement('textarea')
    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Password copied to clipboard')
})

function generatePassword (l, lower, upper, number, symbol) {
  let password = ''
  // todo: boolean addition (adds up only true bool vars)
  const trueCount = lower + upper + number + symbol
  // console.log(trueCount)
  let arr = [{lower}, {upper}, {number}, {symbol}].filter(i => Object.values(i)[0])
  // let config = { lower, upper, number, symbol } // todo: or loop through config to filter arr
  // console.log(arr)
  if (trueCount === 0) return ''
  for (let i = 0; i < l; i += trueCount) {
    arr.forEach(i => {
      const funcName = Object.keys(i)[0]
      password += randomFunc[funcName]()
    })
  }
  const finalPassword = password.slice(0, l)
  return finalPassword
}

function getRandomUpper () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomLower () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomNumber () {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol () {
  const symbols = '!@#$%^&*()=[]{},.<>/' // -_+\|;:'"?
  return symbols[Math.floor(Math.random() * symbols.length)]
// return String.fromCharCode(Math.floor(Math.random() * 26) + _)
}
