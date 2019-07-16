<template>
    <div class="go">
        <table cellpadding="0" cellspacing="0" class="rankTable">
            <thead>
            <tr>
                <th><a>油站名称</a></th>
                <th class="noColor"><a>金额<span class="unit">(元)</span> </a></th>
                <th><a>累计金额<span class="unit">(元)</span> </a></th>
                <th><a>新增<span class="unit">(个)</span> </a></th>
                <th><a>累计人数</a></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(GTable,index) in list">
                <td>{{GTable.id}}</td>
                <td>{{GTable.userName}}</td>
                <td class="blueTd">{{GTable.num1}}</td>
                <td>{{GTable.num2}}</td>
                <td>{{GTable.number}}</td>
                <td>{{GTable.number2}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    import util from 'libs/util';
    import Mock from 'mockjs';
    export default {
        name: 'go',
        data(){
            return {
                list: {},
            }
        },
        created(){
            // 使用 Mock
            var data3 = Mock.mock(
                'http://mock.js', {
                    'list|3000': [{      //数据模板
                        'id|+1': 1,
                        "userName": '@name',     //模拟名称
                        'num1|1-99.2': 1,
                        'num2|1-9999.2': 1,
                        "number|1-100": 10,
                        "number2|1-100": 10
                    }]
                });
            // 输出结果
            util.ajax.get('http://mock.js').then((response) => {
                // 由于请求成功返回的是Promise对象，我们要从success.body拿到数组
                this.list = response.data.list;
            }, (error) => {
                console.log(error)
            });
        }
    }
</script>
<style lang="less">

    .lists {
        p {
            width: 40%;
            display: inline-block;
            vertical-align: middle;
        }
    }
</style>