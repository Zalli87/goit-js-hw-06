const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

const onInput = (event) => {
    if (event.currentTarget.value) {
        outputEl.textContent = event.currentTarget.value.trim();
    } else { outputEl.textContent = 'Anonymous' };
};

inputEl.addEventListener('input', onInput);

