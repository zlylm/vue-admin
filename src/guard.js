import router from './router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

router.beforeEach((to,from,next)=>{
    // start progress bar
    NProgress.start()
    const isToken = sessionStorage.getItem('isToken')
    if (isToken) {
        if (to.path == '/login') {
            next({ path: '/' })
        } else {
            next()
        }
        NProgress.done()
    } else {
        if (to.path == '/login') {
            next()
        } else {
            next({path: '/login'})
        }
        NProgress.done()
    }
})

router.afterEach(()=>{
    NProgress.done()
})