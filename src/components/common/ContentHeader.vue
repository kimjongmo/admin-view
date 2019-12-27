<template>
    <section class="content-header">
        <h1>
            {{tabList[0].title}}<!--{{header.title}}-->
            <small>{{selected().title}}</small><!--{{header.currentTab}}-->
        </h1>
        <ol class="breadcrumb">
            <li v-for="tab in tabList" :key="tab.title" :class="{active: tab.selected}">
                <a @click="moveTab(tab.name,tab.href)">
                    <i class="fa fa-dashboard"></i>{{tab.title}}
                </a>
            </li>
        </ol>
    </section>
</template>

<script>
    export default {
        props: ['tabList'],
        name: "ContentHeader",
        methods: {
            selected: function () {
                if(typeof this.tabList === 'object' && this.tabList !==''){
                    return this.tabList.filter(tab => tab.selected)
                }
                return '';
            },
            moveTab: function (name,id) {
                if(name!=='' && id!==''){
                    this.$router.push({name: name, params: {id: id}});
                }else if(name!=='' && id===''){
                    this.$router.push({name: name});
                }
            }
        }
    }
</script>

<style scoped>

</style>