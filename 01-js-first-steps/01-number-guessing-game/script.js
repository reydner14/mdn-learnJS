let randomNumber = Math.floor(Math.random() * 100) +1;
const content = document.querySelector(".content")
const guesses = document.querySelector(".guesses")
const lastResult = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")

const guess = document.querySelector("#guess-number")
const btn = document.querySelector(".btn")

let guessCount = 1
let resetButton
guess.focus()

btn.addEventListener("click", checkGuess)

function checkGuess() {
  const userGuess = Number(guess.value);
  if (userGuess < 1 || userGuess > 100) {
      alert("insira um número entre 1 e 100!")
      guess.value = ``
      guess.focus()
  } else {
      if (guessCount === 1) {
      guesses.textContent = `Tentativas anteriores: `
      /*let reveal = document.createElement("span")
      reveal.classList.add("reveal")
      reveal.textContent = randomNumber
      content.appendChild(reveal)*/
    }
    guesses.textContent += `${userGuess}, `

    if (userGuess === randomNumber) {
      lastResult.textContent = `Parabéns! Você acertou.`/* `Congratulations! You got it right` */
        lastResult.style.backgroundColor = 'green'
        lastResult.style.color = 'gold'
        lowOrHi.textContent = ''
        setGameOver()
    } else if (guessCount === 10) {
        lastResult.textContent = '!!! FIM DE JOGO !!!'
        lowOrHi.textContent = ''
        setGameOver()
    } else {
        lastResult.textContent = `Errado!`/* 'Wrong!' */
        lastResult.style.backgroundColor = 'red'
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'O último chute foi muito baixo!'
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'O último chute foi muito alto!'
        }
    }
    guessCount++;
    guess.value = ""
    guess.focus()
    }
  
}
function setGameOver() {
    guess.setAttribute("disabled", "")
    btn.setAttribute("disabled", "")
    let resetButton = document.createElement("button")
    resetButton.textContent = "resetar" /*"reset"*/
    resetButton.classList.add("btn")
    resetButton.classList.add("reset")
    content.appendChild(resetButton)
    resetButton.addEventListener("click", reset)
}
function reset() {
    guessCount = 1
    guesses.textContent = ``
    lastResult.textContent = ``
    /*let reveal = document.querySelector(".reveal")
    reveal.parentElement.removeChild(reveal)*/
    let resetButton = document.querySelector(".reset")
    resetButton.parentNode.removeChild(resetButton)
    guess.removeAttribute("disabled")
    btn.removeAttribute("disabled")
    randomNumber = Math.floor(Math.random() * 100) +1;
    guess.value = ``
    guess.focus()
}