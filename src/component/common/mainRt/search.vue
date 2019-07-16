<template>
    <div class="searchBox">
        <div class="left">
            <i-button type="primary">Primary</i-button>
        </div>
        <div class="right">
            <i-input placeholder="人员名称" v-model="id" class="nouveau"></i-input>
            <i-input placeholder="手机号" v-model="phone" class="nouveau"></i-input>
            <i-button>搜索</i-button>
        </div>
        <i-button type="primary" @click="isShow = true">打开提醒</i-button>

        <Modal
                v-model="isShow"
                title="普通的Modal对话框标题"
                @on-ok="ok"
                @on-cancel="cancel">
            <p>对话框内容</p>
            <p>对话框内容</p>
            <p>对话框内容</p>
            <form-box></form-box>
        </Modal>
    </div>
</template>

<script>
    import FormBox from "../modal/form";
    export default {
        components: {FormBox}, name: "searchBox",
        data(){
            return {
                id: '',
                phone: '',
                isShow: false
            }
        },
        methods: {
            ok () {
                this.$Message.info('点击了确定');
            },
            cancel () {
                this.$Message.info('点击了取消');
            },

        },

    }
</script>

<style lang="less">
    .searchBox {
        display: -webkit-flex; /* Safari */
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
        justify-content: space-between;
        padding: 10px 0 10px 5px;
    }

    .nouveau {
        display: inline-block;
        vertical-align: middle;
        margin-right: 5px;
        width: 100px!important;
    }
    .v-transfer-dom{
        position: relative;

    }

</style>
