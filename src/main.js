import Vue from 'vue';
import App from './App.vue';
import Mixins from './mixins';
import BaseButton from './components/common/BaseButton';

Vue.component('base-button', BaseButton);
Vue.mixin(Mixins);

new Vue({
    el: '#app',
    render: h => h(App)
});
