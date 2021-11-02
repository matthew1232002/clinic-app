import SignUp from './view/signUp.js'
import SignIn from './view/signIn.js'
import Restore from './view/restore.js'
import SentPassword from './view/passwordSent.js'

const routes = [
    { path: '/', component: SignUp },
    { path: '/sign-in', component: SignIn },
    { path: '/restore', component: Restore },
    { path: '/password-sent', component: SentPassword },
]

export default routes