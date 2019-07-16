<template>
    <div class="asideBox">
        <Menu accordion active-name="1">
            <template v-for="(item,index) in list">
                <div v-if="item.children">
                    <Submenu :key="item.name" :name="item.name">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            {{item.name}}
                        
                        </template>
                        <MenuItem v-for="(subItem, subIndex) in item.children"
                                  :key="subItem.name" :name="item.name">
                            <router-link to="www.baidu.com">
                                {{subItem.name}}
                            
                            </router-link>
                        </MenuItem>
                    </Submenu>
                </div>
                <router-link to="" class="noIcon" v-else>
                    <Submenu :key="item.name" :name="item.name">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            {{item.name}}
                        
                        </template>
                    </Submenu>
                </router-link>
            </template>
        </Menu>
    </div>
</template>
<script>
    export default {
        name: 'asideBox',
        data(){
            return {}
        },
        props: {
            list: {},
        },
    }
</script>

<style lang="less" scoped>
    .asideBox {
        height: 100%;
        .ivu-menu {
            height: 100%;
            width: auto !important;
            a {
                color: #495060;
            }
        }
    }

    .ivu-menu-vertical .ivu-menu-submenu-title-icon {
        display: none !important;
    }
</style>