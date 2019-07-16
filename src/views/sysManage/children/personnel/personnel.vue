<template>
    <div class="personnel">
        <bread-crumb-box></bread-crumb-box>
        <search-box></search-box>
        <table-box></table-box>
        <go></go>
    </div>
</template>

<script>
    import BreadCrumbBox from "../../../../component/common/mainRt/breadCrumb";
    import SearchBox from "../../../../component/common/mainRt/search";
    import TableBox from "../../../../component/common/mainRt/table";
    import Go from "../../../../component/common/mainRt/go";
    export default {
        components: {Go, TableBox, SearchBox, BreadCrumbBox}, name: 'personnel',
        data(){
            return {
                modal8: false,
            }
        },
        methods: {},
    }
</script>

<style lang="less" scoped>
    .personnel {
        width: 96%;
        margin: 0 auto;
    }
</style>

