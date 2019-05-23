<template>
    <div>
        <button class="button" @click='changeData()'>{{title}}</button>
    </div>
</template>

<style lang="scss" scoped>
    .button {
        background: deeppink;
    }
</style>
<script>
export default {
    data() {
        return {
            hurr: 'durr',
        };
    },
    model : {
        prop: 'person',
        event: 'change'
    },
    props: {
        title: {
            type: String,
            default: 'My Button',
        },
        action: {
            type: Function,
        }
    },
    methods: {
        changeData: function () {
            this.hurr = 'test';
            this.action(this.hurr);
        }
    }
};
</script>
