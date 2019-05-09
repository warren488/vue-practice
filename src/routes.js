// lazy loading
const Home = resolve => {
    require.ensure(['./views/Home.vue'], () => {
        resolve(require('./views/Home.vue'))
    })
}

const App = resolve => {
    require.ensure(['./views/App.vue'], () => {
        resolve(require('./views/App.vue'))
    })
}

const Passing = resolve => {
    require.ensure(['./views/Passing.vue'], () => {
        resolve(require('./views/Passing.vue'))
    })
}

const Quotes = resolve => {
    require.ensure(['./views/Quotes.vue'], () => {
        resolve(require('./views/Quotes.vue'))
    })
}

const Special = resolve => {
    require.ensure(['./views/Special.vue'], () => {
        resolve(require('./views/Special.vue'))
    })
}
export const routes = [
    { path: '/quotes', component: Quotes },
    {
        path: '/special/:stuff', component: Special, props: x => { console.log(x); return { stuff: '' } }, beforeEnter(to, from, next) {
            if (to.query.hide) {
                let hidden = JSON.parse(decodeURIComponent(to.query.hide))
                next({path: to.query.path, props: hidden })
            }
            next()
        }
    },
    { path: '/passing', component: Passing },
    { path: '', component: Home },
    { path: '/home', component: Home },
    { path: '/app', component: App },
    { path: '*', redirect: '/home' }
]