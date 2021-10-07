import Vue from 'vue/dist/vue.js'
import Router from 'vue-router'
import Allergens from '@/components/Allergens'
import Homepage from '@/components/Homepage'
import Events from '@/components/Events'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/allergens',
            name: 'Allergens',
            component: Allergens
        },
        {
            path: '/',
            name: 'Homepage',
            component: Homepage
        },
        {
            path:'/events',
            name:'Events',
            component:Events
        }
       // { path: '*', component: NotFoundComponent }
    ]
})