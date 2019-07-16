import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import routeConfig from './router/index';
import Vuex from 'vuex';
import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';
// import VueI18n from 'vue-i18n';

/**
  * 引入i18n国际化
  */
import i18n from './i18n/';

Vue.config.productionTio = false; 
Vue.use(VueRouter);
Vue.use(Vuex);

Vue.use(iView);
// Vue.use(VueI18n);
// const i18n = new VueI18n({
//     locale:'zh-CN',
//     messages:{
//         'zh-CN': require('./i18n/config/zh'),
//         'en-US': require('./i18n/config/en')
//     }
// });



// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: routeConfig
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach(() => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});


const store = new Vuex.Store({
    state: {

    },
    getters: {

    },
    mutations: {

    },
    actions: {

    }
});


new Vue({
    el: '#app',
    i18n,
    router: router,
    store: store,
    render: h => h(App)
});