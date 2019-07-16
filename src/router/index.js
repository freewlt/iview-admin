/**
 * Created by Administrator on 2018/9/6.
 */
import index from './../views/index.vue';
import indexSys from './../views/sysManage/index-system.vue'
import frame from './../views/frame/frame.vue'
import personnel from './../views/sysManage/children/personnel/personnel.vue'
const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: index,
        children:[
           {
               path: '/',
               component: indexSys,
               children: [
                   {
                       path: '/',
                       component: personnel,
                   }
               ]
           },
       ]
    },
    {
        path: '/index',
        component: index,
        children: [
            {
                path: '/',
                component: indexSys,
                children: [
                    {
                        path: '/',
                        component: frame,
                    }
                ]
            },
            {
                path: 'index-system',
                component: indexSys,
                children: [
                    {
                        path: '/',
                        component: frame,
                    },
                    {
                        path: 'personnel',
                        name: 'personnel',
                        component: personnel,
                    },
                ]
            }
        ]
    }];
export default routers;