const form = document.querySelector('.login-form')

form.addEventListener('submit', onSubmitClick);

function onSubmitClick (event) {
    event.preventDefault();
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;
    if (!event.currentTarget.password.value) {
        alert('Все поля должны быть заполнены...');
        event.currentTarget.reset();
        return
    }
    const data = {
        email,
        password
    }

    event.currentTarget.reset();
    console.log(data);
    
}

