<template>
    <div class="headerBox">
        <Row>
            <i-col span="6" class="logoBox">
                <img :src="logo" alt="易生活加油卡查询系统" class="logo"/>
            </i-col>
            <i-col span="14">
                <Menu mode="horizontal" active-key="1">
                    <Menu-item key="1" name="1">
                        <Icon type="ios-paper"></Icon>
                        系统管理

                    </Menu-item>
                    <Menu-item key="2" name="2">
                        <Icon type="ios-people"></Icon>
                        数据管理

                    </Menu-item>
                    <Submenu key="3" name="3">
                        <template slot="title">
                            <Icon type="stats-bars"></Icon>
                            公文包

                        </template>
                        <Menu-group title="使用">
                            <Menu-item key="3-1" name="3-1">新增和启动</Menu-item>
                            <Menu-item key="3-2" name="3-2">活跃分析</Menu-item>
                            <Menu-item key="3-3" name="3-3">时段分析</Menu-item>
                        </Menu-group>
                        <Menu-group title="留存">
                            <Menu-item key="3-4" name="3-4">用户留存</Menu-item>
                            <Menu-item key="3-5" name="3-5">流失用户</Menu-item>
                        </Menu-group>
                    </Submenu>
                    <Menu-item key="4" name="4">
                        <Icon type="settings"></Icon>
                        油站管理

                    </Menu-item>
                    <Menu-item key="5" name="5">
                        <Icon type="settings"></Icon>
                        微信管理

                    </Menu-item>
                    <Menu-item key="6" name="6">
                        <Icon type="settings"></Icon>
                        CRM管理

                    </Menu-item>
                    <Menu-item key="7" name="7">
                        <Icon type="settings"></Icon>
                        订单管理

                    </Menu-item>
                    <Menu-item key="8" name="8">
                        <Icon type="settings"></Icon>
                        {{$t("common.menuName")}}

                    </Menu-item>
                </Menu>
            </i-col>
            <i-col span = "2">
                <Dropdown trigger="click">
                    <a href="javascript:void(0)" class="userBox">
                        {{$t("common.lang")}}
                    </a>
                    <Dropdown-menu slot="list" class="langList">
                        <button class="langBtn" @click="ch">切换中文</button>
                        <button class="langBtn" @click="en">切换英文</button>
                    </Dropdown-menu>
                </Dropdown>
            </i-col>
            <i-col span="2">
                <Dropdown trigger="click">
                    <a href="javascript:void(0)" class="userBox">
                        <Icon type="person"></Icon>
                        {{userName}}
                    </a>
                    <Dropdown-menu slot="list" class="userList">
                        <Dropdown-item><Icon type="person"></Icon>修改密码</Dropdown-item>
                        <Dropdown-item><Icon type="person"></Icon>退出</Dropdown-item>
                    </Dropdown-menu>
                </Dropdown>
            </i-col>
        </Row>
    </div>
</template>
<script>
    export default {
        name: 'headerBox',
        data() {
            return {
                logo: '/src/images/logo.png',
                userName:'343'
            }
        },
        created(){
            this.$i18n.locale = 'zh'
        },
        methods:{
            ch(){
                this.$i18n.locale = 'zh'
                console.log(this.$i18n.locale)
            },
            en(){
                this.$i18n.locale = 'en'
                console.log(this.$i18n.locale)
            }
        }
    }
</script>
<style lang="less" scoped>
    .headerBox {
        box-sizing: border-box;
        border-bottom: 1px solid #ccc;
        background: #fff;
        .logoBox {
            padding: 19px 0;
            .logo {
                height:36px;
            }
        }
        .ivu-menu-horizontal {
            height: 80px;
            line-height: 80px;
        }
        .ivu-menu-horizontal.ivu-menu-light:after {
            height: 0;
        }
        .userBox{
            height:80px;
            line-height:80px;
            font-size:20px;
        }
        .userList{
            i{
                padding-right:10px;
            }
        }
        .langList{
            button{
                clear: both;
                display: block;
                padding: 7px 16px;
                background: none;
                border: none;
                color: #495060;
                font-size: 12px!important;
                cursor: pointer;
                outline: none;
                transition: background .2s ease-in-out;
                &:hover{
                    background: #f8f8f9
                }
            }
        }
    }
</style>