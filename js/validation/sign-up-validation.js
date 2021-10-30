const form = document.querySelector('.form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();

});

function checkInputs() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (firstNameValue === '') {
        setErrorFor(firstName, 'First name cannot be blank');
    } else{
        deleteErrorClass(firstName);
    }

    if (lastNameValue === '') {
        setErrorFor(lastName, 'Last name cannot be blank');
    } else {
        deleteErrorClass(lastName);
    }

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

    if (password2Value === '') {
        setErrorFor(password2, 'Password cannot be blank');
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'Passwords does not match');
    } else {
        deleteErrorClass(password2);
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

