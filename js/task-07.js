const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

textEl.style.fontSize = '42px';

const onInputChenge = event => textEl.style.fontSize = `${event.currentTarget.value}px`;

inputEl.addEventListener('input', onInputChenge);