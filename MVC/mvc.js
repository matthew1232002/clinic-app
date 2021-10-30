class Model {
    constructor() {
        this.values = JSON.parse(localStorage.getItem('values')) || []
    }

    _commit(values) {
        localStorage.setItem('values', JSON.stringify(values));
    }

    addValues(emailValue) {
        let values = {
            id: this.values.length > 0 ? this.values[this.values.length - 1].id + 1 : 1,
        };
        for (let input of emailValue) {
            if (input.placeholder === 'First Name') {
                values.firstName = input.value;
            }
            if (input.placeholder === 'Last Name') {
                values.lastName = input.value;
            }
            if (input.placeholder === 'Email') {
                values.email = input.value;
            }
            if (input.placeholder === 'Password') {
                values.password = input.value;
            }
            if (input.placeholder === 'Confirm Password') {
                values.password2 = input.value;
            }
        }
        const value = {
            id: this.values.length > 0 ? this.values[this.values.length - 1].id + 1 : 1,
            value: values,
        }
        this._commit(value)
    }
}

class View {
    constructor() {
        this.rootDiv = document.getElementById('root');
        this.signUp = '';
        this.signIn = '';
        this.restore = '';
        console.log('1')
    }

    async loadPage(page) {
        const response = await fetch(page);
        console.log('2')
        return await response.text();
    };

    async loadAllPages() {
        this.signUp = await this.loadPage('../public/sign-up.html');
        this.signIn = await this.loadPage('../public/sign-in.html');
        this.restore = await this.loadPage('../public/restore-password.html');
        this.doctorPage = await this.loadPage('../public/doctor-patients-page.html');

        if (this.rootDiv.querySelector('#root') === null) {
            this.rootDiv.innerHTML = this.signUp;
            console.log('3')
        } else {

        }
    };

    main = async () => {
        await this.loadAllPages();
        console.log('4')
        this.routes = {
            '/': this.signUp,
            '/sign-in': this.signIn,
            '/restore': this.restore,
            '/doctor-page': this.doctorPage
        };

        this.form = this.getElement('.form');
        this.firstName = this.getElement('#firstName');
        this.lastName = this.getElement('#lastName');
        this.email = this.getElement('#email');
        this.password = this.getElement('#password');
        this.password2 = this.getElement('#password2');
        this.toSignIn = this.getElement('#toSignIn');
    };

    onNavClick = (pathname) => {
        window.history.pushState({}, pathname, window.location.origin + pathname);
        this.rootDiv.innerHTML = this.routes[pathname];

        this.form = this.getElement('.form');
        this.firstName = this.getElement('#firstName');
        this.lastName = this.getElement('#lastName');
        this.email = this.getElement('#email');
        this.password = this.getElement('#password');
        this.password2 = this.getElement('#password2');
        this.toSignIn = this.getElement('#toSignIn');
        this.toSignUp = this.getElement('#toSignUp');
        console.log(this.form, this.toSignUp)
        this.toSignUp.addEventListener('click', this.redirectToSignUp())
        return this.rootDiv.innerHTML
    };


    getElement(selector) {
        return this.rootDiv.querySelector(selector)
    }

    _resetInputs(inputs) {
        for (let input of inputs) {
            input.value = ''
        }
    }

    setError(input, message) {
        const formControl = input.parentElement;
        const errorParagraph = formControl.querySelector('.input-error');
        formControl.classList.add('form__input-wrapper_error');
        errorParagraph.innerHTML = message;
    }

    deleteErrorClass(input) {
        const formControl = input.parentElement;
        formControl.classList.remove('form__input-wrapper_error');
    }

    isValid(handler, first, last, email, password, password2) {
        // console.log('6  ')
        let state = true;
        const inputs = [first, last, email, password, password2];
        const inputsArray = inputs.filter(input => input !== null);
        for (let input of inputsArray) {
            if (input.value.trim() === '') {
                this.setError(input, 'Field cannot be blank')
                state = false;
            } else {
                this.deleteErrorClass(input)
            }
        }
        if (inputsArray.includes(password) && inputsArray.includes(password2)) {
            if (password.value.trim() !== password2.value.trim()) {
                this.setError(password2, 'Passwords does not match')
            } else if (password.value.trim() === password2.value.trim() && password2.value.trim() === '') {
                this.setError(password2, 'Field cannot be blank')
            } else {
                this.deleteErrorClass(password2)
            }
        }
        if (state) {
            handler(inputsArray)
            this.onNavClick('/doctor-page')
            this._resetInputs(inputsArray)
        }
    }

    async bindAddValues(handler) {
        await this.main()
        this.toSignIn.addEventListener('click', () => {
            this.onNavClick('/sign-in')
        })
        // this.toSignUp.addEventListener('click', () => {
        //     this.onNavClick('/')
        // })
        if (this.form) {
            console.log('5')
            this.form.addEventListener('submit', event => {
                event.preventDefault()
                this.isValid(handler, this.firstName, this.lastName, this.email, this.password, this.password2)
            })
        }
    }

    redirectToSignUp() {
        console.log('asd', this.toSignUp)
        this.toSignUp.addEventListener('click', () => {
            this.onNavClick('/')
        })
    }


}

class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view

        this.handleAddValues = (emailValue) => {
            this.model.addValues(emailValue)
        }

        this.view.bindAddValues(this.handleAddValues)
    }

}

const app = new Controller(new Model(), new View())