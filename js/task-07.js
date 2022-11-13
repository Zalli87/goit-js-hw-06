const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');


const onInputChenge = event => textEl.style.fontSize = `${event.currentTarget.value}px`;

inputEl.addEventListener('input', onInputChenge);