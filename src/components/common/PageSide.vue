<template>
    <aside class="main-sidebar">
        <section class="sidebar">
            <ul class="sidebar-menu" data-widget="tree">
                <li @click="movePage('users', $event)">
                    <a>
                        <i class="fa fa-link"></i>
                        <span>고객 관리</span>
                    </a>
                </li>
                <li @click="movePage('items',$event)">
                    <a>
                        <i class="fa fa-link"></i>
                        <span>상품 관리</span>
                    </a>
                </li>
                <li @click="movePage('categorys',$event)">
                    <a>
                        <i class="fa fa-link"></i>
                        <span>카테고리 관리</span>
                    </a>
                </li>
                <li @click="movePage('partners',$event)">
                    <a>
                        <i class="fa fa-link"></i>
                        <span>파트너 관리</span>
                    </a>
                </li>
                <li @click="movePage('orders',$event)">
                    <a>
                        <i class="fa fa-link"></i>
                        <span>주문내역 관리</span>
                    </a>
                </li>
            </ul>
        </section>
    </aside>
</template>

<script>
    export default {
        name: "SideBar",
        methods: {
            movePage(path,event){
                event.target.classList.add('active')
                this.$router.push({name: path});
            }
        }
    }
</script>

<style scoped>
</style>