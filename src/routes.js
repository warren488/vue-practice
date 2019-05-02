import Quotes from './views/Quotes'
import Passing from './views/Passing'
import App from './views/App'

export const routes = [
    { path: '/quotes', component: Quotes },
    { path: '/passing', component: Passing },
    { path: '', component: Quotes },
    { path: '/home', component: Quotes },
    { path: '/app', component: App }
]