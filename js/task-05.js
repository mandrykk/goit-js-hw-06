const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');



inputEl.addEventListener('input', (event) => {
    if (inputEl.value === "") {
        outputEl.textContent = "Anonimus"
    } else {
         outputEl.textContent = event.currentTarget.value;
    }
})
