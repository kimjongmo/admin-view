<template>
    <aside class="main-sidebar">
        <section class="sidebar">
            <ul class="sidebar-menu" data-widget="tree" :key="category.name" v-for="category in categories">
                <li :class="{active: isSelected(category.name)}" @click="movePage(category.name)">
                    <a>
                        <i class="fa fa-link"></i>
                        <span>{{category.description}}</span>
                    </a>
                </li>
            </ul>
        </section>
    </aside>
</template>

<script>
    export default {
        name: "SideBar",
        data : function(){
            return {
                categories: [
                    {name: "users", description: "고객 관리"},
                    {name: "items", description: "상품 관리"},
                    {name: "categorys", description: "카테고리 관리"},
                    {name: "partners", description: "파트너 관리"},
                    {name: "orders", description: "주문내역 관리"}
                ],
                selectedName: '',
            }
        },
        methods: {
            movePage(path){
                this.selectedName = path;
                this.$router.push({name: path});
            },
            isSelected: function(name) {
                if(this.selectedName === name){
                    return true;
                }
                return false;
            }
        }
    }
</script>

<style scoped>
</style>