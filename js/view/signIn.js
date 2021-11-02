const SignIn = {
    render: () => {
        return `
            <main class="wrapper" id="sign-in">
              <section class="page__background-image">
              </section>
              <aside class="page__sidebar">
                <div class="sidebar">
                  <header class="form-title form-title_sing-in">
                    <span class="form-title__text">Sign In</span>
                  </header>
                  <form class="form" action="" >
                    <div class="form__inputs">
                      <div class="form__input-wrapper form__input-wrapper-email">
                        <input id="email" type="email" class="form__input form__input_email" placeholder="Email" >
                        <p class="input-error"></p>
                      </div>
                      <div class="form__input-wrapper form__input-wrapper-password form__input-wrapper_sign-in">
                        <input id="password" type="password" class="form__input form__input_password" placeholder="Password" >
                        <div class="eye"></div>
                        <p class="input-error"></p>
                      </div>
                    </div>
                    <button class="form__btn form__btn_login" type="submit" data-name="/restore">Sign In</button>
                    <a class="link link_forgot"  data-name="/restore">Forgot Password?</a>
                  </form>
                  <footer class="form-footer">
                    <span class="form-footer__text">Don’t have an account?</span>
                    <a  class="link link_footer" id="toSignUp" data-name="/">Sign up</a>
                  </footer>
                </div>
              </aside>
            </main>
    `
    },
}

export default SignIn