import Vue from 'vue';
import VueRouter from 'vue-router';
import about from './pages/about/about.vue';
import login from './pages/login/login.vue';
import header from './components/header/header.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', 
      components: {
        header: header,
        default: about,
        
       },
    },
    
    { path: '/login', component: login },

];

export default new VueRouter({ routes});