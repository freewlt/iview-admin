<template>
    <div class="index">
        <header-box></header-box>
        <router-view/>
    </div>
</template>
<script>
    import HeaderBox from "../component/common/header-box";
    export default {
        name: 'index',
        components: {HeaderBox},
    };
</script>
<style lang="less">
    .index {
        height: 100%;
        overflow: hidden;
    }
</style>