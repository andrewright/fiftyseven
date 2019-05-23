import Vue from 'vue';
import router from './router';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import Mixins from './mixins';
import BaseButton from './components/common/BaseButton';

Vue.use(Vuelidate);
Vue.mixin(Mixins);
Vue.component('base-button', BaseButton);

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
