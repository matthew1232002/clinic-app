class Model {
    constructor() {
        this.emails = []
    }

    addEmail(emailValue) {
        const email = {
            id: this.emails.length > 0 ? this.emails[this.emails.length - 1].id + 1 : 1,
            value: emailValue,
        }
        this.emails.push(email)
    }
}

class View {
    constructor() {
        this.form = this.getElement('.form');
        this.email = this.getElement('#email');
        this.error = this.getElement('.input-error');
    }

    getElement(selector) {
        return document.querySelector(selector)
    }

    get _emailValue() {
        return this.email.value.trim();
    }

    _resetInput() {
        this.email.value = ''
    }

    setError(input, message) {
        const formControl = input.parentElement;
        formControl.classList.add('form__input-wrapper_error');
        this.error.innerHTML = message;
    }

    deleteErrorClass(input) {
        const formControl = input.parentElement;
        formControl.classList.remove('form__input-wrapper_error');
    }

    bindAddEmail(handler) {
        this.form.addEventListener('submit', event => {
            event.preventDefault()

            if (this._emailValue === '') {
                this.setError(this.email, 'Email cannot be blank')
            }

            if (this._emailValue) {
                this.deleteErrorClass(this.email)
                handler(this._emailValue)
                this._resetInput()
            }
        })
    }
}

class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view

        this.view.bindAddEmail(this.handleAddEmail)
    }

    handleAddEmail = (emailValue) => {
        this.model.addEmail(emailValue)
    }

}

const app = new Controller(new Model(), new View())

// app.model.addEmail('matveyka1971@gmail.com')
// console.log(window.onload)
// console.log(app.view.getElement('.form__btn'))