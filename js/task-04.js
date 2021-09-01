const valueRef = document.querySelector('#value')
const decrementBtn = document.querySelector('[data-action="decrement"]')
const incrementBtn = document.querySelector('[data-action="increment"]')

let counterValue = valueRef.textContent
decrementBtn.addEventListener('click', decrement)
incrementBtn.addEventListener('click', increment)

function increment() {
    counterValue = Number(counterValue) + 1
    valueRef.textContent = counterValue
}

function decrement() {
    counterValue -= 1
    valueRef.textContent = counterValue
}