import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../app/views/Home.vue';
import SomeView from '../app/views/SomeView.vue';

Vue.use(VueRouter);

function checkLogedIn(to, from, next) {
    const isAuthenticated = localStorage.getItem('userToken');

    let route = { title: 'home' };

    if (isAuthenticated && to.title === 'someView') {
        route.title = 'someView';
    }

    return next(route);
}

function load(component) {
    // '@' is aliased to src/,
    // We will use lady loading when the app needs it
    // for now is not worthy to add code splitting
    return () => import(`../app/views/${component}.vue`);
}

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        { path: '/', title: 'home', component: Home },
        {
            path: '/some-view',
            title: 'someView',
            component: SomeView
        },
        { path: '*', component: load('Error404') }
    ]
    // scrollBehavior(to, from, savedPosition) {
    //     return { x: 0, y: 0 };
    // }
});

router.beforeEach(checkLogedIn);
export default router;
