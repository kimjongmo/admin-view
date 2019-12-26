import Vue from 'vue';
import Router from 'vue-router';
import UserContent from "./components/user/UserContent";
import ItemContent from "./components/item/ItemContent"
import DefaultContent from "./components/common/DefaultContent";
import UserInfoPage from "./components/user/UserInfoPage";
import CategoryContent from "./components/category/CategoryContent";
import PartnerContent from "./components/partner/PartnerContent";
import OrderDetailContent from "./components/orderDetail/OrderDetailContent";
import UserModify from "./components/user/modify/UserModify";
import ItemInfoPage from "./components/item/info/ItemInfoPage";
import PartnerInfoPage from "./components/partner/info/PartnerInfoPage";
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
          path: '/userModify/:id',
          name: 'userModify',
          component: UserModify
        },
        {
            path: '/user/:id',
            name: 'user',
            component: UserInfoPage
        },
        {
            path: '/users/:page?',
            name: 'users',
            component: UserContent
        },
        {
            path: '/items',
            name: 'items',
            component: ItemContent
        },
        {
            path: '/item/:id',
            name: 'itemInfo',
            component: ItemInfoPage
        },
        {
            path: '/',
            name: 'default',
            component: DefaultContent
        }, {
            path: '/categorys',
            name: 'categorys',
            component: CategoryContent
        },
        {
            path: '/partners',
            name: 'partners',
            component: PartnerContent
        },
        {
            path: '/partner/:id',
            name: 'partnerInfo',
            component: PartnerInfoPage
        },
        {
            path: '/orders',
            name: 'orders',
            component: OrderDetailContent
        }
    ],

})