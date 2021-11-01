const SentPassword = {
    render: () => {
        return `
            <main class="wrapper">
                <section class="page__background-image">
                </section>
                <aside class="page__sidebar">
                    <div class="sidebar">
                        <header class="form-title form-title_with-link form-title_restore">
                            <a class="form-title__link" data-name="/sign-in"></a>
                            <span class="form-title__text">Restore Password</span>
                            <p class="form-title__description form-title__description_password-changed">An email has been sent
                                to <span class="link link_email-example">example@exam.com.</span> Check your inbox, and click
                                the reset link provided.</p>
                        </header>
                    </div>
                </aside>
            </main>
    `
    },
}

export default SentPassword

