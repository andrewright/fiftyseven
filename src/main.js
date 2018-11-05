import Vue from 'vue';
import App from './App.vue';
import Mixins from './mixins';

Vue.extend({
    mixins: [Mixins]
});

new Vue({
    el: '#app',
    render: h => h(App)
});
