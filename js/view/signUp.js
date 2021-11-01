const SignUp = {
    render: () => {
        return `
            <main class="wrapper" id="sign-up">
                <section class="page__background-image">
                </section>
                <aside class="page__sidebar">
                    <div class="sidebar">
                        <header class="form-title">
                            <span class="form-title__text">Sign Up</span>
                        </header>
                        <form class="form" action="#">
                            <div class="form__inputs">
                                <div class="form__input-wrapper form__input-wrapper-name">
                                    <input id="firstName" type="text" class="form__input form__input_name"
                                           placeholder="First Name">
                                        <p class="input-error"></p>
                                </div>
                                <div class="form__input-wrapper form__input-wrapper-name">
                                    <input id="lastName" type="text" class="form__input form__input_name"
                                           placeholder="Last Name">
                                        <p class="input-error"></p>
                                </div>
                                <div class="form__input-wrapper form__input-wrapper-email">
                                    <input id="email" type="email" class="form__input form__input_email" placeholder="Email">
                                        <p class="input-error"></p>
                                </div>
                                <div class="form__input-wrapper form__input-wrapper-password">
                                    <input id="password" type="password" class="form__input form__input_password"
                                           placeholder="Password">
                                        <div  class="eye" id="eye1"></div>
                                            <p class="input-error"></p>
                                </div>
                                <div class="form__input-wrapper form__input-wrapper-confirm form__input-wrapper_sign-up">
                                    <input id="password2" type="password" class="form__input form__input_confirm"
                                           placeholder="Confirm Password">
                                    <div class="eye" id="eye2" "></div>
                                    <p class="input-error"></p>
                                </div>
                            </div>
                            <button class="form__btn form__btn_register" type="submit" data-name="/" >Sign Up</button>
                        </form>
                        <footer class="form-footer">
                            <span class="form-footer__text">Already have an account?</span>
                            <a class="link link_footer" id="toSignIn" data-name="/sign-in">Sign in</a>
                        </footer>
                    </div>
                </aside>
            </main>
    `
    },
}

export default SignUp