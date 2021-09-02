const inputRef = document.querySelector('#validation-input')
const countRef = Number(inputRef.getAttribute('data-length'))

inputRef.addEventListener('blur', onInputBlur);

function onInputBlur() {
    inputRef.classList.add("valid", "invalid")
    inputRef.value.length === countRef ? inputRef.classList.remove('invalid') : inputRef.classList.remove('valid')
}