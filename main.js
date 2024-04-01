import Vue from 'vue';
import VueRouter from 'vue-router';
import UploadComponent from './Upload.vue';

Vue.use(VueRouter);

const router = new VueRouter({
routes: [
{
path: '/',
name: 'Upload',
component: UploadComponent
}
]
});

new Vue({
el: '#app',
router
});
