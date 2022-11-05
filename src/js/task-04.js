let counterValue = 0;

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');



const onDecrementClick = () => {
    counterValue -= 1
    valueEl.textContent = counterValue;
};

const onIncrementClick = () => {
    counterValue += 1
    valueEl.textContent = counterValue;
};


decrementButton.addEventListener('click', onDecrementClick);
incrementButton.addEventListener('click', onIncrementClick);