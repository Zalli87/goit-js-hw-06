const inputEl = document.querySelector('#validation-input');

const onBlur = (event) => {
    if (event.currentTarget.value.length > inputEl.dataset.length) {
        inputEl.classList.add('invalid');
    } else {
        inputEl.classList.add('valid');
    }
}

inputEl.addEventListener('blur', onBlur);