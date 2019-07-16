<template>
    <div class="tableBox">
        <i-table :columns="columns1" :data="data1"></i-table>
    </div>
</template>
<script>
    export default {
        name:'tableBox',
        data(){
            return {
                columns1: [
                    {
                        title: '姓名',
                        key: 'name',
                        width:300,
                    },
                    {
                        title: '年龄',
                        key: 'age',
                        width:300,
                    },
                    {
                        title: '地址',
                        key: 'address',
                        width:300,
                    },
                    {
                        title: '地址地址地址地址地址',
                        key: 'names',
                        minWidth:500
                    },
                    {
                        title: '2',
                        key: 'ages',
                        width:300,
                    },
                    {
                        title: '3',
                        key: 'addresss',
                        width:300,
                    }
                ],
                data1: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居',
                        names: '地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址',
                        ages: 18,
                        addresss: '北京市朝阳区芍药居',
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗',
                        names: '王小明',
                        ages: 18,
                        addresss: '北京市朝阳区芍药居',
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道',
                        names: '王小明',
                        ages: 18,
                        addresss: '北京市朝阳区芍药居',
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道',
                        names: '王小明',
                        ages: 18,
                        addresss: '北京市朝阳区芍药居',
                    }
                ]
            }
        }
    }
</script>