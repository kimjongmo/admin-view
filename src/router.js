import Vue from 'vue';
import Router from 'vue-router';
import UserContent from "./components/user/UserContent";
import ItemContent from "./components/item/ItemContent"
import DefaultContent from "./components/common/DefaultContent";
import UserInfoPage from "./components/user/UserInfoPage";
import CategoryContent from "./components/category/CategoryContent";
import PartnerContent from "./components/partner/PartnerContent";
import OrderDetailContent from "./components/orderDetail/OrderDetailContent";

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
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
            path: '/orders',
            name: 'orders',
            component: OrderDetailContent
        }
    ],

})