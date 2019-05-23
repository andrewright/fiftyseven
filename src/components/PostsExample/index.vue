<template>
    <div>
        <a :href="'https://jsonplaceholder.typicode.com/posts/' + id" target="_blank">{{ title }} {{id}}</a>
    </div>
</template>

<style lang="scss" scoped>
    .button {
        background: deeppink;
    }
</style>
<script>
export default {
    props: ['title', 'key', 'id'],
};
</script>
