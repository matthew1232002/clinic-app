const form = document.querySelector('.form');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();

});

function checkInputs() {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    } else {
        deleteErrorClass(email);
    }
    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else {
        deleteErrorClass(password);
    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const errorParagraph = formControl.querySelector('.input-error');
    formControl.classList.add('form__input-wrapper_error');
    errorParagraph.innerText = message;
}

function deleteErrorClass(input) {
    const formControl = input.parentElement;
    formControl.classList.remove('form__input-wrapper_error');
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

