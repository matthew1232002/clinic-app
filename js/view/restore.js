const Restore = {
    render: () => {
        return `
            <main class="wrapper" id="restore">
                <section class="page__background-image">
                </section>
                <aside class="page__sidebar">
                    <div class="sidebar">
                        <header class="form-title form-title_with-link form-title_restore">
                            <a class="form-title__link" href="" data-name="/sign-in"></a>
                            <span class="form-title__text">Restore Password</span>
                            <p class="form-title__description">Please use your email address, and we’ll send you the link to reset your password</p>
                        </header>
                        <form class="form" action="#" >
                            <div class="form__inputs">
                                <div class="form__input-wrapper form__input-wrapper-email form__input-wrapper_restore">
                                    <input id="email" type="email" class="form__input form__input_email" placeholder="Email" >
                                    <p class="input-error"></p>
                                </div>
                            </div>
                            <button class="form__btn form__btn_restore" type="submit" data-name="/password-sent">Send Reset Link</button>
                        </form>
                    </div>
                </aside>
            </main>
    `
    },
}

export default Restore