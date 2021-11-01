function setError(input, message) {
    const formControl = input.parentElement;
    const errorParagraph = formControl.querySelector('.input-error');
    formControl.classList.add('form__input-wrapper_error');
    errorParagraph.innerHTML = message;
}

function deleteErrorClass(input) {
    const formControl = input.parentElement;
    formControl.classList.remove('form__input-wrapper_error');
}

const isValid = () => {
    let state = true;

    const firstName = document.getElementById('firstName')
    const lastName = document.getElementById('lastName')
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    const password2 = document.getElementById('password2')
    const inputs = [firstName, lastName, email, password, password2];
    const inputsArray = inputs.filter(input => input !== null);

    for (let input of inputsArray) {
        if (input.value.trim() === '') {
            setError(input, 'Field cannot be blank')
            state = false;
        } else {
            deleteErrorClass(input)
        }
    }

    if (inputsArray.includes(password) && inputsArray.includes(password2)) {
        if (password.value.trim() !== password2.value.trim()) {
            setError(password2, 'Passwords does not match')
        } else if (password.value.trim() === password2.value.trim() && password2.value.trim() === '') {
            setError(password2, 'Field cannot be blank')
        } else {
            deleteErrorClass(password2)
        }
    }

    return state;
}

export default isValid