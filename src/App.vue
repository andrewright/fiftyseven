<template>
    <div id="app">
        <TheHeader/>
        <img src="./assets/logo.png">
        <BaseButton title='New Button' :action='getUserInfo' />
        <router-link :to="{name: 'about'}">About</router-link>
        {{name}}
        info: {{info}}

        <div v-if="this.post">{{post}}</div>
        <h1>{{ msg }}</h1>
        <div>
            <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
                <label class="form__label">Name</label>
                <input class="form__input" v-model.trim="$v.name.$model"/>
            </div>
            <div class="error" v-if="!$v.name.required">Field is required</div>
            <div class="error" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>
            <div class="form-group" :class="{ 'form-group--error': $v.age.$error }">
                <label class="form__label">Age</label>
                <input class="form__input" v-model.trim.lazy="$v.age.$model"/>
            </div>
            <div class="error" v-if="!$v.age.between">Must be between {{$v.age.$params.between.min}} and {{$v.age.$params.between.max}}</div><span tabindex="0">Blur to see changes</span>
        </div>

        <post-example
            v-for="post in getContent"
            :key="post.id"
            :title="post.title"
            :id="post.id"
        />
        <router-view/>
        <TheFooter/>
    </div>
</template>

<script>
import TheHeader from './components/TheHeader';
import TheFooter from './components/TheFooter';
import PostExample from './components/PostsExample';
import BaseButton from './components/common/BaseButton';
import { required, minLength, between } from 'vuelidate/lib/validators'
import axios from 'axios';


export default {
    name: 'app',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            posts: [],
            name: 'Andrew',
            age: null,
            info: null,
        };
    },
    validations: {
        name: {
            required,
            minLength: minLength(4)
        },
        age: {
            between: between(20, 30)
        }
    },
    components: {
        TheHeader,
        TheFooter,
        BaseButton,
        'post-example': PostExample,
    },
    methods: {
        someAction: function (data) {
            console.log('Some to console', data);
        },
        getUserInfo: function () {
            axios
            .get('https://ipinfo.io/json?15684db58401a7')
            .then((response) => {
                this.info = response;
                console.log('GetIpInfo.vue:20', this.info);
            });
        }
    },
    computed: {
        getContent() {
            // Fetch our array of posts from an API
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                return response.json();
            })
            .then(function (responseData) {
                console.log(responseData);
            });
        }
    },
};
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    input {
        border: 1px solid silver;
        border-radius: 4px;
        background: white;
        padding: 5px 10px;
    }

    .dirty {
        border-color: #5A5;
        background: #EFE;
    }

    .dirty:focus {
        outline-color: #8E8;
    }

    .error {
        border-color: red;
        background: #FDD;
    }

    .error:focus {
        outline-color: #F99;
    }


    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
