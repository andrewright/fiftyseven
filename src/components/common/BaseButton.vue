<template>
    <button class="button">{{myTitle}}</button>
</template>

<style lang="scss" scoped>
    .button {
        background: deeppink;
    }
</style>
<script>
    export default {
        props: [
            'myTitle',
        ],
    }
</script>
