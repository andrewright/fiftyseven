<template>
    <div id="app">
        <TheHeader/>
        <img src="./assets/logo.png">
        <base-button myTitle="ButtonTitle" title="MyButton" class="myClass"/>

        <div v-if="this.post">{{post}}</div>
        <h1>{{ msg }}</h1>
        <h2>Essential Links</h2>
        <ul>
            <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
            <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
            <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
            <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
        </ul>
        <h2>Ecosystem</h2>
        <ul>
            <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
            <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
            <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
            <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
        </ul>

        <post-example
            v-for="post in posts"
            v-bind:key="post.id"
            v-bind:title="post.title"
        ></post-example>
        <TheFooter/>
    </div>
</template>

<script>
import TheHeader from './components/TheHeader';
import TheFooter from './components/TheFooter';
import PostExample from './components/PostsExample';

export default {
    name: 'app',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            posts: []
        };
    },
    components: {
        TheHeader,
        TheFooter,
        'post-example': PostExample,
    },
    created: function () {
        // Alias the component instance as `vm`, so that we
        // can access it inside the promise function
        let vm = this;
        // Fetch our array of posts from an API
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
            return response.json();
        })
        .then(function (responseData) {
            vm.posts = responseData;
        });
    }
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
