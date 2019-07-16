<template>
    <div class="app">
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name:'app',
        data() {
            return {

            };
        },
        mounted() {

        },
        beforeDestroy() {

        },
        methods: {

        }
    };
</script>
<style>
    @import "style/common.css";
.app{
    width:100%;
    height:100%;
    min-width: 1000px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background: #e8e8e8;
}
</style>