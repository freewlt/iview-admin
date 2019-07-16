<template>
    <div class="indexSys">
        <Content>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <first></first>
                </Sider>
                <Content  class="mainRt">
                    <router-view/>
                </Content>
            </Layout>
        </Content>
    </div>
</template>
<script>
    import First from "../../component/common/menuLf/first";
    export default {
        name: 'indexSys',
        components: {First},
        data(){
            return {}
        }
    }
</script>

<style lang="less" scoped>
    .indexSys {
        width: 100%;
        height: 90%;
        box-sizing: border-box;
        .ivu-layout-sider{
            overflow-y: auto!important;
        }
        .ivu-layout-content,.ivu-layout-has-sider{
            height: 100%;
        }
        .mainRt {
            padding: 10px 10px 10px 10px;
            background: #fff;
        }
    }

</style>
