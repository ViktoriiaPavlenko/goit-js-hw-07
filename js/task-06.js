const inputRef = document.querySelector('#validation-input')
const countRef = Number(inputRef.getAttribute('data-length'))

inputRef.addEventListener('blur', onInputBlur);

function onInputBlur() {
    if (inputRef.value.length === countRef) {
        inputRef.classList.remove("invalid")
        inputRef.classList.add("valid")
    } else if (inputRef.value.length !== countRef) {
        inputRef.classList.remove("valid")
        inputRef.classList.add("invalid")
    } 
}