import isValid from "./validation/validation.js";

const Handler = (router, routes) => (e) => {
    const handleChangeUrl = (e) => {
        e.preventDefault()
        history.pushState({}, null, `/#${e.target.dataset.name}`)
        router(routes)
    }

    const handleSubmitSignUp = (e) => {
        e.preventDefault()
        if (isValid()) {
            history.pushState({}, null, `/#${e.target.dataset.name}`)
            router(routes)
        }
    }

    const handleSubmitSignIn = (e) => {
        e.preventDefault()
        if (isValid()) {
            history.pushState({}, null, `/#${e.target.dataset.name}`)
            router(routes)
        }
    }

    const handleTogglePassword = (e) => {
        if (e.target.previousElementSibling.type === 'password') {
            e.target.previousElementSibling.type = 'text'
            e.target.classList.add('eye_visible')
        }else if (e.target.previousElementSibling.type === 'text') {
            e.target.previousElementSibling.type = 'password'
            e.target.classList.remove('eye_visible')
        }
    }

    if (
        e.target.nodeName === 'A' ||
        e.target.classList.contains('form__btn_restore')
    ) {
        handleChangeUrl(e)
    }

    if (e.target.classList.contains('form__btn_register')) {
        handleSubmitSignUp(e)
    }

    if (e.target.classList.contains('form__btn_login')) {
        handleSubmitSignIn(e)
    }

    if (e.target.classList.contains('eye')) {
        handleTogglePassword(e)
    }
}

export default Handler