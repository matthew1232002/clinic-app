const form = document.querySelector('.form');
const email = document.getElementById('email');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();

});

function checkInputs() {
    const emailValue = email.value.trim();

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    } else {
        deleteErrorClass(email);
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


